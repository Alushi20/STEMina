// app/communitiesscreen.js
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
import { useRouter } from 'expo-router';

export default function CommunitiesScreen() {
  const router = useRouter();

  // Sample data for communities (grid)
  const communitiesData = [
    {
      id: '1',
      name: 'ELECTRICAL ENGINEERING',
      members: '12 members',
      image: require('../assets/images/electrical.png'), // Replace with your own images
    },
    {
      id: '2',
      name: 'COMPUTER SCIENCE',
      members: '10 members',
      image: require('../assets/images/compsci.png'),
    },
    {
      id: '3',
      name: 'ROBOTICS',
      members: '93 members',
      image: require('../assets/images/robotics.png'),
    },
    {
      id: '4',
      name: 'MATH MAVENS',
      members: '12 members',
      image: require('../assets/images/math.png'),
    },
  ];

  // Render each community card in a 2-column grid
  const renderCommunityItem = ({ item }) => (
    <View style={styles.communityCard}>
      <Image source={item.image} style={styles.communityImage} />
      <Text style={styles.communityName}>{item.name}</Text>
      <Text style={styles.communityMembers}>{item.members}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Top Bar with Search */}
      <View style={styles.topBar}>
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
      <Text style={styles.title}>Communities</Text>

      {/* Communities Grid (2 columns) */}
      <FlatList
        data={communitiesData}
        keyExtractor={(item) => item.id}
        renderItem={renderCommunityItem}
        numColumns={2}
        contentContainerStyle={styles.gridContainer}
        showsVerticalScrollIndicator={false}
      />

      {/* Action Buttons Container */}
      <View style={styles.actionButtonsContainer}>
        <TouchableOpacity 
          style={styles.createButton}
          onPress={() => {
            // Add any logic for creating a community here.
            // For example, you might navigate to a "create community" screen.
          }}
        >
          <Text style={styles.createButtonText}>Create a community</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.aboutButton}
          onPress={() => router.push('/community_detail_screen')}
        >
          <Text style={styles.aboutButtonText}>About</Text>
        </TouchableOpacity>
      </View>

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
    <Ionicons name="people-outline" size={24} color="#7E5BEF" />
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
  gridContainer: {
    paddingHorizontal: 10,
    paddingBottom: 100, // space above tab bar
  },
  communityCard: {
    backgroundColor: '#E9D5FF',
    borderRadius: 10,
    width: '46%',
    margin: '2%',
    alignItems: 'center',
    padding: 10,
  },
  communityImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginBottom: 8,
  },
  communityName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 4,
  },
  communityMembers: {
    fontSize: 12,
    color: '#666',
  },
  // Action Buttons Container (holds both buttons)
  actionButtonsContainer: {
    position: 'absolute',
    bottom: 70,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  createButton: {
    backgroundColor: '#7E5BEF',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  createButtonText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '600',
  },
  aboutButton: {
    backgroundColor: '#7E5BEF',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  aboutButtonText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '600',
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
