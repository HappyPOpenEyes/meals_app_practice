import { Pressable, View, Text, StyleSheet, Platform } from "react-native";

function CategoryGridTile({ item, onPresss }) {
  return (
    <Pressable
      style={({ pressed }) => [
        { backgroundColor: item.color },
        styles.gridItem,
        pressed ? styles.buttonPressedStyle : null,
      ]}
      onPress={onPresss}
    >
      <View>
        <View>
          <Text style={styles.textStyle}> {item.title}</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 18,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },

  buttonStyle: {
    flex: 1,
    margin: 20,
    borderRadius: 18,
    height: 150,
  },

  buttonPressedStyle: {
    opacity: 0.8,
  },

  textStyle: {
    fontSize: 17,
    fontWeight: "600",
    letterSpacing: 1,
    textAlign: "center",
  },
});
