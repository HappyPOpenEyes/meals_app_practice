import { View, StyleSheet, Text, Button, FlatList } from "react-native";
import { MEALS } from "../../data/dummy-data";
import { useLayoutEffect } from "react";

import MealItem from "../components/MealItem";
import MealsList from "../components/MealList";


function MealsOverview({ navigation, route }) {
  const catId = route.params.item.id;

  const displayMeal = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
  navigation.setOptions({title:route.params.item.title})
  },[catId,navigation]);
  return <MealsList items={displayMeal}/>;
}

export default MealsOverview;


