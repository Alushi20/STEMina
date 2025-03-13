// app/home.js
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router'; // <-- Import useRouter

export default function HomeScreen() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter(); // <-- We'll use this for navigation

  // Sample data for STEM tools categories
  const stemTools = [
    { id: '1', title: 'BIOTECH', image: require('../assets/images/biotech.png') },
    { id: '2', title: 'PHYSICS', image: require('../assets/images/physics.png') },
  ];

  // Sample data for Latest News
  const latestNews = [
    { id: '1', title: 'News Title 1', image: require('../assets/images/news1.png') },
    { id: '2', title: 'News Title 2', image: require('../assets/images/news2.png') },
  ];

  // Render a STEM tool card
  const renderStemToolItem = ({ item }) => (
    <View style={styles.stemToolCard}>
      <Image source={item.image} style={styles.stemToolImage} />
      <Text style={styles.stemToolText}>{item.title}</Text>
    </View>
  );

  // Render a Latest News card
  const renderNewsItem = ({ item }) => (
    <View style={styles.newsCard}>
      <Image source={item.image} style={styles.newsImage} />
      <Text style={styles.newsTitle}>{item.title}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Curved Light-Purple Container */}
      <View style={styles.contentContainer}>
        {/* Top Bar */}
        <View style={styles.topBar}>
          <TouchableOpacity 
            style={styles.menuButton} 
            onPress={() => setMenuOpen(true)} // Open side menu
          >
            <Ionicons name="menu" size={24} color="#fff" />
          </TouchableOpacity>

          <View style={styles.searchContainer}>
            <Ionicons name="search" size={18} color="#7D5584" style={{ marginRight: 5 }} />
            <TextInput
              placeholder="Search communities, events and stories"
              placeholderTextColor="#7D5584"
              style={styles.searchInput}
            />
          </View>
        </View>

        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          {/* STEM Tools Section */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>STEM tools</Text>
            <TouchableOpacity>
              <Text style={styles.viewMoreText}>View more</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={stemTools}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={renderStemToolItem}
            style={{ marginBottom: 20 }}
          />

          {/* Stories of Success */}
          <Text style={styles.subHeader}>Stories Of Success</Text>
          <View style={styles.emilyCardContainer}>
            <View style={styles.emilyImageWrapper}>
              <Image
                source={require('../assets/images/emily.png')}
                style={styles.emilyImage}
              />
            </View>

            <View style={styles.emilyBubble}>
              <Text style={styles.emilyName}>Emily</Text>
              <Text style={styles.emilySubtitle}>Computer science student</Text>
              <Text style={styles.emilyDescription}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit...
              </Text>
              <TouchableOpacity style={styles.shareStoryButton}>
                <Text style={styles.shareStoryButtonText}>Share your story!</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Latest News */}
          <Text style={styles.subHeader}>Latest News</Text>
          <FlatList
            data={latestNews}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={renderNewsItem}
            style={{ marginBottom: 100 }}
          />
        </ScrollView>
      </View>

      {/* Bottom Tab Bar */}
