import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import CategoryScreen from "./screens/views/CategoriesScreen.js";
import MealsOverview from "./screens/views/MealsOverviewScreen.js";
import MealsDetailsScreen from "./screens/views/MealsDetailsScreen.js";
import FavouriteScreen from "./screens/views/FavouritesScreen.js";
import FavouriteContextProvider from "./storing/context/FavouriteContext.js";
import { Provider } from "react-redux";
import { store } from "./storing/redux/storage.js";

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#4F4557" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#6D5D6E" },
        drawerActiveTintColor: "#4F4557",
        drawerLabelStyle: {
          fontSize: 18,
          color: "#DBAFA0",
          fontWeight: "bold",
        },

        drawerActiveBackgroundColor: "#6D5D6E",
        drawerStyle: {
          backgroundColor: "#4F4557",
          width: 240,
        },
      }}
    >
      <Drawer.Screen
        name="category"
        component={CategoryScreen}
        options={{ title: "Home" }}
      />
      <Drawer.Screen name="Favourite" component={FavouriteScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      {/* <FavouriteContextProvider> */}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#4F4557" },
              headerTintColor: "white",
              contentStyle: { backgroundColor: "#6D5D6E" },
            }}
          >
            <Stack.Screen
              name="Home"
              component={MyDrawer}
              options={{ title: "Home", headerShown: false }}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverview}
              options={{ title: "Meals Overview", headerBackTitle: "Back" }}
            />
            <Stack.Screen
              name="MealsReceipe"
              component={MealsDetailsScreen}
              options={{
                title: "Meals Details Screen",
                headerBackTitle: "Back",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      {/* </FavouriteContextProvider> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
