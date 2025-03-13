// app/sign_up_as_a_mentor.js
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
import { useRouter } from 'expo-router'; // Import useRouter

export default function SignUpAsMentorScreen({ navigation }) {
  const router = useRouter(); // Create router instance

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
      setSelectedOccupations(selectedOccupations.filter((o) => o !== occ));
    } else {
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
          onPress={() => router.push('/signup')} // Back arrow now navigates to the signup page
        >
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>

        {/* STEMina Logo (text or image) */}
        <View style={styles.logoContainer}>
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
          <TouchableOpacity
  style={styles.submitButton}
  onPress={async () => {
    await handleSubmit();
    router.push('/home');
  }}
>
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
    left: 20, // You can adjust this if you want it on a different side; to place it on the right, use `right: 20`
    top: 50,
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
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
    marginVertical: 10,
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
