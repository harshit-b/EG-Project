import React, { useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import Cube from './Cube.js';

function ArrayCube({number, dimension, color}) {
    var cubes = []
    for (let i = 1; i < number+1; i++) {
        cubes.push(
            <Cube text={"B"} dim={dimension-((number-1)*dimension/number)} color={color} key={i}/>
        )
    }

    return (

        <View style={styles.container}>
            {cubes}
        </View>

    );
}

export default ArrayCube;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-end",

    },

})