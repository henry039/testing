import { JWT_SECRET } from './config';
import { verify, sign } from 'jsonwebtoken';
import { promisify } from 'util';

const verPromise = promisify(verify);
export const signJWT = (name: string) => sign({ name }, JWT_SECRET, { expiresIn: '2m' });
export const verifyJWT = (token: string): Promise<any> => verPromise(token, JWT_SECRET);
