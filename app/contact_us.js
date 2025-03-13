import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';


import { Link, useRouter } from 'expo-router';

const router = useRouter();

export default function ContactUsScreen({ navigation }) {
  const [message, setMessage] = useState('');

  // Handler for back arrow
  const handleGoBack = () => {
    router.push('/home')
  };

  // Handler for submitting the message
  const handleSubmit = () => {
    // TODO: Add your logic here (e.g., sending an email, storing in a database, etc.)
    console.log('Submitted message:', message);
    setMessage('');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Purple Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>


      </View>

      {/* Main Content (Lighter Purple) */}
      <View style={styles.contentContainer}>
        <KeyboardAvoidingView
          style={{ flex: 1, alignItems: 'center' }}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          {/* Message Input */}
          <TextInput
            style={styles.messageInput}
            placeholder="Write your message here..."
            placeholderTextColor="#7D5584"
            value={message}
            onChangeText={setMessage}
            multiline
          />

          {/* Submit Button */}
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>SUBMIT</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
}

// ------------- STYLES -------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BFA0F3', // Main purple background
  },
  // Header
  headerContainer: {
    height: '30%',
    backgroundColor: '#BFA0F3',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 20,
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

  // Content
  contentContainer: {
    flex: 1,
    backgroundColor: '#E9D5FF', // Lighter purple background
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: -30, // Overlap the header
    paddingTop: 60,
    paddingHorizontal: 30,
  },

  // Message Input
  messageInput: {
    width: '100%',
    minHeight: 100,
    backgroundColor: '#F4E9FF',
    borderRadius: 20,
    padding: 15,
    color: '#333',
    textAlignVertical: 'top',
    marginBottom: 20,
  },

  // Submit Button
  submitButton: {
    width: '100%',
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
