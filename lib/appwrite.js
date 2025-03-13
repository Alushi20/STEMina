// lib/appwrite.js
import { Client, Databases } from 'appwrite';

const client = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1') // Appwrite Endpoint
  .setProject('67a790980026bdb3a1f0'); // Your Project ID

const databases = new Databases(client);

const DATABASE_ID = '67a79952002b64abb5e9'; // Your Database ID

// Collection IDs
const COLLECTION_ID_USERS = '67cd5be60029ed3f153e'; // Users Collection ID
// (Other collection IDs can be exported if needed)

export function useAppwrite() {
  const saveUser = async (name, email, password, age, education, interests) => {
    await databases.createDocument(
      DATABASE_ID,
      COLLECTION_ID_USERS,  // Use the proper collection ID here!
      'unique()',
      { name, email, password, age, education, interests }
    );
  };

  return {
    saveUser,
    loading: false,
    error: null,
  };
}

export {
  client,
  databases,};
