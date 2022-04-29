import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import colors from "./assets/colors/colors";

import Home from "./components/Home";
import Export from "./components/Export";
import Profile from "./components/Profile";
import newPasient from "./components/newPasient";
import BloodPressure from "./components/BloodPressure";
import Login from "./components/Login";

import {
  useFonts,
  Montserrat_500Medium,
  Montserrat_400Regular,
} from "@expo-google-fonts/montserrat";
import AppLoading from "expo-app-loading";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: StyleSheet.tabBar,
        activeTintColor: colors.blue,
        inactiveTintColor: colors.grey1,
        showLabel: false,
      }}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" size={28} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Export"
        component={Export}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="download-outline" size={28} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-outline" size={28} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  let [fontsLoaded] = useFonts({
    Montserrat_500Medium,
    Montserrat_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BloodPressure"
          component={BloodPressure}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.white1,
  },
});

/*import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import colors from "./assets/colors/colors";

import Home from "./components/Home";
import Export from "./components/Export";
import Profile from "./components/Profile";
import newPasient from "./components/newPasient";
import BloodPressure from "./components/BloodPressure";
import Login from "./components/Login";


import FirebaseKeys from "./firebase";

const tabNavigator = createBottomTabNavigator(
  {
    Home: {
    screen: Home,
    BottomTabNavigationOptions: {
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" size={28} color={color} />
          ),
      }
    },
    Export: {
      screen: Export,
      BottomTabNavigationOptions: {
      options: {
          tabBarIcon: ({ color }) => (
            <Ionicons name="download-outline" size={28} color={color} />
          ),
      }
      }
    },
    Profile: {
      screen: Profile,
      BottomTabNavigationOptions: {
        tabBarIcon: ({ color }) => (
          <Ionicons name="person-outline" size={28} color={color} />
        ),
      }
    }
  },
  {
    tabBarOptions: {
      style: StyleSheet.tabBar,
      activeTintColor: colors.blue,
      inactiveTintColor: colors.grey1,
      showLabel: false,
    }
  }
);

const authStack = createStackNavigator ({
  Login: Login,
});

export default tabNavigator (
  createSwitchNavigator({
    Home: Home,
    Profile: Profile
  }
  )
)
*/