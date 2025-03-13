// app/login.js
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Link, useRouter } from 'expo-router';
const router = useRouter();
export default function SignInScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignIn = () => {
    // TODO: Add your sign-in logic here (e.g., Appwrite, Firebase, etc.)
    console.log('Signing in with:', email, password);
  };

  return (
    <View style={styles.container}>
      {/* Header (Arrow + Logo) */}
      <View style={styles.headerContainer}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => {
            router.push('/')
          }}
        >
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        

      </View>

      {/* Form Container */}
      <View style={styles.formContainer}>
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

        {/* Forgot Password */}
        <TouchableOpacity style={styles.forgotButton}>
          <Text style={styles.forgotText}>FORGOT PASSWORD</Text>
        </TouchableOpacity>

        {/* Log In Button */}
        <Link
          href="/home"
          style={styles.loginButton}
          onPress={(e) => {
            // Optionally, if you need to prevent default navigation until sign-in is complete:
            // e.preventDefault();
            handleSignIn();
          }}
        >
          <View style={styles.loginButtonContent}>
            <Text style={styles.loginButtonText}>LOG IN</Text>
          </View>
        </Link>

        {/* OR LOG IN BY */}
        <View style={styles.orContainer}>
          <Text style={styles.orText}>OR LOG IN BY</Text>
        </View>

        {/* Social Icons (Google + Facebook) */}
        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <Ionicons name="logo-google" size={24} color="#DB4437" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Ionicons name="logo-facebook" size={24} color="#4267B2" />
          </TouchableOpacity>
        </View>

        {/* Bottom Sign Up Prompt */}
        <View style={styles.bottomSignUp}>
          <Text style={{ color: '#7D5584' }}>Don't have account? </Text>
          <TouchableOpacity onPress={() => {
            router.push("/signup")
          }}>
            <Text style={styles.signUpText}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
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
    height: '30%',
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
  formContainer: {
    flex: 1,
    backgroundColor: '#E9D5FF', // Lighter purple background for the form
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingTop: 40,
    paddingHorizontal: 30,
    alignItems: 'center',
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
  forgotButton: {
    alignSelf: 'flex-end',
    marginRight: 5,
    marginBottom: 20,
  },
  forgotText: {
    color: '#7D5584',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  loginButton: {
    width: '100%',
    backgroundColor: '#7E5BEF',
    paddingVertical: 15,
    borderRadius: 25,
    marginBottom: 20,
  },
  loginButtonContent: {
    flex: 1,
    alignItems: 'center',      // Centers horizontally
    justifyContent: 'center',  // Centers vertically
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',       // Ensure text is centered
  },
  orContainer: {
    marginVertical: 10,
  },
  orText: {
    color: '#7D5584',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  socialContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  socialButton: {
    backgroundColor: '#FFF',
    borderRadius: 25,
    width: 50,
    height: 50,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomSignUp: {
    flexDirection: 'row',
    marginTop: 20,
  },
  signUpText: {
    color: '#7D558F',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
});
