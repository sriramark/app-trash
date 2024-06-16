import {FlatList, SafeAreaView, View} from "react-native";
import {ThemedCard} from "@/components/ThemedCard";
import {ThemedText} from "@/components/themed/ThemedText";
import {globalTextSizes} from "@/constants/Sizes";
import {globalStyles} from "@/constants/Styles";
import {ThemedIcon} from "@/components/themed/ThemedIcon";
import DownloadComponent from "@/modules/DownloadComponent";

const workers = [
    {
        title: "Risk",
        num: 50,
    },
    {
        title: "Disaster",
        num: 60,
    },
    {
        title: "Risk",
        num: 60,
    }
]
export default function TBT() {
    return (
        <SafeAreaView>
            <View style={{padding: 20}}>
                <FlatList

                    ListHeaderComponentStyle={{marginBottom: 20}}
                    ListHeaderComponent={()=>(
                        <DownloadComponent/>
                    )}
                    data={workers}
                    renderItem={({item}) => (
                        <ThemedCard style={{
                            display: "flex",
                            flexDirection: "row",
                            gap: 10,
                            marginBottom: 10,
                            padding: 10
                        }}>

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