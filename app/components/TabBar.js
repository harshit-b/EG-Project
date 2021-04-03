import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Dimensions, Animated } from 'react-native';
import { useTabBar } from '../contexts/TabBarProvider';
import Tab from './Tab';

const { width } = Dimensions.get('screen');

const TabBar = ({ state, navigation }) => {
  const [selected, setSelected] = useState('Home');
  const { routes } = state;
  const renderColor = currentTab => (currentTab === selected ? 'white' : 'grey');

  const { showTabBar } = useTabBar();

  const animation = useRef(new Animated.Value(0)).current;

  const handlePress = (activeTab, index) => {
    if (state.index !== index) {
      setSelected(activeTab);
      navigation.navigate(activeTab);
    }
  };

  const toggleTabBarAnimation = () => {
    if (showTabBar) {
      Animated.timing(animation, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(animation, {
        toValue: 100,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }
  };

  useEffect(() => {
    toggleTabBarAnimation();
  }, [showTabBar]);

  return (
    <View style={styles.Dashboard}>
      {routes.map((route, index) => (
        <Tab
          tab={route}
          icon={route.params.icon}
          onPress={() => handlePress(route.name, index)}
          color={renderColor(route.name)}
          key={route.key}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  Dashboard: {
    backgroundColor: "rgba(24, 26, 25,1)",
    height: "11%",
    width: "100%",
    flexDirection: "row",
    alignItems: "center"
    // marginTop: "10%"
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    width: 250,
    borderRadius: 100,
    elevation: 2,
  },
});

export default TabBar;
