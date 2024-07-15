import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";


function MealItem({ mealItem }) {
  const navigation = useNavigation(); 
  
  function onItemPressHandler() {
    navigation.navigate("MealsReceipe", { mealItem: mealItem });
  }

      

  return (
    <View style={styles.mainContainer}>
      <Pressable style={styles.buttonStyle} onPress={onItemPressHandler}>
        <Image source={{ uri: mealItem.imageUrl }} style={styles.image} />

        <View style={{ paddingHorizontal: 10, paddingVertical: 10 }}>
          <View style={styles.row}>
            <Text style={styles.title} numberOfLines={2}>
              {mealItem.title}
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Ionicons
                name="time-outline"
                size={18}
                color="green"
                style={{ paddingRight: 2 }}
              />
              <Text>{mealItem.duration} Min</Text>
            </View>
          </View>
          <View style={styles.row}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: "700",
                textTransform: "capitalize",
              }}
            >
              {mealItem.complexity}
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontWeight: "700",
                textTransform: "capitalize",
              }}
            >
              {mealItem.affordability}
            </Text>
  
          </View>
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  mainContainer: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    borderRadius: 8,

    margin: 20,
    backgroundColor: "white",
  },

  buttonStyle: {},

  image: {
    // margin: 20,
    height: 200,
    // width: "100%",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },

  title: {
    flex: 1,
    marginVertical: 5,
    fontSize: 18,

    fontWeight: "bold",
    // textAlign: "center",
  },

  row: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
