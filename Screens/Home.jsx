import { Text, View, FlatList, TouchableOpacity ,  } from "react-native";
import React, { useState } from "react";
import { globalStyles } from "../Styles/Global";

import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation(); 

  const [reviews, setReviews] = useState([
    { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
    { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
    { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
  ]);

  return (
    <View style={globalStyles.container}>
      <FlatList
      data={reviews}  
      renderItem={ ({ item  }) => (

          <TouchableOpacity onPress={() => navigation.navigate('Review', item  )} >
          <Text style={globalStyles.homeTitle }> {item.title} </Text>
          </TouchableOpacity>
      )}
      /> 
    </View> 
  );
};

export default Home; 
