import React, { useState, useEffect }  from 'react';
import { View, Button,
         FlatList, StyleSheet,
         Text, TextInput, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const logBook = () => {
  const [eventDate,setEventDate] = useState("")
  const [name,setName] = useState("")
  const [review,setReview] = useState("")
  const [log,setLog]= useState([])

  // this loads in the data after the app has been rendered
  useEffect(() => {getData()}
           ,[])

  const getDataUGLY = () => {

          // the '@profile_info' can be any string
          AsyncStorage.getItem('@log')
            .then((jsonValue) => {
              let data = null
              if (jsonValue!=null) {
                data = JSON.parse(jsonValue)
                setLog(data)
                console.log('just set Info, Name and Email')
              } else {
                console.log('just read a null value from Storage')
                // this happens the first time the app is loaded
                // as there is nothing in storage...
                setLog([])
                setEventDate("")
                setName("")
                setReview("")
              }
            })
           .catch((error)=> {   console.log("error in getData ")})


  }

  const getData = async () => {
        try {
          // the '@profile_info' can be any string
          const jsonValue = await AsyncStorage.getItem('@log')
          let data = null
          if (jsonValue!=null) {
            data = JSON.parse(jsonValue)
            setLog(data)
            console.log('just set Info, Name and Email')
          } else {
            console.log('just read a null value from Storage')
            // this happens the first time the app is loaded
            // as there is nothing in storage...
            setLog([])
            setDateTime("")
            setName("")
            setReview("")
          }
        } catch(e) {
          console.log("error in getData ")
          // this shouldn't happen, but its good practice
          // to check for errors!
          console.dir(e)
          // error reading value
        }
  }

  const storeData = async (value) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem('@log', jsonValue)
          console.log('just stored '+jsonValue)
        } catch (e) {
          console.log("error in storeData ")
          console.dir(e)
          // saving error
        }
  }

  const clearAllUGLY = () => {
        try {
          console.log('in clearData')
          AsyncStorage.clear()
             .then(() => {console.log('cleared the data')})
        } catch(e) {
          console.log("error in clearData ")
          console.dir(e)
          // clear error
        }
  }

  const clearAll = async () => {
        try {
          console.log('in clearData')
          await AsyncStorage.clear()
        } catch(e) {
          console.log("error in clearData ")
          console.dir(e)
          // clear error
        }
  }


// Each log in the FlatList will be rendered as follows:
  const renderLog = ({item}) => {
    return (
      <View style={styles.log}>
           <Text>{item.eventDate}</Text>
           <Text>{item.name} </Text>
           <Text>{item.review} </Text>
      </View>
    )
  }


  let debug=true
  const debugView =
    (<View>
        <Text style={{fontSize:18,
                      color:'black',backgroundColor:'lightgray'}}>
              DEBUGGING INFO:
         </Text>
      <Text>
         eventDate is ({eventDate})
      </Text>
      <Text>
         name is ({name})
      </Text>
      <Text>
         review is ({review})
      </Text>
      <Text>
         log is {JSON.stringify(log)}
      </Text>
  </View>);

 
  return (

    <View style={styles.container}>

         <View style={{flexDirection:'row',
                    justifyContent:'center',
                    fontSize: '30'}}>       
                <h2>EVENT LOGS/REVIEWS</h2>
         </View>

    <View style={{flex: 4, flexDirection:"row"}}>
       <View style ={styles.image}>
          <View style={{flex: 2, backgroundColor: 'white'}}>
              <img src="https://t3.ftcdn.net/jpg/02/02/40/34/360_F_202403405_yjKks3AH64b3eVZNYgz314CVkcbdr4Kf.jpg"/>     
          </View>
       </View>

  <View style={{flex: 2}}>
      <View style={styles.userInput}>
        <Text>Leave information and reviews about the events you attended so it can help
               more people experience the same! Enter Below:  </Text>
   
      <TextInput 
        style={{fontSize:14}}
        placeholder="Event Date"
        onChangeText={text => {
             setEventDate(text);
           }}
        value = {eventDate}
      />

      <TextInput 
        style={{fontSize:14}}
        placeholder="Event Name"
        onChangeText={text => {
             setName(text);
           }}
        value = {name}
      />

      <TextInput 
        style={{fontSize:14}}
        placeholder="Review"
        onChangeText={text => {
             setReview(text);
           }}
        value = {review}
      />
  </View>

  <View style={{flexDirection:'row',
                justifyContent:'left'}}>
  <Button
         title={"Log"}
         color="green"
         onPress = {() => {
           const newlog =
             log.concat(
               {'eventDate':eventDate,
                'name':name,
                'review':review,
                'completed':new Date()
             })
           setLog(newlog)
           storeData(newlog)
           setEventDate("")
           setName("")
           setReview("")
         }}
         />
  <Button
          title={"Clear"}
          color="red"
          onPress = {() => {
            clearAll()
            setLog([])
          }}
          />

</View>
       </View>
    </View>
      <View style={{flexDirection:'row',
                    justifyContent:'center',
                    backgroundColor:'#162F91'}}>
        <Text style={{fontSize:20,
                      color:'black', color: 'white', }}>
              PAST EVENTS:
         </Text>
      </View>

      <FlatList
        data={log.reverse()}
        renderItem={renderLog}
        keyExtractor={item => item.eventDate}
      />

      {debug?debugView: <Text></Text>}

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#ffe4b5',
    justifyContent: 'center',
    border: "thick solid black",
    textAlign:'left',
    marginTop:20,
    padding:20,
  },
  userInput:{   
    backgroundColor: '#C7BCB1',
    textAlign:'center',
    marginTop:20,
    padding:20,
    fontSize: 40,
    padding:20,
    color: '#191970'
  },
  log:{
    flexDirection:'row',
    justifyContent:'space-between',
    border: "thick solid #162F91",
    padding:20,
  },
  headerText: {
    textAlign:'center',
    backgroundColor:'#9acd32',
    fontSize: 18,
    padding:20,
    color: '#191970'
  },
  image:{
    justifyContent: 'center',
    width:'13%',
    height: '10%', 
  },
  container: {
    flex: 1,
    padding: 20,
  },


});


export default logBook;
