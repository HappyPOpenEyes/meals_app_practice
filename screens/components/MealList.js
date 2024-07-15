import { View,StyleSheet,FlatList, } from "react-native";
import MealItem from "./MealItem";


function MealsList({items}) {

    function renderMealItem(itemaData) {
    return (
      <MealItem mealItem={itemaData.item} />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(mealItem) => mealItem.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsList;

const styles = StyleSheet.create({
  container: {},
});