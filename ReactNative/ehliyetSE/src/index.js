import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const QuizApp = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.categoryContainer}>
        <TouchableOpacity
          style={styles.category}
          onPress={() => {
            navigation.navigate("Playground"), { category: "category1" };
          }}
        >
          <Text style={styles.categoryTitle}>Category1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.category}
          onPress={() => {
            navigation.navigate("Playground"), { category: "category2" };
          }}
        >
          <Text style={styles.categoryTitle}>Category2</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.category}
          onPress={() => {
            navigation.navigate("Playground"), { category: "category3" };
          }}
        >
          <Text style={styles.categoryTitle}>Category3</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.category}
          onPress={() => {
            navigation.navigate("Playground"), { category: "category4" };
          }}
        >
          <Text style={styles.categoryTitle}>Category4</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default QuizApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  categoryContainer:{
    flexDirection:"row",
    flexWrap:"wrap",
    justifyContent:"space-around",
    alignItems:"center",
    marginTop:50,
  },
  category:{
    width:150,
    height:150,
    margin:10,
    borderRadius:10,
    backgroundColor:"#FFF",
    shadowColor:"#000",
    shadowOpacity:0.3,
    shadowRadius:5,
    elevation:5,
    justifyContent:"center",
    alignItems:"center",
  },
  categoryTitle:{
    fontSize:20,
    color:"#696969",
    textAlign:"center",
    fontWeight:"bold"
}
});
