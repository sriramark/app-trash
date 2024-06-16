import {ThemedView} from '@/components/ThemedView';
import DashboardComponent from '@/modules/DashboardComponent';
import {SafeAreaView, StyleSheet} from 'react-native';
import WelcomeComponent from "@/modules/WelcomeComponent";


export default function HomeScreen() {
    return (
        <SafeAreaView>
            <ThemedView style={{padding: 20, display: "flex", gap: 20}}>
                <WelcomeComponent/>
                <DashboardComponent/>
            </ThemedView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    stepContainer: {
        gap: 8,
        marginBottom: 8,
    },
    reactLogo: {
        height: 178,
        width: 290,
        bottom: 0,
        left: 0,
        position: 'absolute',
    },
});
