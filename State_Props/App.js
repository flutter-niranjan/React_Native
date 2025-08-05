import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';

export default function App() {
  const [name,setName] = useState("niranjan"); // useState to manage state
  function changeName() {
    setName("Ram");
  }
  return (
    <View>
      <Text>Example of State and Props</Text>
      <Text>{name}</Text>
      <Button title="Change Name" onPress={changeName} />
      <User name = {name} age = {29}/>
    
    </View>
  );
}

const User = ({name, age}) => {   // props
  return (
    <View>
      <Text>Name:{name} </Text>
      <Text>Age: {age}</Text>
    </View>
  )
}

