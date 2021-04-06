import { StyleSheet, Dimensions } from 'react-native';

const { width: winWidth, height: winHeight } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1,
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center"

    },

    coursesTop: {
        // backgroundColor:'rgba(35,0,0,0.9)', 
        justifyContent: "flex-start",
        marginBottom: "11%"
    },

    scrollViewContainer: {
        bottom: "5%",
        height: "70%"
    },

    scrollView: {
        // flex: 1,
        flexDirection: "column",
        // bottom: "5%",
        paddingBottom: 0,
    },

    textHeading: {
        color: "#ffffff",
        fontSize: 16,
        textAlign: "center",
        color: "white",
        fontWeight: "bold",
        top: "6%",
        //fontFamily: "AppleSDGothicNeo-Thin",

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
    dashboardButtonIcons: {
        left: "12%",
        paddingBottom: '8%',
        fontSize: 24,
        color: "white"
    },

    
    buttonDashboardText: {
        color: "white",
        fontSize: 12,
        opacity: 0.9,
        fontWeight: "bold",
        //fontFamily: "AppleSDGothicNeo-Thin"
    },

    DifficultyLevel: {
        flex: 1,
        flexDirection: "row",
        top: "20%",
    },

    DifficultyLevelBar: {
        flex: 1,
        flexDirection: "row",
        height: "2%",
        top: "2%",
    },

    DifficultyLevelButtons: {
        flex: 1,
        width: "20%",
        alignItems: "center",
        height: "15%"
    },

    DifficultyLevelButtonText: {
        color: "white",
        fontSize: 15,
        opacity: 0.9,
        fontWeight: "bold",
        //fontFamily: "AppleSDGothicNeo-Thin"
    },

    barGreenBasics: {
        backgroundColor: "green",
        width: "16%",
        height: "2%",
        right: "145%",
    },

    barGreenEasy: {
        backgroundColor: "green",
        width: "15%",
        height: "2%",
        right: "50%",
    },

    barGreenMedium: {
        backgroundColor: "green",
        width: "18%",
        height: "2%",
        left: "50%"
    },

    barGreenHard: {
        backgroundColor: "green",
        width: "15%",
        height: "2%",
        left: "146%"

    },

    barBlack: {
        flex: 1,
        color: "black",
        width: "15%",
        height: "5%"
    },

});