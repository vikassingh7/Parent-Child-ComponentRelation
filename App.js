import { View, Text,StyleSheet, TextInput,TouchableOpacity} from 'react-native'
import React,{useEffect,useState,useRef, useCallback} from 'react'
import ChildComponent from './Render/Componemt'

const App = () => {
  const childRef = useRef();

  function checkSuccess() {
    childRef.current?.helloWorld();
  }

  return (
    <View style={styles.container}>
      <ChildComponent ref={childRef} />
      <TouchableOpacity style={styles.button} onPress={checkSuccess}>
        <Text>helloWorld ChildComponent</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',

    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
});

export default App