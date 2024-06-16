import {FlatList, Image, SafeAreaView, Text, View} from "react-native";
import {ThemedCard} from "@/components/ThemedCard";
import {ThemedText} from "@/components/themed/ThemedText";
import {globalTextSizes} from "@/constants/Sizes";
import Ionicons from "@expo/vector-icons/Ionicons";
import {globalStyles} from "@/constants/Styles";
import {Colors} from "@/constants/Colors";
import {ThemedIcon} from "@/components/themed/ThemedIcon";

const workers = [
    {
        title: "Risk",
        num: 50,
    },
    {
        title: "Disaster",
        num: 60,
    }
]
export default function TBT() {
    return (
        <SafeAreaView>
            <View style={{padding: 20}}>
                <FlatList
                    data={workers}
                    renderItem={({item}) => (
                        <ThemedCard style={{padding: 10,  marginBottom: 10,display:"flex",flexDirection:"row",gap:10}}>

                            <View>
                                <ThemedText type={"semiBold"} style={{fontSize:globalTextSizes.medium}}>{item.title}</ThemedText>
                                <View style={globalStyles.horizontalMid}>

                                <View style={globalStyles.horizontal}>
                                    <ThemedIcon name={"copy"} size={10}/>
                                    <ThemedText>Radiant</ThemedText>
                                </View><View style={globalStyles.horizontal}>
                                    <ThemedIcon name={"people"} size={15}/>
                                    <ThemedText>{item.num}</ThemedText>
                                </View>
                                </View>
                            </View>
                            <View style={{marginLeft:"auto",display:"flex",alignItems:"center",justifyContent:"center"}}>
                                <ThemedIcon name={"document-outline"} size={24} />
                            </View>
                        </ThemedCard>
                    )}
                />
            </View>
        </SafeAreaView>
    )
}