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

export default function edit_profile({ navigation }) {
  // Example states for form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState(''); 
  const [age, setAge] = useState('');
  const [education, setEducation] = useState('');
  const [interests, setInterests] = useState('');

  // Handler for back arrow
  const handleGoBack = () => {
    // If using React Navigation:
    // navigation.goBack();
  };

  // Handler for changing the avatar
  const handleChangeAvatar = () => {
    // Implement your image picker logic here
    console.log('Change avatar tapped');
  };

  // Handler for saving changes
  const handleSaveChanges = () => {
    // TODO: Integrate your backend logic (e.g., update user info in Appwrite or Firebase)
    console.log('Saving changes:', { name, email, age, education, interests });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Curved Purple Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>

        <View style={styles.avatarWrapper}>
          <Image
            source={require('../assets/images/emily1.png')} // Replace with your user's avatar
            style={styles.avatar}
          />
          <TouchableOpacity style={styles.editIconContainer} onPress={handleChangeAvatar}>
            <Ionicons name="camera-outline" size={16} color="#fff" />
          </TouchableOpacity>
        </View>

        <Text style={styles.headerTitle}>Edit profile</Text>
      </View>

      {/* Main Content */}
      <KeyboardAvoidingView
        style={styles.formContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Name"
            placeholderTextColor="#7D5584"
            value={name}
            onChangeText={setName}
          />
        </View>

        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#7D5584"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>

        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Age"
            placeholderTextColor="#7D5584"
            value={age}
            onChangeText={setAge}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Highest level of education"
            placeholderTextColor="#7D5584"
            value={education}
            onChangeText={setEducation}
          />
        </View>

        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Interests"
            placeholderTextColor="#7D5584"
            value={interests}
            onChangeText={setInterests}
          />
        </View>

        {/* SAVE CHANGES Button */}
        <TouchableOpacity style={styles.saveButton} onPress={handleSaveChanges}>
          <Text style={styles.saveButtonText}>SAVE CHANGES</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
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
  avatarWrapper: {
    position: 'absolute',
    top: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    resizeMode: 'cover',
  },
  editIconContainer: {
    position: 'absolute',
    bottom: 0,
    right: -5,
    backgroundColor: '#7E5BEF',
    borderRadius: 15,
    padding: 3,
    borderWidth: 2,
    borderColor: '#FFF',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
  },

  // Form Container
  formContainer: {
    flex: 1,
    backgroundColor: '#E9D5FF', // Lighter purple background
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: -30, // Overlap the header a bit
    paddingTop: 60,
    paddingHorizontal: 30,
    alignItems: 'center',
  },

  // Input Styles
  inputWrapper: {
    width: '100%',
    backgroundColor: '#F4E9FF',
    borderRadius: 20,
    marginBottom: 15,
    paddingHorizontal: 15,
  },
  input: {
    height: 50,
    color: '#333',
  },

  // Save Button
  saveButton: {
    width: '100%',
    backgroundColor: '#7E5BEF',
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  saveButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
