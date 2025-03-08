
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function community_detail_screen() {
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
      <Text style={styles.title}>Communities</Text>

      {/* Purple Bubble for Community Info */}
      <View style={styles.bubbleContainer}>
        <Text style={styles.bubbleText}>
          A supportive community for women in computer science, for beginners to experts, broadening
          their horizons in AI, robotics, programming, coding, and more. We welcome curious high
          mavis, nec turpis orci lectus maecenas.
        </Text>

        <TouchableOpacity style={styles.joinButton}>
          <Text style={styles.joinButtonText}>Join</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Tab Bar */}
      <View style={styles.bottomTabBar}>
        <TouchableOpacity style={styles.tabItem}>
          <Ionicons name="home-outline" size={24} color="#999" />
          <Text style={styles.tabLabel}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Ionicons name="people" size={24} color="#7E5BEF" />
          <Text style={styles.tabLabelActive}>Communities</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Ionicons name="briefcase-outline" size={24} color="#999" />
          <Text style={styles.tabLabel}>Mentors</Text>
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
  bubbleContainer: {
    backgroundColor: '#BFA0F3',
    marginHorizontal: 20,
    borderRadius: 20,
    padding: 20,
    elevation: 2,
    marginTop: 20,
  },
  bubbleText: {
    color: '#FFF',
    fontSize: 14,
    marginBottom: 15,
  },
  joinButton: {
    backgroundColor: '#7E5BEF',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 20,
    alignSelf: 'flex-start',
  },
  joinButtonText: {
    color: '#FFF',
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
