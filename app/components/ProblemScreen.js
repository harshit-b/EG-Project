import React, { Component } from 'react';
import { ImageBackground, StyleSheet, View, TouchableHighlight, Text, Image, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Cube from './Cube.js';
import ArrayCube from './ArrayCube.js';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';


class ProblemScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { active: 0 };
    }

    changeStr = (str) => {
        let str_new="[";
        let i=0;
        for (const c of str) {
            if (c=="(")
                str_new = str_new + "[";
            else if (c==")") {
                if (str[i+1]!=undefined && str[i+1]!=")")
                    str_new = str_new + "],";
                else
                    str_new = str_new + "]";
            }   
            else {
                if (str[i+1]!=undefined && str[i+1]!=")")
                    str_new = str_new + "\"" + c + "\"" + "," ;
                else 
                    str_new = str_new + "\"" + c + "\"";
            }
            i++;
            
        }
        str_new = str_new + "]";
        return JSON.parse(str_new);
    }
    

    addCubeDetails = (arr, arrayCube, size, left, bottom, num, level) => {
        if (arr.length==1) 
            size = size/level;
        size=size/arr.length;
        for (let i = 0; i < arr.length; i++) {
            
            
            if (Array.isArray(arr[i])) {
                console.log("Letter Not Found");
                arrayCube[num] = {};
                arrayCube[num].size = size;
                arrayCube[num].left = left + (5+i*(size+5));
                arrayCube[num].bottom = 10+bottom;
                if (arr[i].length == 0) {
                    arrayCube[num].text = "Empty";
                }
    
                else {
                    arrayCube[num].text = "Base";
                    arrayCube = this.addCubeDetails(arr[i], arrayCube, size, left+5+i*(size+5), bottom+(size+5), num+1, level+1);
                    num = num + arr.length - 1;
                }
            }
    
            else if (/[a-zA-Z]/.test(arr[i])) {
                arrayCube[num] = {};
                arrayCube[num].text = arr[i];
                arrayCube[num].size = size;
                arrayCube[num].left = left + (5+i*(size+5));
                arrayCube[num].bottom = 10+bottom;
            }
    
            num=num+1;
        }
    
        return arrayCube;
    }

    makeCubes = (str) => {
        let arr = [];
        let arr_dict = [];
        const arrayCube=[];
        arr = this.changeStr(str);
        arr_dict = this.addCubeDetails(arr, [], 280, 0, 0, 0, 1);
        if (this.state.active==1) {
            console.log(arr_dict)
            for (let i=0; i<arr_dict.length; i++) {
                arrayCube.push(<Cube dim={arr_dict[i].size} text={arr_dict[i].text} left={arr_dict[i].left} bottom={arr_dict[i].bottom} key={i}/>);
            }
            return (
                <View style={{position: "absolute"}}>
                    {arrayCube}
                </View>

            );
        }
    }

    render() {
        const {route} = this.props;
        const { navigation } = this.props;
        const problems = {
            "Basics" : [
                '((A))',
                '(A(B))',
                '(A)',
                '(AB)',
                '((B))',
                '(A(B))',
                '(A)',
                '(A(A))',
                '(C)',
                '(C((B)(C)))',
    
            ],
    
            "Easy" : [
                '((A))',
                '(A(B))',
                '(A)',
                '(AB)',
                '((B))',
                '(A(B))',
                '(A)',
                '(A(A))',
                '(C)',
                '(C((B)(C)))',
            ],
    
            "Medium" : [
                '((A))',
                '(A(B))',
                '(A)',
                '(AB)',
                '((B))',
                '(A(B))',
                '(A)',
                '(A(A))',
                '(C)',
                '(C((B)(C)))',
            ],
    
            "Hard" : [
                '((A))',
                '(A(B))',
                '(A)',
                '(AB)',
                '((B))',
                '(A(B))',
                '(A)',
                '(A(A))',
                '(C)',
                '(C((B)(C)))',
    
            ]
    
        }
        return (
            <ImageBackground source={require("../assets/bg.jpg")} style={styles.container}>
                <Text style={styles.textHeading}>  PROBLEM </Text>
            {/*
                <View style={styles.problemView}>
                    <Text style={styles.textHeading}> PROBLEM BOX </Text>
                </View>

            */}

                <View style={styles.playingFieldView}>
                    {this.makeCubes(problems.Medium[this.props.route.params.problemNumber])}
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

export default function(props) {
    const route = useRoute();
    const navigation = useNavigation();
    return <ProblemScreen {...props} route={route} navigation={navigation} />
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
        justifyContent : "flex-end",
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