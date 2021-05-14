import React, { Component, PropTypes } from 'react';
import {
  Dimensions,
  PanResponder,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { transformOrigin, rotateXY, rotateXZ } from './utils';

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;



class Cube extends Component {
  constructor(props) {
    super(props);
  }
  UNSAFE_componentWillMount() {
    this.panResponder = PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: this.handlePanResponderMove.bind(this)
    });
  }

  handlePanResponderMove (e, gestureState) {
    const { dx, dy } = gestureState;
    const origin = { x: 0, y:0, z: -this.props.dim/2 };
    let matrix = rotateXY(dx, dy);
    transformOrigin(matrix, origin);
    this.refViewFront.setNativeProps({style: {transform: [{perspective: 1000}, {matrix: matrix}]}});

    matrix = rotateXY(dx + 180, dy);
    transformOrigin(matrix, origin);
    this.refViewBack.setNativeProps({style: {transform: [{perspective: 1000}, {matrix: matrix}]}});

    matrix = rotateXY(dx + 90, dy);
    transformOrigin(matrix, origin);
    this.refViewRight.setNativeProps({style: {transform: [{perspective: 1000}, {matrix: matrix}]}});

    matrix = rotateXY(dx - 90, dy);
    transformOrigin(matrix, origin);
    this.refViewLeft.setNativeProps({style: {transform: [{perspective: 1000}, {matrix: matrix}]}});

    matrix = rotateXZ(dx, dy - 90);
    transformOrigin(matrix, origin);
    this.refViewTop.setNativeProps({style: {transform: [{perspective: 1000}, {matrix: matrix}]}});
  

    matrix = rotateXZ(-dx, dy+90);
    transformOrigin(matrix, origin);
    this.refViewBottom.setNativeProps({style: {transform: [{perspective: 1000}, {matrix: matrix}]}});
  }

  renderLeft(color) {
    return (
      <View
        ref={component => this.refViewRight = component}
        style={[styles.rectangle, {height: this.props.dim, width: this.props.dim, backgroundColor: color}]}
        {...this.panResponder.panHandlers}
      />

    )
  }

  renderRight(color) {
    return (
      <View
        ref={component => this.refViewLeft = component}
        style={[styles.rectangle, {height: this.props.dim, width: this.props.dim, backgroundColor: color}]}
        {...this.panResponder.panHandlers}
      />

    )
  }

  renderFront(color) {
    return (
      <View
        ref={component => this.refViewFront = component}
        style={[styles.rectangle, {height: this.props.dim, width: this.props.dim, backgroundColor: color}]}
        {...this.panResponder.panHandlers}
      />
    )
  }

  renderBack(color) {
    return (
      <View
        ref={component => this.refViewBack = component}
        style={[styles.rectangle, {height: this.props.dim, width: this.props.dim, backgroundColor: color}]}
        {...this.panResponder.panHandlers}
      /> 
    )
  }

  renderTop(color) {
    return (
      <View
        ref={component => this.refViewTop = component}
        style={[styles.rectangle, {height: this.props.dim, width: this.props.dim, backgroundColor: color}]}
        {...this.panResponder.panHandlers}
      >
        <Text style={styles.textHeading}> {this.props.text} </Text>
      </View>
    )
  }

  renderBottom(color) {
    return (
      <View
        ref={component => this.refViewBottom = component}
        style={[styles.rectangle, {height: this.props.dim, width: this.props.dim, backgroundColor: color}]}
        {...this.panResponder.panHandlers}
      />
    )
  }

  render() {
    
    return (
      <View style={{left: this.props.left, bottom: this.props.bottom, height: this.props.dim, width: this.props.dim, position: "absolute"}}>
        {this.renderFront('#4c72e0')}
        {this.renderBack('#8697df')}
        {this.renderLeft('#b5bce2')}
        {this.renderRight('#e5afb9')}
        {this.renderTop('#de7c92')}
        {this.renderBottom('#d1426b')}
      </View>
    );
  }
}

export default function(props) {
  return <Cube {...props} />
}

const styles = StyleSheet.create({
  rectangle: {
    position: "absolute",
    zIndex: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  textHeading: {
    fontSize: 30,
    textAlign: "center",
    color: "black",
    fontWeight: "bold",
    //fontFamily: "AppleSDGothicNeo-Thin",

  },
})