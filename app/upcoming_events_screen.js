import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  SafeAreaView,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

// Example data for events
const eventsData = [
  {
    id: '1',
    dateTime: '1ST MAY - SAT - 2:00 PM',
    title: 'Women Who Code, Women Who Lead',
  },
  {
    id: '2',
    dateTime: '1ST MAY - SAT - 2:00 PM',
    title: 'STEM Circles: Women Mentoring Women',
  },
  {
    id: '3',
    dateTime: '1ST MAY - SAT - 2:00 PM',
    title: 'Turning Ideas into STEM Startups',
  },
  {
    id: '4',
    dateTime: '1ST MAY - SAT - 2:00 PM',
    title: 'From Passion to Profession',
  },
  {
    id: '5',
    dateTime: '1ST MAY - SAT - 2:00 PM',
    title: 'STEMinist Talks: Inspiring the Next Generation',
  },
];

export default function UpcomingEventsScreen() {
  // Render each event item
  const renderEventItem = ({ item }) => {
    return (
      <View style={styles.eventCard}>
        {/* Placeholder image */}
        <View style={styles.imagePlaceholder}>
          <Ionicons name="image-outline" size={36} color="#ccc" />
        </View>

        {/* Text container */}
        <View style={styles.eventInfo}>
          <Text style={styles.eventDate}>{item.dateTime}</Text>
          <Text style={styles.eventTitle}>{item.title}</Text>
        </View>

        {/* Book Button */}
        <TouchableOpacity style={styles.bookButton}>
          <Text style={styles.bookButtonText}>Book</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="menu" size={24} color="#000" />
        </TouchableOpacity>

        <Text style={styles.topBarTitle}>Upcoming events</Text>

        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="add-circle-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Event List */}
      <FlatList
        data={eventsData}
        keyExtractor={(item) => item.id}
        renderItem={renderEventItem}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />

      {/* Bottom Tab Bar */}
      <View style={styles.bottomTabBar}>
        <TouchableOpacity style={styles.tabItem}>
          <Ionicons name="home-outline" size={24} color="#999" />
          <Text style={styles.tabLabel}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Ionicons name="calendar-outline" size={24} color="#7E5BEF" />
          <Text style={styles.tabLabelActive}>Events</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Ionicons name="settings-outline" size={24} color="#999" />
          <Text style={styles.tabLabel}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Ionicons name="notifications-outline" size={24} color="#999" />
          <Text style={styles.tabLabel}>Alerts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
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
    backgroundColor: '#F3ECFF',
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
  // Event List
  listContent: {
    paddingBottom: 80, // space for bottom tab
  },
  eventCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    marginHorizontal: 15,
    marginVertical: 6,
    borderRadius: 10,
    padding: 10,
    elevation: 1, // Android shadow
    shadowColor: '#000', // iOS shadow
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
    flex: 1,
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
  },
  bookButton: {
    backgroundColor: '#7E5BEF',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 6,
  },
  bookButtonText: {
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
