// app/upload_event_screen.js
import React, { useState, useEffect, useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import { EventContext } from './EventContext';

export default function UploadEventScreen() {
  const router = useRouter();
  const { addEvent } = useContext(EventContext);

  const [eventName, setEventName] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [facilitators, setFacilitators] = useState('');

  const handleUploadImage = () => {
    console.log('Upload image tapped');
  };

  // When the map icon is pressed, redirect to the select location screen.
  const handleSelectLocation = () => {
    router.push('/select_location_screen');
  };

  const handleSubmit = () => {
    const newEvent = {
      id: Date.now().toString(),
      eventName,
      dateTime,
      location,
      description,
      facilitators,
    };
    addEvent(newEvent);
    console.log('Event submitted:', newEvent);
    router.push('/upcoming_events_screen');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Purple Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.logoText}>STEMina</Text>
      </View>

      {/* Main Content */}
      <KeyboardAvoidingView
        style={styles.formContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        {/* Upload Box */}
        <TouchableOpacity style={styles.uploadContainer} onPress={handleUploadImage}>
          <Ionicons name="cloud-upload-outline" size={50} color="#7D5584" />
        </TouchableOpacity>

        {/* Date & Time */}
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Date & time"
            placeholderTextColor="#7D5584"
            value={dateTime}
            onChangeText={setDateTime}
          />
        </View>

        {/* Location (with map button) */}
        <View style={[styles.inputWrapper, { flexDirection: 'row', alignItems: 'center' }]}>
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder="Location"
            placeholderTextColor="#7D5584"
            value={location}
            onChangeText={setLocation}
          />
          <TouchableOpacity style={styles.mapButton} onPress={handleSelectLocation}>
            <Ionicons name="map-outline" size={24} color="#7D5584" />
          </TouchableOpacity>
        </View>

        {/* Event Name */}
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Event name"
            placeholderTextColor="#7D5584"
            value={eventName}
            onChangeText={setEventName}
          />
        </View>

        {/* Description */}
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Description"
            placeholderTextColor="#7D5584"
            value={description}
            onChangeText={setDescription}
          />
        </View>

        {/* Facilitators */}
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Facilitators"
            placeholderTextColor="#7D5584"
            value={facilitators}
            onChangeText={setFacilitators}
          />
        </View>

        {/* Submit Button */}
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>SUBMIT</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BFA0F3',
  },
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
  logoText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
  formContainer: {
    flex: 1,
    backgroundColor: '#E9D5FF',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: -30,
    paddingTop: 60,
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  uploadContainer: {
    width: '80%',
    height: 100,
    backgroundColor: '#F4E9FF',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  inputWrapper: {
    width: '100%',
    backgroundColor: '#F4E9FF',
    borderRadius: 25,
    marginBottom: 15,
    paddingHorizontal: 15,
  },
  input: {
    height: 50,
    color: '#333',
  },
  mapButton: {
    marginRight: 10,
  },
  submitButton: {
    width: '100%',
    backgroundColor: '#7E5BEF',
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
