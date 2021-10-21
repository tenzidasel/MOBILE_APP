import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StyleSheet, Text, ImageBackground, View, Button, } from 'react-native';

import AboutUsScreen from './AboutUsPage'
import EventScreen from './EventPage'
import LogBookPage from './LogBookPage'


const image = { uri: "https://www.gannett-cdn.com/-mm-/44bf4df6c590d32695c57829f337d391605d7075/c=0-166-2594-1632/local/-/media/2016/07/19/CNYGroup/Ithaca/636045424769545402-CommunityConnection.jpg?width=3200&height=1680&fit=crop" };

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="HOME"
          component={HomeScreen}      
        />  

        <Stack.Screen 
          name="Find Events"
          component={EventScreen}
        />

        <Stack.Screen 
          name="About Us" 
          component={AboutUsScreen} />

        <Stack.Screen 
          name="Event logs/Review" 
          component={LogBookPage} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};


const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      

      
      <View style={styles.menu}>

          <Button
              title="Home"
              borderRadius= "40"
              onPress={() =>
               navigation.navigate('Home Screen')
             }
          />
          <Button
              title="Find Events"
              onPress={() =>
               navigation.navigate('Find Events')
             }
          />
          <Button
              title="Event Log/Reviews"
              onPress={() =>
              navigation.navigate('Event logs/Review')
            }
          />

          <Button
              title="ABOUT US"
              onPress={() =>
              navigation.navigate('About Us')
            }
          />

            
      </View>

      <Text style={styles.text}>
            
      <View style={styles.mainPage}>
          <Text style={{fontSize:36}}>
              <h1>WELCOME TO FIND YOUR COMMUNITY</h1> 
              <p1>Wherever you go, meet new people by finding events around you and build community.</p1>
          </Text>
         
      </View>

      <View>
          <Button
              title="Find Events"
              color='red'
              margin='25px'
              padding= '10px'
              onPress={() =>
               navigation.navigate('Find Events')
             }
          />
      </View>     
      </Text>
    </ImageBackground>
  </View> 
     );   
};

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'space-around',
    border: "thick solid red",
    margin:"10px",
    padding:"20px",
  },

  menu:{
    flexDirection: 'row',
    backgroundColor:'white',
    margin:"10px",
    border:"thick solid black",
    padding:'10px',
    justifyContent: 'space-around',
  },
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },

  text: {
    color: "white",
    lineHeight: 64,
    textAlign: "center",
    backgroundColor: "#000000c0"
  },

  mainPage:{
    flexDirection: 'row',
    margin:"25px",
    padding:'10px',
    justifyContent: 'space-around',
  }

});

export default MyStack;

