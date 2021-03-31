import React from 'react';
import { ImageBackground, StyleSheet, View, TouchableHighlight, Text, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function CoursesScreen({navigation}) {

    return(
        <ImageBackground source={require("../app/assets/bg.jpg")} style={styles.container}>
            <Text style={styles.textHeading}> COURSE </Text>
            <View style={styles.DifficultyLevel}> 
                <TouchableHighlight style={styles.dashboardCourses}>
                    <Text style={styles.buttonCourses}> BASICS </Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.dashboardGames}>
                    <Text style={styles.buttonCourses}> EASY </Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.dashboardLessons}>
                    <Text style={styles.buttonCourses}> MEDIUM </Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.dashboardStats}>
                    <Text style={styles.buttonCourses}> HARD </Text>
                </TouchableHighlight>
            </View>
            <View style={styles.Dashboard} >
               
                <TouchableHighlight style={styles.dashboardCourses} onPress={() => navigation.push("Courses")}>
                    <Text style={styles.buttonDashboard}> Course </Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.dashboardGames} onPress={() => navigation.navigate("Games")}>
                    <Text style={styles.buttonUnavailable}> Games </Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.dashboardLessons} onPress={() => navigation.navigate("Lessons")}>
                    <Text style={styles.buttonUnavailable}> Lessons </Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.dashboardStats} onPress={() => navigation.navigate("Stats")}>
                    <Text style={styles.buttonUnavailable}> Stats </Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.dashboardMore} onPress={() => console.log("More Pressed")}>
                    <Text style={styles.buttonUnavailable}> More </Text>
                </TouchableHighlight>

            </View>

        </ImageBackground>
    );
}

export default CoursesScreen;

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
        fontSize: 15,
        // fontWeight: "bold",
        // height: "10%",
        bottom: "74%",
        color: "white",
        opacity: 0.9,
        fontWeight: "bold",
        fontFamily: "AppleSDGothicNeo-Thin",
        alignItems: "flex-start",
        // backgroundColor: "rgba(1,105,105,0.7)",
    },

    DifficultyLevel: {
        // backgroundColor: "rgba(105,105,105,0.7)",
        height: "5%",
        width: "100%",
        flexDirection: "row",
        bottom: "152%",
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

    buttonCourses: {
        color: "white",
        fontSize: 15,
        opacity: 0.9,
        fontWeight: "bold",
        fontFamily: "AppleSDGothicNeo-Thin"
    },

    buttonDashboard: {
        color: "white",
        fontSize: 12,
        opacity: 0.9,
        fontWeight: "bold",
        fontFamily: "AppleSDGothicNeo-Thin"
    },

    buttonUnavailable: {
        color: "white",
        fontSize: 12,
        opacity: 0.5,
        fontWeight: "bold",
        fontFamily: "AppleSDGothicNeo-Thin"
    },

    coursesIcon: {
        width: "50%",
        height: "50%",
        resizeMode: "contain",
    }
})