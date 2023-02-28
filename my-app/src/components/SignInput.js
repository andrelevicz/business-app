import React from "react";
import { StyleSheet, TextInput, View } from "react-native";


const styles = StyleSheet.create({
    inputArea: {
        width: "100%",
        height: 60,
        backgroundColor: "#fff",
        flexDirection: "row",
        borderRadius: 10,
        paddingLeft: 15,
        alignItems: "center",
        marginBottom: 15,
        borderWidth: 1.5,
        borderColor: 'black'
    },

    textInput: {
        flex: 1,
        fontSize: 16,
        color: "#ffe",
        marginLeft: 10,



    },
})


export default SignInput = ({iconSvg,placeholder,value}) => {
    return (

        <View style={styles.inputArea}>
            <TextInput 
            style={styles.textInput}
            placeholder={placeholder}
            placeholderTextColor="#fff"
            value={value}
            >
            </TextInput>
        </View>

    );
}