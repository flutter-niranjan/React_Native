
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ExStyles from "./styles"; // Importing external styles from Styles/styles.js

export default function App() {
  return (
    <View>
      <Text style={{fontSize:50}}>Style Example</Text>  
      <Text style={{fontSize: 30,color:'blue',backgroundColor:'lightgray'}}>INLINE STYLE</Text>
      <Text style={styles.textBox}>INTERNAL STYLE</Text>
      <Text style={ExStyles.textBox}>EXTERNAL STYLE</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textBox :{
    color: "white",
    backgroundColor: "black",
    fontSize: 20,
    padding: 10,
    margin: 10,
  }
})


