// app/user.js
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';

export default function UserScreen() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('skills');

  return (
    <SafeAreaView style={styles.container}>
      {/* Curved Purple Header */}
      <View style={styles.headerContainer}>
        {/* Back Arrow (takes user to Home page) */}
        <TouchableOpacity style={styles.backButton} onPress={() => router.push('/')}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>

        {/* User Avatar */}
        <View style={styles.avatarWrapper}>
          <Image
            source={require('../assets/images/emily.png')} // Replace with your avatar image
            style={styles.avatar}
          />
        </View>
      </View>

      {/* Main Info Container */}
      <View style={styles.mainInfoContainer}>
        <Text style={styles.userHandle}>@Emily</Text>
        <Text style={styles.userLocation}>New York</Text>

        {/* Stats Row */}
        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>220</Text>
            <Text style={styles.statLabel}>STEMlinks</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>15</Text>
            <Text style={styles.statLabel}>Communities</Text>
          </View>
        </View>

        {/* Tabs for Skills / Workplaces */}
        <View style={styles.tabRow}>
          <TouchableOpacity
            style={[styles.tabButton, activeTab === 'skills' && styles.tabButtonActive]}
            onPress={() => setActiveTab('skills')}
          >
            <Text style={[styles.tabButtonText, activeTab === 'skills' && styles.tabButtonTextActive]}>
              Skills
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.tabButton, activeTab === 'workplaces' && styles.tabButtonActive]}
            onPress={() => setActiveTab('workplaces')}
          >
            <Text style={[styles.tabButtonText, activeTab === 'workplaces' && styles.tabButtonTextActive]}>
              Workplaces
            </Text>
          </TouchableOpacity>
        </View>

        {/* Edit Profile Button */}
        <TouchableOpacity
          style={styles.editProfileButton}
          onPress={() => router.push('/edit_profile')}
        >
          <Text style={styles.editProfileButtonText}>Edit Profile</Text>
        </TouchableOpacity>

        {/* Example Tab Content */}
        {activeTab === 'skills' ? (
          <View style={styles.tabContent}>
            <Text style={styles.tabContentText}>User’s skills go here.</Text>
          </View>
        ) : (
          <View style={styles.tabContent}>
            <Text style={styles.tabContentText}>User’s workplaces go here.</Text>
          </View>
        )}
      </View>

      {/* CONTACT US Section */}
      <View style={styles.contactUsContainer}>
        <Text style={styles.contactUsTitle}>CONTACT US</Text>
        <Text style={styles.contactUsText}>
          email: thebeststartup@gmail.com{'\n'}
          or click the following for a direct message
        </Text>
      </View>

      {/* Bottom Tab Bar */}
      <View style={styles.bottomTabBar}>
        {/* Home */}
        <TouchableOpacity 
          style={styles.tabItem}
          onPress={() => router.push('/')} // or '/home' if your home route is named "home"
        >
          <Ionicons name="home" size={24} color="#999" />
          <Text style={styles.tabLabel}>Home</Text>
        </TouchableOpacity>

        {/* Communities */}
        <TouchableOpacity 
          style={styles.tabItem}
          onPress={() => router.push('/communities_screen')}
        >
          <Ionicons name="people-outline" size={24} color="#999" />
          <Text style={styles.tabLabel}>Communities</Text>
        </TouchableOpacity>

        {/* Events */}
        <TouchableOpacity 
          style={styles.tabItem}
          onPress={() => router.push('/upcoming_events_screen')}
        >
          <Ionicons name="newspaper-outline" size={24} color="#999" />
          <Text style={styles.tabLabel}>Events</Text>
        </TouchableOpacity>


        {/* Profile (active) */}
        <TouchableOpacity 
          style={styles.tabItem}
          onPress={() => router.push('/user')}
        >
          <Ionicons name="person-outline" size={24} color="#7E5BEF" />
          <Text style={styles.tabLabelActive}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9D5FF', // Lighter purple background
  },
  headerContainer: {
    backgroundColor: '#BFA0F3', // Main purple
    height: 160,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    left: 20,
    top: 50,
  },
  avatarWrapper: {
    position: 'absolute',
    top: 60,
    alignSelf: 'center',
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    resizeMode: 'cover',
  },
  mainInfoContainer: {
    marginTop: 80, // space for the avatar
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  userHandle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#7E5BEF',
    marginBottom: 5,
  },
  userLocation: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  statsRow: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  statItem: {
    alignItems: 'center',
    marginHorizontal: 15,
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
  },
  tabRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  tabButton: {
    backgroundColor: '#F4E9FF',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  tabButtonActive: {
    backgroundColor: '#7E5BEF',
  },
  tabButtonText: {
    fontSize: 14,
    color: '#7E5BEF',
  },
  tabButtonTextActive: {
    color: '#FFF',
  },
  editProfileButton: {
    width: '80%',
    backgroundColor: '#7E5BEF',
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
  },
  editProfileButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  tabContent: {
    width: '100%',
    backgroundColor: '#F4E9FF',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  tabContentText: {
    fontSize: 14,
    color: '#333',
  },
  contactUsContainer: {
    flex: 1,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: 20,
    padding: 20,
    alignItems: 'center',
  },
  contactUsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#7E5BEF',
    marginBottom: 10,
    marginTop: 10,
  },
  contactUsText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },

  // Bottom Tab Bar
  bottomTabBar: {
    flexDirection: 'row',
    height: 60,
    borderTopWidth: 1,
    borderTopColor: '#EEE',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#FFF',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabLabel: {
    fontSize: 12,
    color: '#999',
    marginTop: 2,
  },
  tabLabelActive: {
    fontSize: 12,
    color: '#7E5BEF',
    marginTop: 2,
    fontWeight: '600',
  },
});
