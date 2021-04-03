import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Tab = ({ color, tab, onPress, icon }) => {
  const handleIcon = () => {
    if (icon == "gamepad-circle") {
      return (<MaterialCommunityIcons name={icon} size={20} color={color} />)

    }
    else if (icon == "gamepad-variant") {
      return (<MaterialCommunityIcons name={icon} size={20} color={color} />)
    }
    else if (icon == "book") {
      return (<FontAwesome name={icon} size={20} color={color} />)
    }
    else if (icon == "stats-chart") {
      return (<Ionicons name={icon} size={20} color={color} />)
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {icon && handleIcon()}
      <Text style={{ color }}>{tab.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
});

export default Tab;
