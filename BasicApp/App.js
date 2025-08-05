import React from "react";
import {
  View,
  Text,
  Button,
} from "react-native";
let age = 25;
var email = "abx@example.com";
function fruit() {
  return "Apple";
}

const App = () => {
  const name = "Niranjan";
  return (
    <View>
      <Text>Hello, Niranjan!</Text>
      <Text>Welcome to the React Native App!</Text>
      <Button title="Basic Button"/>
      <Text>Name:{name}</Text>
      <Text>Age:{age}</Text>
      <Text>Email:{email}</Text>
      <Text>Fruit:{fruit()}</Text>
      <Text>Byee</Text>
    </View>
  );
};

export default App;