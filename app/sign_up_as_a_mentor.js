import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function SignUpAsMentorScreen({ navigation }) {
  // Occupations to display as chips
  const occupations = [
    'Physics',
    'Math',
    'CS',
    'Chemistry',
    'Biology',
    'Robotics',
    'Biochem',
    'Astronomy',
  ];

  // Education levels (single select)
  const educationLevels = ['BA', 'MA', 'MBA', 'PhD', 'Other'];

  // State for selected occupation(s) [multi-select]
  const [selectedOccupations, setSelectedOccupations] = useState([]);
  // State for selected education level [single-select]
  const [selectedEducation, setSelectedEducation] = useState('');

  // Toggle an occupation in/out of the selected array
  const handleOccupationPress = (occ) => {
    if (selectedOccupations.includes(occ)) {
      // remove it
      setSelectedOccupations(selectedOccupations.filter((o) => o !== occ));
    } else {
      // add it
      setSelectedOccupations([...selectedOccupations, occ]);
    }
  };

  // Set the single selected education
  const handleEducationPress = (level) => {
    setSelectedEducation(level);
  };

  const handleSubmit = () => {
    // TODO: integrate your backend logic or navigation
    console.log('Selected Occupations:', selectedOccupations);
    console.log('Selected Education:', selectedEducation);
  };

  return (
    <View style={styles.container}>
      {/* Header with back arrow and logo */}
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => {
            // navigation.goBack() or any desired action
          }}
        >
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>

        {/* STEMina logo (text or image) */}
        <View style={styles.logoContainer}>
          {/* Example: If you have a local image:
              <Image source={require('../assets/stemina.png')} style={styles.logoImage} />
             Otherwise, using text as a placeholder:
          */}
          <Text style={styles.logoText}>STEMina</Text>
        </View>
      </View>

      {/* Main form container */}
      <View style={styles.formContainer}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Prompt: Occupation */}
          <Text style={styles.promptText}>Please select your field of occupation:</Text>

          {/* Occupation Chips */}
          <View style={styles.chipWrapper}>
            {occupations.map((occ) => {
              const isSelected = selectedOccupations.includes(occ);
              return (
                <TouchableOpacity
                  key={occ}
                  style={[styles.chip, isSelected && styles.chipSelected]}
                  onPress={() => handleOccupationPress(occ)}
                >
                  <Text style={[styles.chipText, isSelected && styles.chipTextSelected]}>
                    {occ}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          {/* Prompt: Education */}
          <Text style={styles.promptText}>What is your level of education?</Text>

          {/* Education Chips (single-select) */}
          <View style={styles.chipWrapper}>
            {educationLevels.map((level) => {
              const isSelected = selectedEducation === level;
              return (
                <TouchableOpacity
                  key={level}
                  style={[styles.chip, isSelected && styles.chipSelected]}
                  onPress={() => handleEducationPress(level)}
                >
                  <Text style={[styles.chipText, isSelected && styles.chipTextSelected]}>
                    {level}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          {/* Submit Button */}
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>SUBMIT</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#BFA0F3', // Main purple background
    },
    headerContainer: {
      height: '25%',
      backgroundColor: '#BFA0F3',
      position: 'relative',
      justifyContent: 'center',
      alignItems: 'center',
    },
    backButton: {
      position: 'absolute',
      left: 20,
      top: 50,
    },
    logoContainer: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    // If you have a local image, use this style:
    // logoImage: {
    //   width: 100,
    //   height: 100,
    //   resizeMode: 'contain',
    // },
    logoText: {
      fontSize: 32,
      fontWeight: 'bold',
      color: '#fff',
    },
    formContainer: {
      flex: 1,
      backgroundColor: '#E9D5FF', // Lighter purple background
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
      paddingTop: 30,
      paddingHorizontal: 30,
    },
    scrollContent: {
      paddingBottom: 60, // so content doesn't get cut off
    },
    promptText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#4D275F',
      marginBottom: 10,
      marginTop: 10,
      textAlign: 'center',
    },
    chipWrapper: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginBottom: 20,
    },
    chip: {
      backgroundColor: '#FFF',
      borderRadius: 20,
      paddingHorizontal: 15,
      paddingVertical: 8,
      margin: 5,
    },
    chipSelected: {
      backgroundColor: '#7E5BEF',
    },
    chipText: {
      color: '#7D5584',
      fontWeight: '600',
    },
    chipTextSelected: {
      color: '#FFF',
    },
    submitButton: {
      backgroundColor: '#7E5BEF',
      borderRadius: 25,
      paddingVertical: 15,
      alignItems: 'center',
      marginVertical: 20,
      width: '100%',
    },
    submitButtonText: {
      color: '#FFF',
      fontSize: 16,
      fontWeight: '600',
    },
  });
  