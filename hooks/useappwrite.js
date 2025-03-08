// hooks/useappwrite.js
import { useState } from 'react';
import { databases, DATABASE_ID, COLLECTION_ID } from '../lib/appwrite';

export function useAppwrite() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Existing function to save just a "name"
  const saveName = async (name) => {
    setLoading(true);
    setError(null);
    try {
      await databases.createDocument(
        DATABASE_ID,
        COLLECTION_ID,
        'unique()',
        { name }
      );
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // NEW: Save a user object with name, email, and password
  const saveUser = async (name, email, password) => {
    setLoading(true);
    setError(null);
    try {
      await databases.createDocument(
        DATABASE_ID,
        COLLECTION_ID,
        'unique()',
        { 
          name, 
          email, 
          password 
        }
      );
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { 
    saveName,    // old function (optional)
    saveUser,    // new function for sign-up
    loading, 
    error 
  };
}
