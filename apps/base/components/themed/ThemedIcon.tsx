import {StyleSheet, View, type ViewProps} from 'react-native';

import {useThemeColor} from '@/hooks/useThemeColor';
import {useTheme} from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";

export type ThemedIconProps = {
    name: string;
    size?: number;
    lightColor?: string;
    darkColor?: string;
};

export function ThemedIcon({style, lightColor, darkColor, name, size}: ThemedIconProps) {
    const {colors} = useTheme()

    return <Ionicons
        name={name}
        size={size}
        style={{
            color: colors.text
        }}

    />
}

const styles = StyleSheet.create({
    wrapper: {
        borderRadius: 25,
        display: 'flex',
        borderWidth: 0.5,
    }
})