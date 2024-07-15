import { useContext, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
// import { FavouriteContext } from "../../store/context/FavouriteContext";
import { CATEGORIES, MEALS } from "../../data/dummy-data";
import MealsList from "../components/MealList";
import { useSelector } from "react-redux";
import { removeFavourite } from "../../storing/redux/favourite";

function FavouriteScreen() {
//   const favourtieMealCtx = useContext(FavouriteContext);
    const favouriteMealId = useSelector((state) => state.favouriteMeals.ids);


//   const mealIdList = favourtieMealCtx.ids;
  const mealIdList = favouriteMealId;

  const [favouriteMealList, setFavourtieMealList] = useState([]);

  const displayMeal = MEALS.filter((mealItem) => {
    // return favourtieMealCtx.ids.includes(mealItem.id);
    return favouriteMealId.includes(mealItem.id);
  });



  if(displayMeal.length == 0){
    return (
        <View style={styles.noItemFoundStyle}>
            <Text style={{color:"white"}}>
                No Meals Found
            </Text>
        </View>
    );
  }

  return <MealsList items={displayMeal} />;
}

export default FavouriteScreen;


const styles = StyleSheet.create({
    noItemFoundStyle : {
        alignContent:"center",
        justifyContent:"center",
        alignItems:"center",
        flex:1,


    }
});