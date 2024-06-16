import { StyleSheet, TextInput, type TextInputProps } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';
import { useTheme } from '@react-navigation/native';

export type ThemedTextInputProps = TextInputProps & {
    lightColor?: string;
    darkColor?: string;
};

export function ThemedTextInput({ style, lightColor, darkColor, ...otherProps }: ThemedTextInputProps) {
    const { colors } = useTheme()
    const backgroundColor = useThemeColor({ light: colors.card, dark: colors.card }, 'background');

    return <TextInput style={[{
        backgroundColor,
        borderColor: colors.border,
    }, style, styles.cardWrapper]} {...otherProps} />;
}
const styles = StyleSheet.create({
    cardWrapper: {
        borderWidth: 0.5,
        padding: 10,
        borderRadius: 10,
    },
})