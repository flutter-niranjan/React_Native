
import React, { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';

const App = () => {
  const [name,setName] = useState('');
  return (
    <View>
      <Text style={{fontSize:30,marginTop:40,color:'blue'}}>Handeling of Text Input</Text>
      <Text style={{fontSize:20,color:'green'}}>Your Name is: {name}</Text>
      <TextInput 
        placeholder='Enter Your Name'
        style={{borderWidth:2,borderColor:"black",margin:20}}
        onChangeText={(text)=>setName(text)}
        value={name}
      />
      <Button title='Clear the Input' onPress={()=>setName("")}/>
    </View>
  );
}

export default App;