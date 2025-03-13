// app/upcoming_events_screen.js
import React, { useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import { EventContext } from './EventContext';

export default function UpcomingEventsScreen() {
  const router = useRouter();
  const { events } = useContext(EventContext);

  // Renders each event in a row: placeholder image, event info, and Join button
  const renderEventItem = ({ item }) => (
    <View style={styles.eventCard}>
      {/* Placeholder image on the left */}
      <View style={styles.imagePlaceholder}>
        <Ionicons name="image-outline" size={36} color="#ccc" />
      </View>

      {/* Event info in the middle */}
      <View style={styles.eventInfo}>
        <Text style={styles.eventDate}>{item.dateTime || 'Date & Time'}</Text>
        <Text style={styles.eventTitle}>{item.eventName || 'Event Name'}</Text>
        <Text style={styles.eventLocation}>{item.location || 'Location'}</Text>
      </View>

      {/* Join Button on the right */}
      <TouchableOpacity
        style={styles.joinButton}
        onPress={() => {
          console.log('Join event:', item.id);
          // Add your "join" logic here (API call, etc.)
        }}
      >
        <Text style={styles.joinButtonText}>Join</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.iconButton} onPress={() => router.push('/home')}>
          <Ionicons name="menu" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.topBarTitle}>Upcoming events</Text>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => router.push('/upload_event_screen')}
        >
          <Ionicons name="add-circle-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Event List */}
      <FlatList
        data={events}
        keyExtractor={(item) => item.id}
        renderItem={renderEventItem}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />

        {/* Bottom Tab Bar */}
<View style={styles.bottomTabBar}>
  {/* Home */}
  <TouchableOpacity
    style={styles.tabItem}
    onPress={() => router.push('/home')} // or '/home' if you have a separate home route
  >
    <Ionicons name="home" size={24} color="#999" />
    <Text style={styles.tabLabelActive}>Home</Text>
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
    <Ionicons name="newspaper-outline" size={24} color="#7E5BEF" />
    <Text style={styles.tabLabel}>Events</Text>
  </TouchableOpacity>


  {/* Profile */}
  <TouchableOpacity
    style={styles.tabItem}
    onPress={() => router.push('/user')}
  >
    <Ionicons name="person-outline" size={24} color="#999" />
    <Text style={styles.tabLabel}>Profile</Text>
  </TouchableOpacity>
</View>
    </SafeAreaView>
  );
}

// ------------------ STYLES ------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3ECFF', // Light purple background
  },
  // Top Bar
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 12,
    backgroundColor: '#FFF',
  },
  iconButton: {
    padding: 5,
  },
  topBarTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  listContent: {
    paddingBottom: 80, // space for bottom tab
  },
  eventCard: {
    flexDirection: 'row',    // Row layout to match your screenshot
    alignItems: 'center',
    backgroundColor: '#FFF',
    marginHorizontal: 15,
    marginVertical: 6,
    borderRadius: 10,
    padding: 10,
    elevation: 1,            // Android shadow
    shadowColor: '#000',     // iOS shadow
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  imagePlaceholder: {
    width: 60,
    height: 60,
    backgroundColor: '#EEE',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  eventInfo: {
    flex: 1,                 // Takes up remaining space in the row
  },
  eventDate: {
    fontSize: 12,
    color: '#7E5BEF',
    fontWeight: '600',
    marginBottom: 4,
  },
  eventTitle: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 2,
  },
  eventLocation: {
    fontSize: 12,
    color: '#333',
  },
  joinButton: {
    backgroundColor: '#7E5BEF',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 6,
  },
  joinButtonText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: '600',
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
    fontSize: 10,
    color: '#999',
    marginTop: 2,
  },
  tabLabelActive: {
    fontSize: 10,
    color: '#7E5BEF',
    marginTop: 2,
    fontWeight: '600',
  },
});
