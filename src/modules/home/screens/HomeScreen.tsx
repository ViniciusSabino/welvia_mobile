import { darkColors, fonts } from '@/shared/themes';
import { View, Text } from 'react-native';

export function HomeScreen() {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <Text style={{ fontFamily: fonts.regular, color: darkColors.textPrimary }}>Início</Text>
    </View>
  );
}
