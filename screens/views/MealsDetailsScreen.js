import {
  FlatList,
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useLayoutEffect, useContext } from "react";
import { Ionicons } from "@expo/vector-icons";
// import { FavouriteContext } from "../../store/context/FavouriteContext";
import IconButton from "../components/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { addFavourite, removeFavourite } from "../../storing/redux/favourite";

function MealsDetailsScreen({ route, navigation }) {
  // const favourtieMealCtx = useContext(FavouriteContext);

  const favouriteMealId = useSelector((state) => state.favouriteMeals.ids);

  const dispatch = useDispatch();

  const ingredientList = route.params.mealItem.ingredients;
  const receipeList = route.params.mealItem.steps;
  const mealId = route.params.mealItem.id;

  // const mealIsFavourite = favourtieMealCtx.ids.includes(mealId);
  const mealIsFavourite = favouriteMealId.includes(mealId);

  function onFavouriteIconPressHandler() {
    if (mealIsFavourite) {
      // favourtieMealCtx.removeFavourite(mealId);
      dispatch(removeFavourite({ id: mealId }));
    } else {
      // favourtieMealCtx.addFavourite(mealId);
      dispatch(addFavourite({ id: mealId }));
    }
  }

  function OnrenderItem(itemData) {
    return (
      <Text style={styles.itemStyle}>
        {itemData.index + 1}. {itemData.item}
      </Text>
    );
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params.mealItem.title,
      headerRight: () => {
        return (
          <IconButton
            menuIcon={mealIsFavourite ? "star" : "star-outline"}
            color="white"
            onPresss={onFavouriteIconPressHandler}
          />
        );
      },
    });
  }, [navigation, onFavouriteIconPressHandler]);
  const imageUrl = route.params.mealItem.imageUrl;
  return (
    <ScrollView>
      <Image source={{ uri: imageUrl }} style={styles.imageStyle} />
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "flex-end",
          alignContent: "flex-end",
        }}
      >
        <View style={styles.durationStyle}>
          <Ionicons
            name="time-outline"
            size={19}
            color="#DBAFA0"
            style={{ paddingRight: 5 }}
          />
          <Text style={{ color: "#DBAFA0", fontWeight: "bold", fontSize: 16 }}>
            {route.params.mealItem.duration} Min
          </Text>
        </View>
      </View>

      <View style={{ margin: 10 }}>
        <View style={styles.headerStyle}>
          <Text style={styles.headerStyle}>Ingredients</Text>
        </View>
        <FlatList
          data={ingredientList}
          renderItem={OnrenderItem}
          style={styles.flatListStyle}
          scrollEnabled={false}
        />
        <View style={styles.headerStyle}>
          <Text style={styles.headerStyle}>Steps</Text>
        </View>
        <FlatList
          data={receipeList}
          renderItem={OnrenderItem}
          style={styles.flatListStyle}
          scrollEnabled={false}
        />
      </View>
    </ScrollView>
  );
}

export default MealsDetailsScreen;

const styles = StyleSheet.create({
  imageStyle: {
    height: 300,
  },

  ingredientsStyle: {
    fontSize: 18,
    color: "black",
  },
  receipeListStyle: {
    fontSize: 21,
    color: "white",
  },

  headerViewStyle: {
    margin: 10,
  },

  headerStyle: {
    fontSize: 25,
    fontWeight: "600",
    color: "#DBAFA0",
    textAlign: "center",
    borderBottomWidth: 2,
    borderColor: "#DBAFA0",
  },

  flatListStyle: {
    margin: 10,
  },

  itemStyle: {
    color: "#FAF8F1",
    fontSize: 17,
    padding: 2,
  },

  durationStyle: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    borderRadius: 8,
    marginTop: 20,
    marginRight: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#4F4557",
    flexDirection: "row",
  },
});
