import { StyleSheet, View, type ViewProps } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';
import { useTheme } from '@react-navigation/native';

export type ThemedCardProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedCard({ style, lightColor, darkColor, ...otherProps }: ThemedCardProps) {
  const { colors } = useTheme()
  const backgroundColor = useThemeColor({ light: colors.card, dark: colors.card }, 'background');

  return <View style={[{
    backgroundColor,
    borderColor: colors.border,
  }, style, styles.cardWrapper]} {...otherProps} />;
}
const styles = StyleSheet.create({
  cardWrapper: {
    borderWidth: 0.5,
    padding: 15,
    borderRadius: 20,
  },
})