import {StyleSheet, TouchableOpacity, View} from "react-native";
import {ThemedIcon} from "@/components/themed/ThemedIcon";
import {ThemedCard} from "@/components/ThemedCard";
import {ThemedBubble} from "@/components/themed/ThemedBubble";
import {ThemedText} from "@/components/themed/ThemedText";
import {globalStyles} from "@/constants/Styles";
import {router} from "expo-router";

export default function DownloadComponent() {
    return (
        <View style={styles.wrapper}>
            <ThemedBubble style={{borderRadius: 100}}>
                <ThemedIcon name={"cloud-download-outline"} size={20}/>
            </ThemedBubble>
            <ThemedBubble style={{borderRadius: 100}}>
                <ThemedIcon name={"cloud-download-outline"} size={20}/>
            </ThemedBubble>
            <TouchableOpacity
                onPress={()=>{
                    router.push("/add_tbt")
                }}
                style={[globalStyles.button, globalStyles.floatRight]}>
                <ThemedText style={globalStyles.buttonLabel}>Add</ThemedText>
            </TouchableOpacity>
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