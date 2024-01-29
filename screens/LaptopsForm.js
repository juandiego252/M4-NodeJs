import { View, Text, StyleSheet, Alert } from "react-native";
import { Input, Button, FAB } from "@rneui/base";
import { useState } from "react";
import { saveLaptopRest, updateLaptopRest } from "../rest_client/laptops";

export const LaptopsForm = ({ navigation, route }) => {
  let laptopRetrieved = route.params.laptopParam;
  let isNew = true;
  if (laptopRetrieved != null) {
    isNew = false;
  }
  const [brand, setBrand] = useState(isNew ? null : laptopRetrieved.marca);
  const [processor, setProcessor] = useState(
    isNew ? null : laptopRetrieved.procesador
  );
  const [memory, setMemory] = useState(isNew ? null : laptopRetrieved.memoria);
  const [disk, setDisk] = useState(isNew ? null : laptopRetrieved.disco);

  const showMessage = () => {
    Alert.alert("CONFIRMACION", isNew ? "Computadora creado exitosamente" : "Laptop Actualizado");
    navigation.goBack();
  };
  const createLaptop = () => {
    console.log("Guardar laptop");
    saveLaptopRest(
      {
        brand: brand,
        processor: processor,
        memory: memory,
        disk: disk,
      },
      showMessage
    );
  };
  const updateLaptop = () => {
    updateLaptopRest({
      id: laptopRetrieved.id,
      brand: brand,
      processor: processor,
      memory: memory,
      disk: disk,
    }, showMessage);
  }
  return (
    <View style={styles.container}>
      <Text></Text>
      <Input
        value={brand}
        placeholder="Marca:"
        onChangeText={(value) => {
          setBrand(value);
        }}
      />
      <Input
        value={processor}
        placeholder="Procesador:"
        onChangeText={(value) => {
          setProcessor(value);
        }}
      />
      <Input
        value={memory}
        placeholder="Memoria:"
        onChangeText={(value) => {
          setMemory(value);
        }}
      />
      <Input
        value={disk}
        placeholder="Disco:"
        onChangeText={(value) => {
          setDisk(value);
        }}
      />
      <Button title="Guardar" onPress={isNew ? createLaptop : updateLaptop} />
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