<View style={styles.bottomTabBar}>
  {/* Home */}
  <TouchableOpacity
    style={styles.tabItem}
    onPress={() => router.push('/home')} // or '/home' if you have a separate home route
  >
    <Ionicons name="home" size={24} color="#7E5BEF" />
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


      {/* Side Menu Overlay */}
      {menuOpen && (
        <View style={styles.sideMenuContainer}>
          {/* Close Button */}
          <TouchableOpacity 
            style={styles.closeMenuButton} 
            onPress={() => setMenuOpen(false)}
          >
            <Ionicons name="close" size={24} color="#000" />
          </TouchableOpacity>

          {/* Menu Items */}
          <Text style={styles.menuItemHeader}>Search</Text>

          {/* Mentors -> mentors_screen */}
          <Text 
            style={styles.menuItem}
            onPress={() => {
              setMenuOpen(false);
              router.push('/mentors_screen'); 
            }}
          >
            Mentors
          </Text>

          {/* Communities -> communities_screen */}
          <Text 
            style={styles.menuItem}
            onPress={() => {
              setMenuOpen(false);
              router.push('/communities_screen');
            }}
          >
            Communities
          </Text>

          <Text style={styles.menuItemHeader}>Events</Text>
          <Text style={styles.menuItem}>Join</Text>
          <Text style={styles.menuItem}>Add your own</Text>

          <Text style={styles.menuItemHeader}>About</Text>
          <Text style={styles.menuItem}>Our mission</Text>
          <Text style={styles.menuItem}>Meet the team</Text>

                  <TouchableOpacity
          onPress={() => {
            setMenuOpen(false);
            router.push('/contact_us');
          }}
        >
          <Text style={styles.menuItem}>Contact us</Text>
        </TouchableOpacity>

          {/* "Our communities" -> commuty_detail_screen */}
          <Text 
            style={styles.menuItem}
            onPress={() => {
              setMenuOpen(false);
              router.push('/commuty_detail_screen');
            }}
          >
            Our communities
          </Text>

          {/* Profile -> user */}
          <Text 
            style={styles.menuItem}
            onPress={() => {
              setMenuOpen(false);
              router.push('/user');
            }}
          >
            Profile
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
}

// ---------------- STYLES ----------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BFA0F3',
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#E9D5FF',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingTop: 20,
    paddingHorizontal: 20,
    position: 'relative',
  },
  scrollContent: {
    paddingBottom: 20,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  menuButton: {
    marginRight: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#F4E9FF',
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

  // Section Header
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  viewMoreText: {
    fontSize: 14,
    color: '#7E5BEF',
    fontWeight: '600',
  },

  // STEM Tools
  stemToolCard: {
    width: 120,
    height: 120,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  stemToolImage: {
    width: 60,
    height: 60,
    marginBottom: 5,
    resizeMode: 'contain',
  },
  stemToolText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },

  // Subheader
  subHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
    marginBottom: 5,
  },

  // Emily's Card
  emilyCardContainer: {
    alignItems: 'center',
    marginBottom: 15,
  },
  emilyImageWrapper: {
    zIndex: 2,
    marginBottom: -35,
  },
  emilyImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    resizeMode: 'cover',
    borderWidth: 2,
    borderColor: '#FFF',
  },
  emilyBubble: {
    width: '90%',
    backgroundColor: '#BFA0F3',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  emilyName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
    marginTop: 40, 
  },
  emilySubtitle: {
    fontSize: 14,
    color: '#EEE',
    marginBottom: 8,
  },
  emilyDescription: {
    fontSize: 13,
    color: '#F9F9F9',
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 10,
    lineHeight: 18,
  },
  shareStoryButton: {
    backgroundColor: '#7E5BEF',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  shareStoryButtonText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: '600',
  },

  // Latest News
  newsCard: {
    width: 150,
    marginRight: 10,
    backgroundColor: '#FFF',
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    alignItems: 'center',
    padding: 10,
  },
  newsImage: {
    width: 130,
    height: 80,
    marginBottom: 5,
    borderRadius: 5,
    resizeMode: 'cover',
  },
  newsTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
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

  // Side Menu
  sideMenuContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '70%',       // Adjust width as you like
    height: '100%',
    backgroundColor: '#F3E6FF',
    paddingTop: 60,
    paddingHorizontal: 20,
    zIndex: 9999,       // Ensure it appears on top
  },
  closeMenuButton: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  menuItemHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginVertical: 10,
  },
  menuItem: {
    fontSize: 16,
    color: '#999',
    marginVertical: 5,
  },
  sideMenuContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '70%', 
    height: '100%',
    backgroundColor: '#F3E6FF',
    paddingTop: 60,
    paddingHorizontal: 20,
    zIndex: 9999,
  },
  closeMenuButton: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  menuItemHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginVertical: 10,
  },
  menuItem: {
    fontSize: 16,
    color: '#999',
    marginVertical: 5,
  },
});
