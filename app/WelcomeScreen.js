import React from 'react';
import { ImageBackground, StyleSheet, Text, Image, Button, TouchableHighlight } from 'react-native';

function WelcomeScreen(props) {

    return (
        <ImageBackground
            source={require("../app/assets/bg.jpg")}
            style={styles.container}>
            <Text style={styles.textHeading}> BLACK UNIVERSE </Text>
            <Image source={require("../app/assets/planet1.jpg")} style={styles.imagePlanet} />
            <TouchableHighlight style={styles.buttonLogin} onPress={() => console.log("Login Pressed")}>
                <Text style={styles.buttonText}> LOGIN </Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.buttonRegister} onPress={() => console.log("Register Pressed")}>
                <Text style={styles.buttonText}> REGISTER </Text>
            </TouchableHighlight>
        </ImageBackground>
    );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },

    textHeading: {
        color: "#ffffff",
        fontSize: 40,
        bottom: 50,
        fontWeight: "bold",


    },

    imagePlanet: {
        height: "50%",
        width: "100%",

    },

    buttonLogin: {
        width: "50%",
        height: "7.5%",
        borderWidth: 3,
        borderColor: "white",
        backgroundColor: "transparent",
        alignItems: "center",
        justifyContent: "center",
        top: 60,
    },

    buttonRegister: {
        width: "50%",
        height: "7.5%",
        borderWidth: 3,
        borderColor: "white",
        backgroundColor: "transparent",
        alignItems: "center",
        justifyContent: "center",
        top: 75,
    },

    buttonText: {
        color: "white",
    }
})