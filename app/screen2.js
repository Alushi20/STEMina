import { Text, View } from 'react-native';
import theme from '../lib/theme';

export default function Screen2() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.white, // White background
        padding: 20,
      }}
    >
      <Text style={{ fontSize: 24, color: theme.colors.primary }}>
        Screen 2
      </Text>
    </View>
  );
}
