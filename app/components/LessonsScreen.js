import React from 'react';
import { ImageBackground, StyleSheet, View, TouchableHighlight, Text, Image } from 'react-native';

import styles from "../styles";

function LessonsScreen({ navigation }) {

    return (
        <ImageBackground source={require("../assets/bg.jpg")} style={styles.container}>
            <Text style={styles.textHeading}> LESSONS </Text>

        </ImageBackground>
    );
}

export default LessonsScreen;

