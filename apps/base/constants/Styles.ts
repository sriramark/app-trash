import {StyleSheet} from "react-native";
import {Colors} from "@/constants/Colors";

export const globalStyles = StyleSheet.create({
    button :{
        backgroundColor: Colors.primaryColor,
        padding: 10,
        borderRadius: 10,
        minWidth: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    buttonLabel:{
        color: "white",
        fontFamily: "Poppins_600SemiBold"
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