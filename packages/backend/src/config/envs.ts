import * as dotenv from 'dotenv';
dotenv.config();

export const PORT = Number(process.env.PORT);
export const DB_URL = process.env.DB_URL || '';
