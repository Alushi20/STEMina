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
            // navigation.goBack() or any desired action
          }}
        >
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        
        {/* STEMina Logo (replace with your own asset if you have one) */}
        <Text style={styles.logoText}>STEMina</Text>
        {/* Or use <Image source={require('../assets/stemina.png')} style={styles.logoImage} /> */}
      </View>

      {/* Form Container */}
      <View style={styles.formContainer}>
        {/* Email Input */}
        <View style={styles.inputWrapper}>
          <Ionicons name="mail-outline" size={20} color="#7D5584" style={styles.inputIcon} />
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
          <Ionicons name="lock-closed-outline" size={20} color="#7D5584" style={styles.inputIcon} />
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
        <TouchableOpacity style={styles.loginButton} onPress={handleSignIn}>
          <Text style={styles.loginButtonText}>LOG IN</Text>
        </TouchableOpacity>

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
          <TouchableOpacity onPress={() => {/* navigation to Sign Up screen */}}>
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
      alignItems: 'center',
      marginBottom: 20,
    },
    loginButtonText: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: '600',
    },
    orContainer: {
      marginVertical: 10,
    },
    orText: {
      color: '#7D5584',
      fontWeight: 'bold',
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
      color: '#7E5BEF',
      fontWeight: 'bold',
      textDecorationLine: 'underline',
    },
  });
  