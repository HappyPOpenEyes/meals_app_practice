import { View, StyleSheet, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function IconButton({ menuIcon, onPresss, color }) {
  
  return (
    <Pressable
      onPress={onPresss}
      style={({pressed}) => pressed && styles.pressed}
    >
      <Ionicons name={menuIcon} size={25} color={color} />
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.3,
  },
});
