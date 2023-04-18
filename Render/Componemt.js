
import  React ,{memo,useRef} from 'react';
import { TextInput , View, StyleSheet, Image } from 'react-native';


const ChildComponent = React.forwardRef((props, ref) => {
    function helloWorld() {
      alert('Hello World');
    }
  
    React.useImperativeHandle(ref, () => ({ helloWorld }));
  
    return <TextInput placeholder="Try to call helloWorld from App.js" />;
  });

  export default memo(ChildComponent)