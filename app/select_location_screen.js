// app/select_location_screen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Keyboard,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '100%',
  height: '100%',
};

export default function SelectLocationScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [center, setCenter] = useState({ lat: 40.7128, lng: -74.0060 });
  const [markerCoord, setMarkerCoord] = useState({ lat: 40.7128, lng: -74.0060 });

  // Handler for back arrow
  const handleGoBack = () => {
    navigation.goBack();
  };

  // Handler for search (integrate Google Places API if desired)
  const handleSearch = () => {
    Keyboard.dismiss();
    // TODO: Implement your location search logic with Google Places API
    console.log('Searching for:', searchQuery);
  };

  // Called when user clicks on the map: update marker position
  const handleMapClick = (event) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    setMarkerCoord({ lat, lng });
    setCenter({ lat, lng });
  };

  // Handler for confirming location selection
  const handleConfirmLocation = () => {
    console.log('Location confirmed:', markerCoord);
    // Pass the selected coordinates back or update state as needed
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={18} color="#999" style={{ marginRight: 5 }} />
          <TextInput
            placeholder="Try gas stations, ATMs..."
            placeholderTextColor="#999"
            style={styles.searchInput}
            value={searchQuery}
            onChangeText={setSearchQuery}
            onSubmitEditing={handleSearch}
          />
        </View>
      </View>

      {/* Map using Google Maps API */}
      <View style={styles.mapContainer}>
        <LoadScript googleMapsApiKey="AIzaSyBvTv-TaVFpMZWmDRWMTy_d9fnwfZOgWrg">
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={10}
            onClick={handleMapClick}
          >
            <Marker position={markerCoord} />
          </GoogleMap>
        </LoadScript>
      </View>

      {/* Confirm Button */}
      <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmLocation}>
        <Text style={styles.confirmButtonText}>Confirm Location</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  topBar: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#FFF',
    alignItems: 'center',
  },
  backButton: { marginRight: 10 },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#F0F0F0',
    borderRadius: 8,
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 5,
    color: '#333',
  },
  mapContainer: { flex: 1 },
  confirmButton: {
    position: 'absolute',
    bottom: 40,
    left: '20%',
    right: '20%',
    backgroundColor: '#7E5BEF',
    borderRadius: 20,
    paddingVertical: 12,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
