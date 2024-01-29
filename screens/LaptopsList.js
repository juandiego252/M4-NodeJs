import { View, Text, StyleSheet, FlatList,TouchableHighlight } from "react-native";
import { Button, ListItem,FAB } from "@rneui/base";
import { useEffect, useState } from "react";
import { getAllLaptos } from "../rest_client/laptops";

export const LaptopsList = ({navigation}) => {
  const [laptopsList, setLaptopsList] = useState([]);

  useEffect (()=>{
    getAllLaptos(fnRefreshList)
  },[])

  const LaptopItem = ({ laptop }) => {
    return (
      <TouchableHighlight onPress={()=>{
        navigation.navigate("LaptopsFormNav", { laptopParam: laptop });
      }}>
        <ListItem>
          <ListItem.Content>
            <ListItem.Title>
              {laptop.marca}
              {laptop.procesador}
            </ListItem.Title>
            <ListItem.Subtitle>
              {laptop.memoria}
              {laptop.disco}
            </ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      </TouchableHighlight>
    );
  };

  fnRefreshList = (laptops) => {
    setLaptopsList(laptops);
  };

  return (
    <View>
      <Text>LISTA DE LAPTOPS</Text>
      <FlatList
        data={laptopsList}
        renderItem={({item}) => {
          return <LaptopItem laptop={item} />;
        }}
      />
      <FAB title="+"
        onPress={()=>{
          navigation.navigate("LaptopsFormNav",{});
        }}
      
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection:"column",
    alignItems: "stretch",
    justifyContent: "center",
  },
});
