import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function mentors_screen() {
  // Sample data for mentors
  const mentorsData = [
    {
      id: '1',
      name: 'Albert Floris',
      title: 'Neurosurgery Engineer & Ethical Hacker',
      avatar: require('../assets/images/mentor1.png'),
    },
    {
      id: '2',
      name: 'Dr. Lily Hassan',
      title: 'Technical Instructor & Google AI',
      avatar: require('../assets/images/mentor2.png'),
    },
    {
      id: '3',
      name: 'Robert Fox',
      title: 'Software Developer & Mobile App Teacher',
      avatar: require('../assets/images/mentor3.png'),
    },
    {
      id: '4',
      name: 'Deanne Robertson',
      title: 'Data Scientist & AI Healthcare',
      avatar: require('../assets/images/mentor4.png'),
    },
    // Add more mentors as needed...
  ];

  const renderMentorItem = ({ item }) => (
    <View style={styles.mentorCard}>
      <Image source={item.avatar} style={styles.mentorAvatar} />
      <View style={styles.mentorInfo}>
        <Text style={styles.mentorName}>{item.name}</Text>
        <Text style={styles.mentorTitle}>{item.title}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Top Bar with Search */}
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.menuButton}>
          <Ionicons name="menu" size={24} color="#fff" />
        </TouchableOpacity>
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={18} color="#7D5584" style={{ marginRight: 5 }} />
          <TextInput
            placeholder="Search for mentors and communities"
            placeholderTextColor="#7D5584"
            style={styles.searchInput}
          />
        </View>
      </View>

      {/* Title */}
      <Text style={styles.title}>Mentors</Text>

      {/* Mentors List */}
      <FlatList
        data={mentorsData}
        keyExtractor={(item) => item.id}
        renderItem={renderMentorItem}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />

      {/* Bottom Tab Bar */}
      <View style={styles.bottomTabBar}>
        <TouchableOpacity style={styles.tabItem}>
          <Ionicons name="home-outline" size={24} color="#999" />
          <Text style={styles.tabLabel}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Ionicons name="people-outline" size={24} color="#999" />
          <Text style={styles.tabLabel}>Communities</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Ionicons name="briefcase" size={24} color="#7E5BEF" />
          <Text style={styles.tabLabelActive}>Mentors</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Ionicons name="person-outline" size={24} color="#999" />
          <Text style={styles.tabLabel}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

// ------------- STYLES -------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BFA0F3', // Main purple
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  menuButton: {
    marginRight: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#E9D5FF',
    borderRadius: 20,
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 5,
    color: '#333',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
    marginVertical: 10,
    marginLeft: 15,
  },
  listContainer: {
    paddingBottom: 100, // space above tab bar
  },
  mentorCard: {
    flexDirection: 'row',
    backgroundColor: '#E9D5FF',
    borderRadius: 10,
    marginHorizontal: 15,
    marginVertical: 5,
    alignItems: 'center',
    padding: 10,
  },
  mentorAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    resizeMode: 'cover',
    marginRight: 10,
  },
  mentorInfo: {
    flex: 1,
  },
  mentorName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  mentorTitle: {
    fontSize: 12,
    color: '#666',
  },
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
  },
  tabLabelActive: {
    fontSize: 12,
    color: '#7E5BEF',
    fontWeight: '600',
  },
});
