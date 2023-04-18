import { View, Text,StyleSheet, TextInput} from 'react-native'
import React,{useEffect,useState,useRef} from 'react'

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [count ,setCount]= useState("");
 
  const previousInputValue = useRef("");
 console.log("helloRef");
 console.log(inputValue,"inputValuehelloRef");
  useEffect(() => {
    previousInputValue.current = inputValue;
    setCount(count+1)
    console.log(  previousInputValue.current ,"current");
    console.log(inputValue,"input");
  }, [inputValue]);
  return (
    <View  style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
     
    }}>
       <TextInput
        style={styles.input}
        onChangeText={text => setInputValue(text)}
        value={inputValue}
      />
      {/* <Text>Render Count: {count.current}</Text> */}
      <Text>Current Value: {inputValue}</Text>
      <Text>Previous Value: {previousInputValue.current}</Text>
      <Text>{console.log(previousInputValue.current ,"currentUi" )}</Text>
      <Text>{console.log(inputValue,"inputUi" )}</Text>
     
    </View>
  )
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default App