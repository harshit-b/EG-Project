import React, { useRef } from 'react';
import { ImageBackground, StyleSheet, View, TouchableHighlight, Text, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

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
        <ImageBackground source={require("../app/assets/bg.jpg")} style={styles.container}>
            <View style={styles.coursesTop}>
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
            </View>
            {/* <View style={styles.scrollView}> */}
            <ScrollView contentContainerStyle={styles.scrollView} 
            ref={scrollViewRef}
            onContentSizeChange={() => scrollViewRef.current.scrollToEnd({animated: true})}>
                {buttons}
            </ScrollView>
            {/* </View> */}
            <View style={styles.Dashboard} >
                <TouchableHighlight style={styles.dashboardButtons} onPress={() => navigation.push("Courses")}>
                    <View>
                        <MaterialCommunityIcons name="gamepad-circle" style={styles.dashboardButtonIcons}/>
                        <Text style={styles.buttonDashboardText}> Course </Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight style={styles.dashboardButtons} onPress={() => navigation.navigate("Games")}>
                    <View>
                        <MaterialCommunityIcons name="gamepad-variant" style={styles.dashboardButtonIcons}/>
                        <Text style={styles.buttonDashboardText}> Games </Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight style={styles.dashboardButtons} onPress={() => navigation.navigate("Lessons")}>
                    <View>
                        <FontAwesome name="book" style={styles.dashboardButtonIcons}/>
                        {/* <SimpleLineIcons name="book-open" size={26} color="white" style={{ left: "17%", opacity: 0.5 }} /> */}
                        <Text style={styles.buttonDashboardText}> Lessons </Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight style={styles.dashboardButtons} onPress={() => navigation.navigate("Stats")}>
                    <View>
                        <Ionicons name="stats-chart" style={styles.dashboardButtonIcons}/>
                        <Text style={styles.buttonDashboardText}> Stats </Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight style={styles.dashboardButtons} onPress={() => console.log("More Pressed")}>
                    <View>
                        <FontAwesome name="bars" style={styles.dashboardButtonIcons}/>
                        <Text style={styles.buttonDashboardText}> More </Text>
                    </View>
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
        alignItems: "center",
    },
    coursesTop: {
        height: "12%",
        // backgroundColor:'rgba(35,0,0,0.9)', 
        justifyContent: "flex-start", 
        top:"5%", 
        marginBottom: "11%"
    },
    scrollView: {
        // flex: 1,
        flexWrap: "wrap",
        flexDirection: "column", 
        top:"5%",
        // bottom: "5%",
        paddingBottom: 300,
    },

    textHeading: {
        color: "#ffffff",
        fontSize: 15,
        textAlign: "center",
        top: "28%",
        height: "15%",
        color: "white",
        opacity: 0.9,
        fontWeight: "bold",
        fontFamily: "AppleSDGothicNeo-Thin",

    },

    DifficultyLevel: {
        width: "100%",
        flexDirection: "row",
        top: "17%"
    },

    Dashboard: {
        backgroundColor: "rgba(24, 26, 25,1)",
        height: "11%",
        width: "100%",
        flexDirection: "row", 
        // marginTop: "10%"
    },

    dashboardButtons: {
        flex: 1,
        width: "20%",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: '6%',
        opacity: 0.2 
    },
    dashboardButtonIcons : {
        left: "12%", 
        paddingBottom: '8%', 
        fontSize: 24,
        color: "white"
    },

    DifficultyLevelButtons: {
        flex: 1,
        width: "20%",
        alignItems: "center",
        // justifyContent: "center",
    },

    DifficultyLevelButtonText: {
        color: "white",
        fontSize: 15,
        opacity: 0.9,
        fontWeight: "bold",
        fontFamily: "AppleSDGothicNeo-Thin"
    },

    buttonDashboardText: {
        color: "white",
        fontSize: 12,
        opacity: 0.9,
        fontWeight: "bold",
        fontFamily: "AppleSDGothicNeo-Thin"
    },

})