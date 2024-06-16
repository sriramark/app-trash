import {Tabs} from 'expo-router';
import React from 'react';

import {TabBarIcon} from '@/components/navigation/TabBarIcon';
import {Colors} from '@/constants/Colors';
import {useColorScheme} from '@/hooks/useColorScheme';
import {Text, View} from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TabLayout() {
    const colorScheme = useColorScheme();

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
                headerShown: false,
            }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Dashboard',
                    headerShown: true,
                    headerLeft: () => (
                        <View style={{paddingLeft:20}}>
                            <Ionicons name={"menu"} size={24} color={Colors[colorScheme ?? 'light'].tint}/>
                        </View>
                    ),
                    headerRight: () => (
                        <View style={{paddingRight:20}}>
                            <Ionicons name={"notifications"} size={24} color={Colors[colorScheme ?? 'light'].tint}/>
                        </View>
                    ),
                    tabBarIcon: ({color, focused}) => (
                        <TabBarIcon name={focused ? 'analytics' : 'analytics-outline'} color={color}/>
                    ),
                }}
            />
            <Tabs.Screen
                name="explore"
                options={{
                    title: 'PTW',
                    tabBarIcon: ({color, focused}) => (
                        <TabBarIcon name={focused ? 'newspaper' : 'newspaper-outline'} color={color}/>
                    ),
                }}
            />
            <Tabs.Screen
                name="po"
                options={{
                    title: 'PO',
                    tabBarIcon: ({color, focused}) => (
                        <TabBarIcon name={focused ? 'camera' : 'camera-outline'} color={color}/>
                    ),
                }}
            />
            <Tabs.Screen
                name="tbt"
                options={{
                    title: 'TBT',
                    tabBarIcon: ({color, focused}) => (
                        <TabBarIcon name={focused ? 'document' : 'document-outline'} color={color}/>
                    ),
                }}
            />
            <Tabs.Screen
                name="workers"
                options={{
                    title: 'Workers',
                    tabBarIcon: ({color, focused}) => (
                        <TabBarIcon name={focused ? 'people' : 'people-outline'} color={color}/>
                    ),
                }}
            />
        </Tabs>
    );
}
