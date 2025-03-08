import React from 'react';
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

export default function HomeScreen() {
  // Sample data for STEM tools categories
  const stemTools = [
    { id: '1', title: 'BIOTECH', image: require('../assets/images/biotech.png') },
    { id: '2', title: 'PHYSICS', image: require('../assets/images/physics.png') },
    // Add more categories as needed...
  ];

  // Sample data for Latest News
  const latestNews = [
    { id: '1', title: 'News Title 1', image: require('../assets/images/news1.png') },
    { id: '2', title: 'News Title 2', image: require('../assets/images/news2.png') },
    // Add more news items as needed...
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
    

      {/* CURVED LIGHT-PURPLE CONTAINER */}
      <View style={styles.contentContainer}>
        {/* HAMBURGER + SEARCH BAR */}
        <View style={styles.topBar}>
          <TouchableOpacity style={styles.menuButton}>
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
          {/* STEM TOOLS SECTION */}
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

          {/* STORIES OF SUCCESS */}
          <Text style={styles.subHeader}>Stories Of Success</Text>

          {/* Emily's stylized bubble card */}
          <View style={styles.emilyCardContainer}>
            {/* Circular user image, absolutely positioned over the bubble */}
            <View style={styles.emilyImageWrapper}>
              <Image
                source={require('../assets/images/emily.png')}
                style={styles.emilyImage}
              />
            </View>

            {/* Purple bubble background */}
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

          {/* LATEST NEWS */}
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

      {/* BOTTOM TAB BAR */}
      <View style={styles.bottomTabBar}>
        <TouchableOpacity style={styles.tabItem}>
          <Ionicons name="home" size={24} color="#7E5BEF" />
          <Text style={styles.tabLabelActive}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Ionicons name="people-outline" size={24} color="#999" />
          <Text style={styles.tabLabel}>Communities</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Ionicons name="newspaper-outline" size={24} color="#999" />
          <Text style={styles.tabLabel}>Events</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Ionicons name="book-outline" size={24} color="#999" />
          <Text style={styles.tabLabel}>Stories</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Ionicons name="person-outline" size={24} color="#999" />
          <Text style={styles.tabLabel}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

// ---------------- STYLES ----------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BFA0F3', // Main purple background (like sign-up pages)
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#E9D5FF', // Lighter purple background
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingTop: 20,
    paddingHorizontal: 20,
    position: 'relative',
  },
  scrollContent: {
    paddingBottom: 20,
  },

  // Top Bar inside the content container
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
    elevation: 2, // Android shadow
    shadowColor: '#000', // iOS shadow
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

  // Emily's Card Container
  emilyCardContainer: {
    alignItems: 'center',
    marginBottom: 15,
  },
  emilyImageWrapper: {
    zIndex: 2,
    marginBottom: -35, // so the image overlaps the bubble
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
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  emilyName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
    marginTop: 40, // space for the image above
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
});