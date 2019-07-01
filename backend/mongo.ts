import { MongoClient, Collection } from 'mongodb';
import { MONGO_URL, MONGO_DB } from './config';

interface IUser {
	name: string;
	password: string;
}

export const mongoClient: Promise<MongoClient> = MongoClient.connect(MONGO_URL, { useNewUrlParser: true });
export const mongoClose = (client: MongoClient): Promise<void> => client.close();
export const mongoCollection = (client: MongoClient, collectionName: string): Collection =>
	client.db(MONGO_DB).collection(collectionName);
export const signUpUser = (collection: Collection, user: IUser) => collection.insertOne(user);
export const checkUserPwd = (collection: Collection, userName: string): Promise<string> =>
	collection.findOne({ name: userName }).then((res) => res.password);
export const updateWeather = (collection: Collection, weather: any) => collection.insertOne(weather);
export const getWeather = (collection: Collection): Promise<any> =>
	collection.find().sort({ _id: -1 }).limit(1).toArray().then((res) => res[0]);
