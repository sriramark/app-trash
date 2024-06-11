import { View, type ViewProps } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';
import { useTheme } from '@react-navigation/native';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedView({ style, lightColor, darkColor, ...otherProps }: ThemedViewProps) {
  const {colors} = useTheme()
  const backgroundColor = useThemeColor({ light: colors.background, dark: colors.background }, 'background');

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}
