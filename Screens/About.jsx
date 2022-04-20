import { StyleSheet, Text, View ,Button } from 'react-native'
import React from 'react'
import { globalStyles } from '../Styles/Global'
import { useNavigation } from '@react-navigation/native';


const About = () => { 
  
  const navigation = useNavigation(); 
  return (
    <View style={globalStyles.container} >
      <Text style={globalStyles.homeTitle} > About  Screen </Text>
     
    </View>
  )
}

export default About ; 


