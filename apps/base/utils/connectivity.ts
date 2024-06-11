import * as Network from 'expo-network';
import Toast from 'react-native-toast-message';
export const checkConnectivity = async () => {
    const res = await Network.getNetworkStateAsync();
    if (!res.isConnected) {
        Toast.show({
            position: 'bottom',
            type: 'warning',
            text1: 'No Internet Connection',

        });
    }
    else {
        Toast.show({
            position: 'bottom',
            type: 'success',
            text1: 'Connected To Internet',
        });
        return true
    }
    return false
}