import React, { useState } from "react";
import { Button, StyleSheet, ImageBackground, Text, TextInput, View } from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const image = { uri: "https://prealliance-school-images.oneclass.com/school_infos/23/image_data/static_map_image_url/staticmap" };

const event = (props) => {
  const [zipCode,setZipCode] = useState(props.zipCode)
      return (
           
  <View style={styles.container}>
  
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>

    <Text style={styles.text}>
        <h1>FIND EVENTS AROUND ME </h1>
   
        <TextInput
            style={styles.textinput}
            placeholder="Enter Zipcode"
            onChangeText={text => {setZipCode(parseFloat(text))}}
        />
    
        <Button
            color='red' title='SEARCH'
            onPress = {() =>
              setZipCode(0)}
        />

      <Text> Events Found: 0 </Text>
 </Text>
    </ImageBackground>
  </View>
      );
    }

  const styles = StyleSheet.create ({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      justifyContent: "center"
    },
    text: {
      color: "white",
      lineHeight: 24,
      textAlign: "center",
      backgroundColor: "#000000c0"
    },
    textinput:{
      margin:20,
      fontSize:20
    },
    header: {
      fontSize:20,
      color:'blue'
    },
    rowContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  });

export default event;
