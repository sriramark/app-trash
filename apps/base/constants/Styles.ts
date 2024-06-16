import {StyleSheet} from "react-native";
import {Colors} from "@/constants/Colors";

export const globalStyles = StyleSheet.create({
    button :{
        backgroundColor: Colors.primaryColor,
    },
    buttonLabel:{
        color: "white"
    },
    horizontal:{
        flexDirection: "row",
        alignItems: "center",
        gap :5
    },
    horizontalMid:{
        flexDirection: "row",
        alignItems: "center",
        gap :10
    },
    floatRight:{
        marginLeft: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
})