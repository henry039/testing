import { genSalt, hash, compare } from 'bcrypt';

export const hashedText = async (inputText: string): Promise<string> => {
	const salt = await genSalt(10);
	return hash(inputText, salt);
};

export const isSameText = (inputText: string, dbText: string): Promise<boolean> => compare(inputText, dbText);
