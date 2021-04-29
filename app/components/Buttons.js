import React, { useRef } from 'react';
import { TouchableHighlight, Text, ScrollView } from 'react-native';
import styles from "../styles";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

function Buttons({ difficulty, num_buttons }) {
    const navigation = useNavigation()
    var buttons = []
    const scrollViewRef = useRef();
    for (let i = 0; i < num_buttons; i++) {
        buttons.push(
            <TouchableHighlight style={{
                width: 150,
                height: 50,
                borderWidth: 3,
                borderColor: "white",
                backgroundColor: "transparent",
                alignItems: "center",
                justifyContent: "center",
            }} key={i} onPress={() => navigation.navigate("Problem", { problemDifficulty: difficulty, problemNumber: i})}>
                <Text style={{ color: "white" }}> {difficulty} PROBLEM {(i + 1)} </Text>
            </TouchableHighlight>
        )
    }

    return (

        <ScrollView contentContainerStyle={styles.scrollView}
            ref={scrollViewRef}>
            {buttons}
        </ScrollView>

    );
}

export default Buttons;

{/*onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}*/ }