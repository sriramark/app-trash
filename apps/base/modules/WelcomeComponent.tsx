import {Image, View} from "react-native";
import {ThemedText} from "@/components/themed/ThemedText";
import {globalTextSizes} from "@/constants/Sizes";
import {ThemedIcon} from "@/components/themed/ThemedIcon";
import {globalStyles} from "@/constants/Styles";

export default function WelcomeComponent() {
    return (
        <View style={{display:"flex",flexDirection:"row",gap:10}}>
            <Image
                source={{uri: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}}
                style={{width: 60, height: 60, borderRadius: 100}}/>
            <View>
                <ThemedText type={"bold"} style={{fontSize:globalTextSizes.large}}>Hello James</ThemedText>
                <ThemedText>Welcome Back</ThemedText>
            </View>
            <View  style={globalStyles.floatRight} >
                <ThemedIcon name={"options-outline"} size={24}/>
            </View>
        </View>
    )
}