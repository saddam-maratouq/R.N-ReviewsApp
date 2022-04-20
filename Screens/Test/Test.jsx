import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  ToastAndroid,
  Modal,
  Pressable
} from "react-native";
import { globalStyles } from "../../Styles/Global";

import React, { useState } from "react";

export default function Test() {
  const [name, setName] = useState("");

  const [submit, setSubmit] = useState(false);

  const [warnning, setWarnning] = useState(false);

  const changeName = (val) => {
    setName(val);
  };

  const submitHandler = () => {
    if (name.length > 3) {
      setSubmit(!submit);
    } else {
      //   Alert.alert('warning' , 'your name must be longer ', [
      //     { text : "Don't show again"},
      //     { text : 'cancel'},
      //     { text : 'ok '} ,
      //   ], { cancelable : true}
      //  )

      // ToastAndroid.showWithGravity(
      //   'your name must be longer ' ,
      //    ToastAndroid.LONG ,
      //    ToastAndroid.TOP

      //   );

      setWarnning(true);
    }
  };

  return (
    <View style={globalStyles.container}>
      <Modal
        visible={warnning}
        onRequestClose={() => setWarnning(false)}
        transparent
      >
        <View style={globalStyles.Centerd_modal}>
          <View style={globalStyles.warning_Modal}> 
          <View style={globalStyles.Modal_title}>
            <Text style={globalStyles.pargraph} > Warning </Text>
          </View> 
          <View style={globalStyles.warn_body}>
            <Text style={globalStyles.pargraph}>
              your name must be longer 
            </Text> 
            </View> 
            <Pressable onPress={() => setWarnning(false)} >
              <Text style={globalStyles.Modal_press}> ok </Text> 
            </Pressable> 
          </View> 
        </View>
      </Modal> 

      <Text style={globalStyles.pargraph}> please enter your name : </Text>
      <TextInput
        onChangeText={changeName}
        style={globalStyles.Input}
        placeholder="E.g.joun"
      />
      <Button title={submit ? "Clear" : "submit"} onPress={submitHandler} />

      {submit ? (
        <Text style={globalStyles.pargraph}> Your regesterd as {name} </Text>
      ) : null}
    </View>
  );
}
