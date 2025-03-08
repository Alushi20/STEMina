import React, { useState } from 'react';
import { Text, TextInput, View, Button, ActivityIndicator } from 'react-native';
import { useAppwrite } from '../hooks/useappwrite';
import theme from '../lib/theme';

export default function Screen1() {
  const [name, setName] = useState('');
  const { saveName, loading, error } = useAppwrite();

  const handleSaveName = async () => {
    if (name.trim()) {
      await saveName(name);
    } else {
      alert('Please enter a valid name');
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.white,
        padding: 20,
      }}
    >
      <Text style={{ fontSize: 24, color: theme.colors.dark, marginBottom: 20 }}>
        Enter your name
      </Text>

      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Your name"
        style={{
          width: '80%',
          padding: 10,
          borderRadius: 5,
          backgroundColor: theme.colors.white,
          borderColor: theme.colors.dark,
          borderWidth: 1,
          marginBottom: 20,
        }}
      />

      {loading ? (
        <ActivityIndicator size="large" color={theme.colors.accentPurple} />
      ) : (
        <Button
          title="Save Name"
          onPress={handleSaveName}
          color={theme.colors.dark}
        />
      )}

      {error && <Text style={{ color: 'red', marginTop: 10 }}>{error}</Text>}
    </View>
  );
}
