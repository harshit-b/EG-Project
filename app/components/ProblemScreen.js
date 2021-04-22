import React, { Component } from 'react';
import { ImageBackground, StyleSheet, View, TouchableHighlight, Text, Image, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Cube from './Cube.js';
import ArrayCube from './ArrayCube.js';


export default class ProblemScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { active: 0 };
    }
    
    isMatchingBrackets = (str) => {
        let stack = [];
        let map = {
            '(': ')',
        };
        let level=0;
        let dict={};
        for (let i = 0; i < str.length; i++) {
    
            // If character is an opening brace add it to a stack
            if (str[i] === '(' ) {
                stack.push(str[i]);
                level = level + 1;
                if (!(level in dict))
                    dict[level]=[];
            }
            //  If that character is a closing brace, pop from the stack, which will also reduce the length of the stack each time a closing bracket is encountered.
            else if (str[i] == ')') {
                let last = stack.pop();
                level = level -1;
            }
            else {
                dict[level].push(str[i]);
            }
        }
        console.log(dict);
    }

    addCube = (num, dict) => {
        const arrayCube=[];
        var color="";
        if (this.state.active == 1) {
            for (let i=1; i<num+1; i++) {
                if (i%2==0)
                    color="grey";
                else
                    color="white";
                arrayCube.push(<ArrayCube number={dict[i]} dimension={280-((num+2-i)*20)} color={color} key={i}/>);
            }
            return (
                <View style={{justifyContent: "center", alignItems: "center", position: "absolute"}}>
                    {arrayCube}
                </View>

            );
        }
    }
        

    render() {
        let dict ={1:3, 2:2, 3:1}
        return (
            <ImageBackground source={require("../assets/bg.jpg")} style={styles.container}>
                <Text style={styles.textHeading}>  PROBLEM </Text>
            {/*
                <View style={styles.problemView}>
                    <Text style={styles.textHeading}> PROBLEM BOX </Text>
                </View>

            */}

                <View style={styles.playingFieldView}>
                    {this.addCube(Object.keys(dict).length, dict)}
                </View>

                <View style={styles.curvedLine} />

                {/*For now the name of the buttons are taken from the EEG Pascal Program */}
                <TouchableOpacity style={styles.graphButtonDCP} onPress={() => console.log("DCP PRESSED")}>
                    <Text style={styles.graphButtonText}> DCP </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.graphButtonDCPO} onPress={() => console.log("DCPO PRESSED")}>
                    <Text style={styles.graphButtonText}> DCPO </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.graphButtonDCN} onPress={() => console.log("DCN PRESSED")}>
                    <Text style={styles.graphButtonText}> DCN </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.graphButtonIN} onPress={() => this.setState({active:1})}>
                    <Text style={styles.graphButtonText}> IN </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.graphButtonEG} onPress={() => console.log("EG PRESSED")}>
                    <Text style={styles.graphButtonText}> EG </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.graphButtonIT} onPress={() => console.log("IT PRESSED")}>
                    <Text style={styles.graphButtonText}> IT </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.graphButtonDE} onPress={() => console.log("DE PRESSED")}>
                    <Text style={styles.graphButtonText}> DE </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.rightArrow} onPress={() => console.log("Back button PRESSED")} >
                    <Feather name="arrow-left-circle" size={40} color="white" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.leftArrow} onPress={() => console.log("Forward button PRESSED")} >
                    <Feather name="arrow-right-circle" size={40} color="white" />
                </TouchableOpacity>
            </ImageBackground>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "flex-start"

    },

    textHeading: {
        fontSize: 18,
        textAlign: "center",
        color: "white",
        fontWeight: "bold",
        top: "7%"
        //fontFamily: "AppleSDGothicNeo-Thin",

    },

    problemView: {
        width: "80%",
        height: "20%",
        borderWidth: 3,
        borderColor: "white",
        backgroundColor: "transparent",
        alignItems: "center",
        justifyContent: "center",
        top: "9%"
    },

    playingFieldView: {
        width: "90%",
        height: "60%",
        borderWidth: 3,
        borderColor: "white",
        backgroundColor: "transparent",
        alignItems: "center",
        justifyContent: "center",
        top: "11%"
    },

    curvedLine: {
        width: "15%",
        height: "15%",
        top: "20%",
        borderWidth: 3,
        borderRadius: 100,
        borderColor: "white",
        backgroundColor: "rgba(255,255,255,0.4)",
        transform: [{ scaleX: 8 }, { scaleY: 2 }],
    },

    graphButtonDCP: {
        width: "15%",
        height: "5%",
        borderWidth: 2,
        borderColor: "white",
        backgroundColor: "transparent",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: "79%",
        left: "20%"

    },

    graphButtonDCPO: {
        width: "15%",
        height: "5%",
        borderWidth: 2,
        borderColor: "white",
        backgroundColor: "transparent",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: "79%",

    },

    graphButtonDCN: {
        width: "15%",
        height: "5%",
        borderWidth: 2,
        borderColor: "white",
        backgroundColor: "transparent",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: "79%",
        right: "20%",

    },

    graphButtonIN: {
        width: "15%",
        height: "5%",
        borderWidth: 2,
        borderColor: "white",
        backgroundColor: "transparent",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: "86%",
        left: "31%",

    },

    graphButtonEG: {
        width: "15%",
        height: "5%",
        borderWidth: 2,
        borderColor: "white",
        backgroundColor: "transparent",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: "86%",
        right: "31%",

    },

    graphButtonIT: {
        width: "15%",
        height: "5%",
        borderWidth: 2,
        borderColor: "white",
        backgroundColor: "transparent",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: "93%",
        left: "31%",

    },

    graphButtonDE: {
        width: "15%",
        height: "5%",
        borderWidth: 2,
        borderColor: "white",
        backgroundColor: "transparent",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: "93%",
        right: "31%",

    },


    graphButtonText: {
        fontSize: 14,
        textAlign: "center",
        color: "white",
        fontWeight: "bold",
        //fontFamily: "AppleSDGothicNeo-Thin",

    },

    leftArrow: {
        top: "86%",
        right: "5%",
        position: "absolute"
    },

    rightArrow: {
        top: "86%",
        left: "5%",
        position: "absolute",
    }

})

/*
isMatchingBrackets = (str) => {
        let stack = [];
        let map = {
            '(': ')',
        };
        let level=0;
        let dict={};
        for (let i = 0; i < str.length; i++) {
    
            // If character is an opening brace add it to a stack
            if (str[i] === '(' ) {
                stack.push(str[i]);
                level = level + 1;
                dict[level]=[];
            }
            //  If that character is a closing brace, pop from the stack, which will also reduce the length of the stack each time a closing bracket is encountered.
            else if (str[i] == ')') {
                let last = stack.pop();
                level = level -1;
            }
            else {
                dict[level].push(str[i]);
            }
        }
        console.log(dict);
    }
    */