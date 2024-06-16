import {SafeAreaView, TouchableOpacity, View} from "react-native";
import {ThemedText} from "@/components/themed/ThemedText";
import {ThemedTextInput} from "@/components/themed/ThemedTextInput";
import {globalStyles} from "@/constants/Styles";

export default function AddTBT() {
    return (
        <SafeAreaView>
            <View style={{padding: 20, display: "flex", gap: 10}}>
                <ThemedTextInput placeholder={"Choose Date"}/>
                <ThemedTextInput placeholder={"Enter The Topic"}/>
                <ThemedTextInput placeholder={"Enter The Number Of Participants"}/>
                <ThemedTextInput placeholder={"Enter The Agency Name"}/>
                <ThemedTextInput placeholder={"Upload Evidence"}/>
                <ThemedTextInput placeholder={"Upload Attendance"}/>
                <TouchableOpacity style={globalStyles.button}>
                    <ThemedText style={globalStyles.buttonLabel}>Submit</ThemedText>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    )
}