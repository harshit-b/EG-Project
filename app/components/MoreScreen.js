import React from 'react';
import { ImageBackground, StyleSheet, View, TouchableHighlight, Text, Image } from 'react-native';
import styles from "../styles";

function MoreScreen({ navigation }) {

    return (
        <ImageBackground source={require("../assets/bg.jpg")} style={styles.container}>
            <Text style={styles.textHeading}> MORE </Text>

        </ImageBackground>
    );
}

export default MoreScreen;

