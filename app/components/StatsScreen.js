import React from 'react';
import { ImageBackground, StyleSheet, View, TouchableHighlight, Text, Image } from 'react-native';
import styles from "../styles";

function StatsScreen({ navigation }) {

    return (
        <ImageBackground source={require("../assets/bg.jpg")} style={styles.container}>
            <Text style={styles.textHeading}> STATS </Text>

        </ImageBackground>
    );
}

export default StatsScreen;

