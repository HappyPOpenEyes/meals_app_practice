import { View, Text, FlatList } from "react-native";
import { CATEGORIES } from "../../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

function CategoryScreen({ navigation }) {
  function renderCategoryItem(itemData) {
    function onPressHandler() {
      navigation.navigate('MealsOverview', {categoryId : itemData.item.id, name: itemData.item.title, item:itemData.item});
    }

    return <CategoryGridTile item={itemData.item} onPresss={onPressHandler} />;
  }
  return (
    <View>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
      />
    </View>
  );
}

export default CategoryScreen;
