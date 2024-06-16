import {Text, type TextProps, StyleSheet} from 'react-native';

import {useThemeColor} from '@/hooks/useThemeColor';

export type ThemedTextProps = TextProps & {
    lightColor?: string;
    darkColor?: string;
    type?: 'default' | 'bold' | 'extraBold' | 'semiBold';
};

export function ThemedText({
                               style,
                               lightColor,
                               darkColor,
                               type = 'default',
                               ...rest
                           }: ThemedTextProps) {
    const color = useThemeColor({light: lightColor, dark: darkColor}, 'text');

    return (
        <Text
            style={[
                {color},
                type === 'semiBold' && styles.semiBold,
                type === 'extraBold' && styles.extraBold,
                type === 'bold' && styles.bold,
                type === 'default' && styles.default,
                style,
            ]}
            {...rest}
        />
    );
}

const styles = StyleSheet.create({
    default: {
        fontFamily: "Poppins_400Regular"
    },
    semiBold: {
        fontFamily: "Poppins_600SemiBold"
    },
    bold: {
        fontFamily: "Poppins_700Bold"
    },
    extraBold: {
        fontFamily: "Poppins_800ExtraBold"
    }
});
