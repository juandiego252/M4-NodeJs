import { View, Text, StyleSheet, Alert } from "react-native";
import { Input, Button, FAB } from "@rneui/base";
import { useState } from "react";
import { saveLaptopRest } from "../rest_client/laptops";

export const LaptopsForm =({navigation})=>{
    const [id,setId] = useState();
    const [brand,setBrand] = useState();
    const [processor,setProcessor] = useState();
    const [memory,setMemory] = useState();
    const [disk,setDisk] = useState();

    const showMessage =()=>{
        Alert.alert("CONFIRMACION","Computadora creado exitosamente") 
    }
    const saveLaptop = ()=>{
        console.log("Guardar laptop");
        navigation.goBack();
        saveLaptopRest(
            {
                id:id,
                brand:brand,
                processor:processor,
                memory:memory,
                disk:disk
            },
            showMessage
        )
        
    }
    return (
      <View style={styles.container}>
        <Text></Text>
        <Input
          value={id}
          placeholder="id:"
          onChangeText={(value) => {
            setId(value);
          }}
        />
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
        <Button title="Guardar" onPress={saveLaptop}/>
      </View>
    );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});