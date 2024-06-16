import {Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'
import {useTheme} from '@react-navigation/native'
import {Colors} from '@/constants/Colors'
import {ThemedCard} from '@/components/ThemedCard'
import {Ionicons} from '@expo/vector-icons'
import {ThemedText} from "@/components/themed/ThemedText";
import {globalTextSizes} from "@/constants/Sizes";
import {router} from "expo-router";

const width = Dimensions.get("window").width
type Card = {
    title: string,
    value: string,
    icon: 'clipboard-outline' | 'cash-outline' | 'wallet-outline' | 'card-outline' | 'archive-outline',
    color: string
}
const data: Card[] = [
    {
        title: "TBT",
        value: "480",
        icon: "clipboard-outline",
        color: "#0173DF",
        href: "/tbt"
    },
    {
        title: "PTW",
        value: "480",
        icon: "cash-outline",
        color: "#FF9A00",
        href: "/ptw"
    },
    {
        title: "Inspections",
        value: "480",
        icon: "clipboard-outline",
        color: "#FF9A00",
        href: "/inspections"
    },
    {
        title: "Incidents",
        value: "480",
        icon: "archive-outline",
        color: "#1F8905",
        href: "/incidents"
    },
]

export default function DashboardComponent() {
    const {colors} = useTheme()
    return (
        <View>
            <ThemedText type={"semiBold"} style={{fontSize:globalTextSizes.medium,marginBottom:10,opacity:0.6}}>Dashboard</ThemedText>



                <FlatList
                    scrollEnabled={false}
                    numColumns={2}
                    ItemSeparatorComponent={() => <View style={{height: 10}}></View>}
                    columnWrapperStyle={{justifyContent: "space-between"}}
                    data={data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item}) => (
                        <TouchableOpacity
                            onPress={() => {
                                router.push(item.href)
                            }}
                            >

                        <ThemedCard
                            style={{
                                width: (width - 50) / 2,
                                display: "flex",
                                flexDirection: "column",
                                gap: 10,
                            }}
                        >
                            <View
                                style={{
                                    justifyContent: "center",
                                    width: 40,
                                }}
                            >
                                <Ionicons name={item.icon} size={20} color={item.color}/>
                            </View>
                            <Text
                                style={{
                                    fontSize: 20,
                                    color: colors.text,
                                    fontWeight: "800",
                                }}
                            >{item.value}</Text>
                            <Text
                                style={{
                                    fontSize: 18,
                                    color: "grey",
                                    fontWeight: "500",
                                }}
                            >{item.title}</Text>
                        </ThemedCard>
                        </TouchableOpacity>
                    )}
                />

        </View>
    )
}

const styles = StyleSheet.create({})
