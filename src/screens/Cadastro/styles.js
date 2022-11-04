import React from "react";
import { StyleSheet } from "react-native";



export const styles = StyleSheet.create( {

    container: {
        backgroundColor: "#FFD700",
        flex:  1,
        justifyContent: "center",
        alignItems: "center"
    },

    inputArea: {
        padding: 40,
        width: "70%",
        height: "5%",
        backgroundColor: "#fff",
        borderRadius: 5,
        margin: 2,
        marginBottom: 5,
        color: 'white'
    },

    customButton: {
        height: 60,
        backgroundColor: "#fff",
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",

    },

    customButtonText: {
        fontSize: 30,
        color: "#fff",
        fontWeight: 'bold'
    },

    signMessageButton: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 50,
        marginBottom: 20,

    },

    signMessageButtonText: {
        fontSize: 16,
        color: "#fff",

    },

    signMessageButtonTextBold: {
        fontSize: 16,
        color: "#fff",
        fontWeight: "bold",
        marginLeft: 5,   

    },

    labelError: {
        alignSelf: "auto",
        color: "#ff375b",
        marginBottom: 8
    },

    customRegisterButton: {
        marginTop: 50,
        color: "black",
        
    },

    title: {
        fontSize: 50,
        fontWeight: "500",
        color: "black",
        marginBottom: "10%"
    }




    
})

    