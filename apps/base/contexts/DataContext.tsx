
import { createContext, useContext, useEffect, useState } from "react";
import * as Network from 'expo-network';
import { checkConnectivity } from "@/utils/connectivity";
import Toast from "react-native-toast-message";
type DataProviderProps = {
    children: React.ReactNode;
};
type DataContextType = {
    connected: boolean;
}
const DataContext = createContext<DataContextType | undefined>(undefined);

export function useData() {
    const context = useContext(DataContext);
    if (context === undefined) {
        throw new Error("useDataContext must be used within a DataProvider");
    }
    return context;
}

export function DataProvider({ children }: DataProviderProps) {
    const [loading, setLoading] = useState<boolean>(false);
    const [connected, setConnected] = useState<boolean>(false);
    useEffect(() => {
        checkConnectivity().then((res) => {
            setConnected(res as boolean);
            setLoading(false);
        });
    }, [])

    const value = {
        connected
    };
    return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}