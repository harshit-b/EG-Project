import React from 'react';
import { ImageBackground, StyleSheet, View, TouchableHighlight, Text, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function CoursesScreen({ navigation }) {
    var num_buttons = 5
    var buttons = []

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
                top: 60 + (i * 10),
            }} key={i + 1} onPress={() => console.log(i + "pressed")}>
                <Text style={{ color: "white" }}> PROBLEM {i + 1} </Text>
            </TouchableHighlight>
        )
    }
    return (
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
            <View style={styles.scrollView}>
                {buttons}
            </View>
            <View style={styles.Dashboard} >
                <TouchableHighlight style={styles.dashboardCourses} onPress={() => navigation.push("Courses")}>
                    <Text style={styles.buttonDashboard}> Course </Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.dashboardGames} onPress={() => navigation.navigate("Games")}>
                    <View>
                        <MaterialCommunityIcons name="gamepad-variant-outline" size={27} color="white" style={{ left: "10%", opacity: 0.5 }} />
                        <Text style={styles.buttonUnavailable}> Games </Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight style={styles.dashboardLessons} onPress={() => navigation.navigate("Lessons")}>
                    <View>
                        <SimpleLineIcons name="book-open" size={26} color="white" style={{ left: "17%", opacity: 0.5 }} />
                        <Text style={styles.buttonUnavailable}> Lessons </Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight style={styles.dashboardStats} onPress={() => navigation.navigate("Stats")}>
                    <View>
                        <Ionicons name="stats-chart" size={24} color="white" style={{ left: "8%", opacity: 0.5 }} />
                        <Text style={styles.buttonUnavailable}> Stats </Text>
                    </View>
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

    scrollView: {
        flex: 1,

    },

    textHeading: {
        color: "#ffffff",
        fontSize: 40,
        // fontWeight: "bold",
        // height: "10%",
        top: "3%",
        color: "white",
        opacity: 0.9,
        fontWeight: "bold",
        //fontFamily: "AppleSDGothicNeo-Thin",
        alignItems: "flex-start",
        // backgroundColor: "rgba(1,105,105,0.7)",
    },

    DifficultyLevel: {
        // backgroundColor: "rgba(105,105,105,0.7)",
        height: "5%",
        width: "100%",
        flexDirection: "row",
        top: "10%"
    },

    Dashboard: {
        backgroundColor: "rgba(105,105,105,0.7)",
        height: "9%",
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
})