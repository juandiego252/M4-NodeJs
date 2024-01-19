import { View, Text, StyleSheet, FlatList } from "react-native";
import { Button, ListItem } from "@rneui/base";
import { useState } from "react";
import { getAllLaptos } from "../rest_client/laptops";

export const LaptopsList = () => {
  const [laptopsList, setLaptopsList] = useState([]);

  const LaptopItem = ({ laptop }) => {
    return (
      <ListItem>
        <ListItem.Content>
          <ListItem.Title>{laptop.marca}{laptop.procesador}</ListItem.Title>
          <ListItem.Subtitle>{laptop.memoria}{laptop.disco}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    );
  };

  fnRefreshList = (laptops) => {
    setLaptopsList(laptops);
  };

  return (
    <View>
      <Text>LISTA DE LAPTOPS</Text>
      <Button
        title="Consultar"
        onPress={() => {
          getAllLaptos(fnRefreshList);
        }}
      />
      <FlatList
        data={laptopsList}
        renderItem={({item}) => {
          return <LaptopItem laptop={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
