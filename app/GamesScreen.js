import React from 'react';
import { ImageBackground, StyleSheet, View, TouchableHighlight, Text, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function GamesScreen({navigation}) {

    return(
        <ImageBackground source={require("../app/assets/bg.jpg")} style={styles.container}>
            <Text style={styles.textHeading}> GAMES </Text>
            <View style={styles.Dashboard} >
               
                <TouchableHighlight style={styles.dashboardCourses} onPress={() => navigate.navigate("Courses")}>
                    <Text style={styles.buttonInactive}> Courses </Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.dashboardGames} onPress={() => navigation.push("Games")}>
                    <Text style={styles.buttonActive}> Games </Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.dashboardLessons} onPress={() => navigation.navigate("Lessons")}> 
                    <Text style={styles.buttonInactive}> Lessons </Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.dashboardStats}  onPress={() => navigation.navigate("Stats")}>
                    <Text style={styles.buttonInactive}> Stats </Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.dashboardMore} onPress={() => console.log("More Pressed")}>
                    <Text style={styles.buttonInactive}> More </Text>
                </TouchableHighlight>

            </View>

        </ImageBackground>
    );
}

export default GamesScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: "100%",
        width: "100%",
        justifyContent: "flex-end",
        alignItems: "center",
    },

    textHeading: {
        color: "#ffffff",
        fontSize: 40,
        fontWeight: "bold",
        bottom: 450,
    },

    DifficultyLevel: {
        backgroundColor: "rgba(105,105,105,0.7)",
        height: "10%",
        width: "100%",
        flexDirection: "row",
        bottom: 425,
    },

    Dashboard: {
        backgroundColor: "rgba(105,105,105,0.7)",
        height: "10%",
        width: "100%",
        flexDirection: "row",
    },

    dashboardCourses: {
        flex: 1,
        width: "20%",
        alignItems: "center",
        justifyContent: "center",
    },

    dashboardGames: {
        flex: 1,
        width: "20%",
        alignItems: "center",
        justifyContent: "center",
    },

    dashboardLessons: {
        flex: 1,
        width: "20%",
        alignItems: "center",
        justifyContent: "center",
    },

    dashboardStats: {
        flex: 1,
        width: "20%",
        alignItems: "center",
        justifyContent: "center",
    },

    dashboardMore: {
        flex: 1,
        width: "20%",
        alignItems: "center",
        justifyContent: "center",
    },

    buttonActive: {
        color: "white",
        fontWeight: "bold",
    },

    buttonInactive: {
        color: "black",
        opacity: 0.5,
        fontWeight: "bold",
    },

    coursesIcon: {
        width: "50%",
        height: "50%",
        resizeMode: "contain",
    }
})