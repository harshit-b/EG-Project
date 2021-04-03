import React, { useRef } from 'react';
import { ImageBackground, StyleSheet, View, TouchableHighlight, Text, ScrollView } from 'react-native';

import styles from "../styles";

function CoursesScreen({ navigation }) {
    var num_buttons = 15
    var buttons = []
    const scrollViewRef = useRef();
    for (let i = num_buttons; i > 0; i--) {
        buttons.push(
            <TouchableHighlight style={{
                width: 150,
                height: 50,
                borderWidth: 3,
                borderColor: "white",
                backgroundColor: "transparent",
                alignItems: "center",
                justifyContent: "center",
                top: 60 + ((num_buttons - i) * 10),
            }} key={i} onPress={() => console.log(i + "pressed")}>
                <Text style={{ color: "white" }}> PROBLEM {(i)} </Text>
            </TouchableHighlight>
        )
    }
    return (
        <ImageBackground source={require("../assets/bg.jpg")} style={styles.container}>
            <Text style={styles.textHeading}> COURSE </Text>
            <View style={styles.DifficultyLevel}>
                <TouchableHighlight style={styles.DifficultyLevelButtons}>
                    <Text style={styles.DifficultyLevelButtonText}> BASICS </Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.DifficultyLevelButtons}>
                    <Text style={styles.DifficultyLevelButtonText}> EASY </Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.DifficultyLevelButtons}>
                    <Text style={styles.DifficultyLevelButtonText}> MEDIUM </Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.DifficultyLevelButtons}>
                    <Text style={styles.DifficultyLevelButtonText}> HARD </Text>
                </TouchableHighlight>
            </View>
            {/* <View style={styles.scrollView}> */}
            <ScrollView contentContainerStyle={styles.scrollView}
                ref={scrollViewRef}
                onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}>
                {buttons}
            </ScrollView>
            {/* </View> */}


        </ImageBackground>
    );
}

export default CoursesScreen;