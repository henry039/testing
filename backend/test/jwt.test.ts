import request from 'supertest';
import { app } from '../app';
import { signJWT, verifyJWT } from '../jwt';
import { hashedText, isSameText } from '../auth';

describe('Login', () => {
	test('login', async () => {
		const res = await request(app).get('/weather');
		expect(res.status).toBe(401);
	});
});

describe('about jwt', () => {
	test('test jwt', async () => {
		const testText = 'test';
		const temp = signJWT(testText);
		const { name } = await verifyJWT(temp);
		expect(name).toBe(testText);
	});
});

describe('about hash', () => {
	test('test hash function', async () => {
		const testText = 'test';
		const hashed = await hashedText(testText);
		expect(await isSameText(testText, hashed)).toBe(true);
	});
});
