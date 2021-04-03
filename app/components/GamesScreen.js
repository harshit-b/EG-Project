import React from 'react';
import { ImageBackground, StyleSheet, View, TouchableHighlight, Text, Image } from 'react-native';
import styles from "../styles";

function GamesScreen({ navigation }) {

    return (
        <ImageBackground source={require("../assets/bg.jpg")} style={styles.container}>
            <Text style={styles.textHeading}> GAMES </Text>


        </ImageBackground>
    );
}

export default GamesScreen;