// app/index.js
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* STEMina Logo */}
      <Image
        source={require('../assets/STEMina_No_background.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* "STEMina" text */}
      <Text style={styles.helloText}>STEMina</Text>

      {/* "Log in" button */}
      <Link href="/login" style={styles.button}>
        <Text style={styles.buttonText}>Log in</Text>
      </Link>

      {/* "Sign up" button */}
      <Link href="/signup" style={styles.button}>
        <Text style={styles.buttonText}>Sign up</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CDAAF0', // Adjust to your preferred purple
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },
  helloText: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#000',
  },
  button: {
    backgroundColor: '#7E5BEF',
    paddingHorizontal: 40,
    paddingVertical: 12,
    borderRadius: 25,
    marginVertical: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
});



// // app/index.js
// import React from 'react';
// import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

// // React Navigation imports
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// // Import your other screens
// import UploadEventScreen from './upload_event_screen';
// import SelectLocationScreen from './select_location_screen';
// // If you have Login and Signup screens, import them too
// // import LoginScreen from './login';
// // import SignupScreen from './signup';

// // HomeScreen defined as a named component
// function HomeScreen({ navigation }) {
//   return (
//     <View style={styles.container}>
//       {/* STEMina Logo */}
//       <Image
//         source={require('../assets/STEMina_No_background.png')}
//         style={styles.logo}
//         resizeMode="contain"
//       />

//       {/* "STEMina" text */}
//       <Text style={styles.helloText}>STEMina</Text>

//       {/* "Log in" button */}
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => navigation.navigate('Login')}
//       >
//         <Text style={styles.buttonText}>Log in</Text>
//       </TouchableOpacity>

//       {/* "Sign up" button */}
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => navigation.navigate('Signup')}
//       >
//         <Text style={styles.buttonText}>Sign up</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// // Create Stack Navigator
// const Stack = createStackNavigator();

// // Main App component is the default export
// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{ headerShown: false }}>
//         {/* Home screen route */}
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="UploadEvent" component={UploadEventScreen} />
//         <Stack.Screen name="SelectLocation" component={SelectLocationScreen} />

//         {/* Uncomment and define these screens if available:
//         <Stack.Screen name="Login" component={LoginScreen} />
//         <Stack.Screen name="Signup" component={SignupScreen} />
//         */}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// // Styles
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#CDAAF0', // Adjust to your preferred purple
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   logo: {
//     width: 150,
//     height: 150,
//     marginBottom: 30,
//   },
//   helloText: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     marginBottom: 40,
//     color: '#000', // or any text color you want
//   },
//   button: {
//     backgroundColor: '#7E5BEF',
//     paddingHorizontal: 40,
//     paddingVertical: 12,
//     borderRadius: 25,
//     marginVertical: 10,
//   },
//   buttonText: {
//     color: '#FFFFFF',
//     fontSize: 18,
//     fontWeight: '600',
//   },
// });


