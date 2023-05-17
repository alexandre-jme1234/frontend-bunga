import React, { useState } from "react";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import reservation from './reducers/reservation';

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./screens/HomeScreen";
import ProfilScreen from "./screens/ProfilScreen";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import CongratulateScreen from "./screens/CongratulateScreen";
import ProductScreen from "./screens/ProductScreen";
import SelectionScreen from "./screens/SelectionScreen";
import PlageDateScreen from "./screens/PlageDateScreen";
import LauchingScreen from "./screens/LauchingScreen";
import WishListScreen from "./screens/WishListScreen";

import { extendTheme, NativeBaseProvider, Box } from "native-base";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const store = configureStore({
  reducer: {reservation},
 });

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName = "";

          if (route.name === "Bungalow") {
            iconName = "home";
          } else if (route.name === "Profil") {
            iconName = "user";
          } else if (route.name === "WishList") {
            iconName = "user";
          }
          return <FontAwesome name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#2196f3",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      })}
    >
      <Tab.Screen name="WishList" component={WishListScreen} />
      <Tab.Screen name="Profil" component={ProfilScreen} />
      <Tab.Screen name="Bungalow" component={BungalowStack} />
    </Tab.Navigator>
  );
};

const BungalowStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Product" component={ProductScreen} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Launching" component={LauchingScreen} />
            <Stack.Screen name="Selection" component={SelectionScreen} />
            <Stack.Screen name="TabNavigator" component={TabNavigator} />
            <Stack.Screen name="PlageDate" component={PlageDateScreen} />
            <Stack.Screen
              name="Congratulation"
              component={CongratulateScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}

const newColorTheme = {
  brand: {
    900: "#8287af",
  },
};
const theme = extendTheme({
  colors: newColorTheme,
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
});
