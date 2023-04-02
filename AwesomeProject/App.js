
//How to use UseState

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button, Linking } from 'react-native';
import React , {useState} from 'react'

export default function App() {

const[clicked,setClicked] = useState(0)

const [count, setCount] = useState(0)
const onClickHandler = () => {
 for(let i = 0;i<10;i++){
  setCount(count+5);
  setClicked(clicked+1);
 }
  }


  return (
    <View style={styles.container}>
      <Text style={styles.text}>{count}</Text>
      <Button title='Add' onPress={onClickHandler}></Button>
      <Text style={styles.text}>You clicked {clicked} Times</Text>
      <StatusBar style="auto" />
    </View>
  );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color:'white',
    fontSize:15,
    fontStyle:'italic',
    margin:10
  }
});
