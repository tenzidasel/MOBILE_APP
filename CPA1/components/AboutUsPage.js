
import React from 'react';
import { StyleSheet, ImageBackground, Text, View, Image, TextInput, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const image = { uri: "https://www.gannett-cdn.com/-mm-/44bf4df6c590d32695c57829f337d391605d7075/c=0-166-2594-1632/local/-/media/2016/07/19/CNYGroup/Ithaca/636045424769545402-CommunityConnection.jpg?width=3200&height=1680&fit=crop" };

const App = () => (
  <View style={styles.contain}>
    
      <Text style={styles.text}>
      <h1>ABOUT US</h1>
           
        
           <Text style={{fontSize:20}}>
           This app is created with the intent for individuals to find a home away from home: A community around where 
                     they are. Find out what exiciting events are taking place around you with people of the same interest! 
                     With Find your community, you are never homesick! 
           </Text>
       

          
                         

       <View style={{flex:4, flexDirection:'column'}}>
         <Image style={{flex:1, width:'100', height:'100'}} source={{uri:'https://s3.amazonaws.com/omiweb/wp-content/uploads/2017/08/01122818/community.jpg'}} />
         
        
         <View style={{flex:1}}>
             <Text style={{fontSize:22}}>
                   <p> CONTACT US </p>
             </Text>
             <TextInput style={{fontSize:12,backgroundColor:'yellow'}}
                        placeholder="NAME:" />
             <TextInput style={{fontSize:12,backgroundColor:'yellow'}}
                        placeholder="EMAIL:" />
             <TextInput style={{fontSize:12,backgroundColor:'yellow'}}
                        placeholder="MESSAGE: " />
             <Button style={{fontSize:32}} title="submit" color="red" />
         </View>
         </View>


      </Text>
      
 
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
  image: {
    flex: 1,
    justifyContent: "center"
  },

  text: {
    color: "white",
    lineHeight: 24,
    textAlign: "center",
    backgroundColor: "#000000c0"
  }
});

export default App;