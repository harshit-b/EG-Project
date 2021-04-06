import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CoursesScreen from '../components/CoursesScreen';
import GamesScreen from '../components/GamesScreen';
import LessonsScreen from '../components/LessonsScreen';
import StatsScreen from '../components/StatsScreen';
import MoreScreen from '../components/MoreScreen';
import TabBar from '../components/TabBar';

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator tabBar={props => <TabBar {...props} />}>
      <Tab.Screen
        name='Course'
        component={CoursesScreen}
        initialParams={{ icon: 'gamepad-circle' }}
      />
      <Tab.Screen
        name='Games'
        component={GamesScreen}
        initialParams={{ icon: 'gamepad-variant' }}
      />
      <Tab.Screen
        name='Lessons'
        component={LessonsScreen}
        initialParams={{ icon: 'book' }}
      />
      <Tab.Screen
        name='Stats'
        component={StatsScreen}
        initialParams={{ icon: 'stats-chart' }}
      />
      <Tab.Screen
        name='More'
        component={MoreScreen}
        initialParams={{ icon: 'more-horizontal' }}
      />

    </Tab.Navigator>
  );
};

export default TabNavigator;
