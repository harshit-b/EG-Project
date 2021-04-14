import React, { Component, useRef } from 'react';
import { ImageBackground, StyleSheet, View, TouchableHighlight, Text, ScrollView } from 'react-native';
import Buttons from "./Buttons.js";

import styles from "../styles";




export default class CoursesScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { active: 0 };
    }

    addMore = () => {
        if (this.state.active == 0)
            return <View style={styles.barGreenBasics} />
        else if (this.state.active == 1)
            return <View style={styles.barGreenEasy} />
        else if (this.state.active == 2)
            return <View style={styles.barGreenMedium} />
        else if (this.state.active == 3)
            return <View style={styles.barGreenHard} />
    }

    addButtons = () => {
        if (this.state.active == 0)
            return <Buttons difficulty={"Basics"} num_buttons={5} />
        else if (this.state.active == 1)
            return <Buttons difficulty={"Easy"} num_buttons={15} />
        else if (this.state.active == 2)
            return <Buttons difficulty={"Medium"} num_buttons={15} />
        else if (this.state.active == 3)
            return <Buttons difficulty={"Hard"} num_buttons={15} />
    }

    render() {

        return (
            <ImageBackground source={require("../assets/bg.jpg")} style={styles.container}>
                <Text style={styles.textHeading}> COURSE </Text>
                <View style={styles.DifficultyLevel}>
                    <TouchableHighlight style={styles.DifficultyLevelButtons} onPress={() => this.setState({ active: 0 })}>
                        <Text style={styles.DifficultyLevelButtonText}> BASICS </Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.DifficultyLevelButtons} onPress={() => this.setState({ active: 1 })}>
                        <Text style={styles.DifficultyLevelButtonText}> EASY </Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.DifficultyLevelButtons} onPress={() => this.setState({ active: 2 })}>
                        <Text style={styles.DifficultyLevelButtonText}> MEDIUM </Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.DifficultyLevelButtons} onPress={() => this.setState({ active: 3 })}>
                        <Text style={styles.DifficultyLevelButtonText}> HARD </Text>
                    </TouchableHighlight>
                </View>

                <View style={styles.DifficultyLevelBar}>
                    {this.addMore()}
                </View>

                <View style={styles.scrollViewContainer}>
                    {this.addButtons()}
                </View>


            </ImageBackground>
        );
    }
}

/*

<ScrollView contentContainerStyle={styles.scrollView}
ref={scrollViewRef}
onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}>
{buttons}
</ScrollView>

*/