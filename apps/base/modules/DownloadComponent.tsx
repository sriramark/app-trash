import {StyleSheet, TouchableOpacity, View} from "react-native";
import {ThemedIcon} from "@/components/themed/ThemedIcon";
import {ThemedCard} from "@/components/ThemedCard";
import {ThemedBubble} from "@/components/themed/ThemedBubble";

export default function DownloadComponent() {
    return (
        <View style={styles.wrapper}>
            <ThemedBubble style={{borderRadius: 100}}>
                <ThemedIcon name={"cloud-download-outline"} size={20}/>
            </ThemedBubble>
            <ThemedBubble style={{borderRadius: 100}}>
                <ThemedIcon name={"cloud-download-outline"} size={20}/>
            </ThemedBubble>

        </View>
    )
}
const styles = StyleSheet.create({
    wrapper: {
        display: "flex",
        flexDirection: "row",
        gap: 10
    }
})