import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Link } from 'expo-router'; // Import Link from expo-router
import { useRouter } from 'expo-router';
  const router = useRouter();







export default function SignUpScreen({ navigation }) {
  // Form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [education, setEducation] = useState('');
  const [interests, setInterests] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Handlers
  const handleSignUp = () => {
    // TODO: Add your sign-up logic here (e.g. Appwrite, Firebase, etc.)
    console.log('Signing up with:', {
      name,
      email,
      password,
      age,
      education,
      interests,
    });
  };

  const handleSignUpAsMentor = () => {
    // Replace navigation.navigate with router.push
    router.push('/sign_up_as_a_mentor');
  };

  return (
    <View style={styles.container}>
      {/* Header (Arrow + Logo) */}
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => {
            router.push('/')          }}
        >
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>

       
      </View>

      {/* Form Container (ScrollView in case fields exceed screen) */}
      <View style={styles.formContainer}>
        <ScrollView
          contentContainerStyle={styles.formScroll}
          showsVerticalScrollIndicator={false}
        >
          {/* Name Input */}
          <View style={styles.inputWrapper}>
            <Ionicons
              name="person-outline"
              size={20}
              color="#7D5584"
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="Name"
              placeholderTextColor="#7D5584"
              value={name}
              onChangeText={setName}
            />
          </View>

          {/* Email Input */}
          <View style={styles.inputWrapper}>
            <Ionicons
              name="mail-outline"
              size={20}
              color="#7D5584"
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#7D5584"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          {/* Password Input with Eye Icon */}
          <View style={styles.inputWrapper}>
            <Ionicons
              name="lock-closed-outline"
              size={20}
              color="#7D5584"
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#7D5584"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity onPress={togglePasswordVisibility}>
              <Ionicons
                name={showPassword ? 'eye-outline' : 'eye-off-outline'}
                size={20}
                color="#7D5584"
                style={styles.eyeIcon}
              />
            </TouchableOpacity>
          </View>

          {/* Age Input */}
          <View style={styles.inputWrapper}>
            <Ionicons
              name="calendar-outline"
              size={20}
              color="#7D5584"
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="Age"
              placeholderTextColor="#7D5584"
              keyboardType="numeric"
              value={age}
              onChangeText={setAge}
            />
          </View>

          {/* Highest Level of Education */}
          <View style={styles.inputWrapper}>
            <Ionicons
              name="school-outline"
              size={20}
              color="#7D5584"
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="Highest level of education"
              placeholderTextColor="#7D5584"
              value={education}
              onChangeText={setEducation}
            />
          </View>

          {/* Interests */}
          <View style={styles.inputWrapper}>
            <Ionicons
              name="list-circle-outline"
              size={20}
              color="#7D5584"
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="Interests"
              placeholderTextColor="#7D5584"
              value={interests}
              onChangeText={setInterests}
            />
          </View>

          <Link
  href="/home"
  style={styles.signUpButton}
  onPress={(e) => {
    handleSignUp();
  }}
>
  <View style={styles.signUpButtonContent}>
    <Text style={styles.signUpButtonText}>SIGN UP</Text>
  </View>
</Link>


          <TouchableOpacity
            style={styles.signUpButtonMentor}
            onPress={handleSignUpAsMentor}
          >
            <Text style={styles.signUpButtonText}>SIGN UP AS MENTOR</Text>
          </TouchableOpacity>

          {/* Bottom Prompt */}
          <View style={styles.bottomPrompt}>
            <Text style={{ color: '#7D5584' }}>Already have account? </Text>
            <TouchableOpacity onPress={() => {/* navigation to Log In screen */}}>
              <Text style={styles.logInText}>Log In</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BFA0F3', // Main purple background
  },
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
    // If you have an image, remove this text and use an <Image> instead
  },
  // If you have a logo image:
  // logoImage: {
  //   width: 100,
  //   height: 100,
  //   resizeMode: 'contain',
  // },
  formContainer: {
    flex: 1,
    backgroundColor: '#E9D5FF', // Lighter purple background
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingTop: 30,
    paddingHorizontal: 30,
  },
  formScroll: {
    alignItems: 'center',
    paddingBottom: 50, // space for scroll
  },
  inputWrapper: {
    width: '100%',
    backgroundColor: '#F4E9FF',
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    paddingHorizontal: 15,
  },
  inputIcon: {
    marginRight: 5,
  },
  eyeIcon: {
    marginLeft: 5,
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    color: '#333',
  },
  signUpButton: {
    width: '100%',
    backgroundColor: '#7E5BEF',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 10,
  },
  signUpButtonMentor: {
    width: '100%',
    backgroundColor: '#7E5BEF',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  signUpButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  bottomPrompt: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'center',
  },
  logInText: {
    color: '#7E5BEF',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});
