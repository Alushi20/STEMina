import { Client, Databases } from 'appwrite';

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Appwrite endpoint
    .setProject('67a790980026bdb3a1f0'); // Project id

const databases = new Databases(client);
const DATABASE_ID = '67a79952002b64abb5e9'; //DB id
const COLLECTION_ID = '67b203e3003086b5a695'; //Collection id

export { client, databases, DATABASE_ID, COLLECTION_ID };



