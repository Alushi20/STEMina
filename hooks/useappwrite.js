// lib/appwrite.js
import { Client, Databases } from 'appwrite';

const client = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1') // Appwrite Endpoint
  .setProject('67a790980026bdb3a1f0'); // Project ID

const databases = new Databases(client);

const DATABASE_ID = '67a79952002b64abb5e9'; // Database ID

// Collection IDs
const COLLECTION_ID_USERS = '67cd5be60029ed3f153e'; // Users Collection ID
const COLLECTION_ID_COMMUNITIES = '67cd5bf700166f685140'; // Communities Collection ID
const COLLECTION_ID_EVENTS = '67cd5bfb001a53426e23'; // Events Collection ID
const COLLECTION_ID_STORIES = '67cd5bff00283f175015'; // Stories Collection ID
const COLLECTION_ID_MENTORS = '67cd5bec0025fc1441b7'; // Mentors Collection ID

export function useAppwrite() {
  const saveUser = async (name, email, password, age, education, interests) => {
    // Now "databases" is defined
    await databases.createDocument(DATABASE_ID, COLLECTION_ID_USERS, 'unique()', {
      name,
      email,
      password,
      age,
      education,
      interests
    });
    
  };

  return {
    saveUser,
    loading: false,
    error: null
  };
}