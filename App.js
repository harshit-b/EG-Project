import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './app/navigation/TabNavigator';
import TabBarProvider from './app/contexts/TabBarProvider';
import WelcomeScreen from "./app/components/WelcomeScreen.js"
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <TabBarProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Tab" component={TabNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </TabBarProvider>
  );
}
