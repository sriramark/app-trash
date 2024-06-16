import {FlatList, Image, SafeAreaView, StyleSheet, View} from "react-native";
import {ThemedCard} from "@/components/ThemedCard";
import {ThemedText} from "@/components/themed/ThemedText";
import {globalTextSizes} from "@/constants/Sizes";
import Ionicons from "@expo/vector-icons/Ionicons";
import {globalStyles} from "@/constants/Styles";
import {Colors} from "@/constants/Colors";
import {ThemedIcon} from "@/components/themed/ThemedIcon";
import DownloadComponent from "@/modules/DownloadComponent";

const workers = [
    {
        name: "John Doe",
        designation: "Electrician",
    },
    {
        name: "Jane Doe",
        designation: "Plumber",
    }
]
export default function Workers() {
    return (
        <SafeAreaView>
            <View style={{padding: 20}}>
                <FlatList
                    data={workers}
                    renderItem={({item}) => (
                        <ThemedCard style={styles.wrapper}>

                            <Image
                                source={{uri: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}}
                                style={{width: 60, height: 60, borderRadius: 100}}/>
                            <View>
                                <ThemedText type={"semiBold"}
                                            style={{fontSize: globalTextSizes.medium}}>{item.name}</ThemedText>
                                <View style={globalStyles.horizontal}>
                                    <Ionicons name={"ellipse"} size={10} color={Colors.primaryColor}/>
                                    <ThemedText>{item.designation}</ThemedText>
                                </View>
                            </View>
                            <View style={styles.rightIconWrapper}>
                                <ThemedIcon name={"document-outline"} size={24}/>
                            </View>
                        </ThemedCard>
                    )}
                />
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    wrapper: {
        padding: 10,
        marginBottom: 10,
        display: "flex",
        flexDirection: "row",
        gap: 10
    },
    rightIconWrapper: {
        marginLeft: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
})