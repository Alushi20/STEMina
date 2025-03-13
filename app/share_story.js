import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function ShareStoryScreen({ navigation }) {
  const [story, setStory] = useState('');

  // Handler for selecting or uploading an image
  const handleUpload = () => {
    // TODO: Implement your image picker logic here (e.g., expo-image-picker)
    console.log('Upload image clicked');
  };

  // Handler for submitting the story
  const handleSubmit = () => {
    // TODO: Add your submission logic here (e.g., send to backend or Appwrite)
    console.log('Submitting story:', story);
  };

  return (
    <View style={styles.container}>
      {/* Header with back arrow + STEMina logo */}
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        
      </View>

      {/* Main content container */}
      <View style={styles.contentContainer}>
        {/* Upload Box */}
        <TouchableOpacity style={styles.uploadContainer} onPress={handleUpload}>
          <Ionicons name="cloud-upload-outline" size={50} color="#7D5584" />
        </TouchableOpacity>

        {/* Story Input */}
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{ width: '100%' }}
        >
          <TextInput
            style={styles.storyInput}
            placeholder="Write down your story..."
            placeholderTextColor="#7D5584"
            value={story}
            onChangeText={setStory}
            multiline
          />
        </KeyboardAvoidingView>

        {/* Submit Button */}
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// ------------------- STYLES -------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BFA0F3', // Main purple background
  },
  // Header
  headerContainer: {
    height: '25%',
    backgroundColor: '#BFA0F3',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    left: 20,
    top: 50,
  },
  logoText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },

  // Content Container
  contentContainer: {
    flex: 1,
    backgroundColor: '#E9D5FF', // Lighter purple background
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingTop: 30,
    paddingHorizontal: 30,
    alignItems: 'center',
  },

  // Upload box
  uploadContainer: {
    width: '80%',
    height: 200,
    backgroundColor: '#F4E9FF',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },

  // Story Input
  storyInput: {
    width: '100%',
    minHeight: 60,
    backgroundColor: '#F4E9FF',
    borderRadius: 20,
    padding: 15,
    color: '#333',
    textAlignVertical: 'top', // for multiline text alignment
    marginBottom: 20,
  },

  // Submit Button
  submitButton: {
    width: '80%',
    backgroundColor: '#7E5BEF',
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
