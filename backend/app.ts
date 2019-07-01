import express, { Application, Request, Response } from 'express';
import { json } from 'body-parser';
import { mongoClient, mongoClose, mongoCollection, signUpUser, checkUserPwd, getWeather, updateWeather } from './mongo';
import { hashedText, isSameText } from './auth';
import { signJWT, verifyJWT } from './jwt';
import { MongoClient } from 'mongodb';
import axios, { AxiosResponse } from 'axios';
import { WEATHER_URL } from './config';

export const app: Application = express();
app.use(json());
let client: MongoClient;
mongoClient.then((DBclient) => (client = DBclient));

app.post('/signup', async (req: Request, res: Response) => {
	const { name, password } = req.body;
	try {
		// const client = await mongoClient;
		const user = await mongoCollection(client, 'user');
		const hashedPwd = await hashedText(password);
		await signUpUser(user, { name, password: hashedPwd });
		res.status(200).send(`${name} has been successfully created`);
	} catch (err) {
		res.status(400).send(`"${name}" has already been taken`);
	}
});

app.post('/login', async (req: Request, res: Response) => {
	const { name, password } = req.body;
	try {
		// const client = await mongoClient;
		const user = await mongoCollection(client, 'user');
		const pwd = await checkUserPwd(user, name);
		(await isSameText(password, pwd))
			? res.status(200).send({ msg: `${name} login success`, token: signJWT(name) })
			: res.status(400).send('Wrong Password / Username');
	} catch (err) {
		res.status(400).send(`Wrong Password / Username`);
	}
});

app.get('/weather', async (req: Request, res: Response) => {
	const { authorization } = req.headers;
	try {
		if (authorization) {
			const token = authorization.split(' ')[1];
			await verifyJWT(token);
			const weather = await mongoCollection(client, 'weather');
			axios
				.get(WEATHER_URL)
				.then((feedback: AxiosResponse) => {
					updateWeather(weather, feedback.data);
					res.status(200).send(feedback.data);
				})
				.catch(async () => res.status(200).send(await getWeather(weather)));
		} else {
			res.status(401).send('You have to login to gain access token');
		}
	} catch (error) {
		res.status(500).send(error.message);
	}
});

app.listen(3000, () => console.log('listening on port 3000'));
process.on('SIGINT', async () => {
	await mongoClose(client);
	process.exit();
});
