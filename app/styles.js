import { StyleSheet, Dimensions } from 'react-native';

const { width: winWidth, height: winHeight } = Dimensions.get('window');

export default StyleSheet.create({
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

});