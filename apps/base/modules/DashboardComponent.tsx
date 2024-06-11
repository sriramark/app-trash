import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native'
import { Colors } from '@/constants/Colors'
import { ThemedCard } from '@/components/ThemedCard'
import { Ionicons } from '@expo/vector-icons'
const width = Dimensions.get("window").width
type Card = {
    title: string,
    value: string,
    icon: 'clipboard-outline' | 'cash-outline' | 'wallet-outline' | 'card-outline',
    color: string
}
const data: Card[] = [
    {
        title: "TBT",
        value: "480",
        icon: "clipboard-outline",
        color: "#FF9A00"
    },
    {
        title: "PTW",
        value: "480",
        icon: "cash-outline",
        color: "#FF9A00"
    },
    {
        title: "Inspections",
        value: "480",
        icon: "clipboard-outline",
        color: "#FF9A00"
    },
    {
        title: "Incidents",
        value: "480",
        icon: "clipboard-outline",
        color: "#FF9A00"
    },
]

export default function DashboardComponent() {
    const { colors } = useTheme()
    return (
        <View>
            <View style={{ backgroundColor: Colors.primaryColor, borderTopLeftRadius: 20, borderTopRightRadius: 20, paddingVertical: 15, paddingHorizontal: 20 }}>
                <Text style={{ fontSize: 20, color: "white", fontWeight: "600" }}>Dashboard</Text>
            </View>
            <View style={{
                borderWidth: 1, borderColor: colors.border, padding: 20, display: "flex", flexDirection: "row", gap: 10, flexWrap: "wrap", justifyContent: "space-between",
                borderBottomEndRadius: 20, borderBottomStartRadius: 20

            }}>


                <FlatList
                    numColumns={2}
                    ItemSeparatorComponent={() => <View style={{ height: 10 }}></View>}
                    columnWrapperStyle={{ justifyContent: "space-between" }}
                    data={data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <ThemedCard
                            style={{
                                borderRadius: 10,
                                width: (width - 90) / 2,
                                display: "flex",
                                flexDirection: "column",
                                gap: 10,
                            }}
                        >
                            <View
                                style={{
                                    borderWidth: 1,
                                    borderColor: colors.border,
                                    borderRadius: 100,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    width: 40,
                                    height: 40,
                                }}
                            >
                                <Ionicons name={item.icon} size={20} color={item.color} />
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
                    )}
                />

            </View>
        </View>
    )
}

const styles = StyleSheet.create({})