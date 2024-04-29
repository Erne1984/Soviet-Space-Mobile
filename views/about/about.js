import React from 'react';
import { View, Image, Text } from 'react-native';
import aboutStyle from './aboutStyle';

function About() {
  return (
    <View style={aboutStyle.container}>
      <Image
        source={require('../../assets/imgs/stalinMao.jpg')}
        style={aboutStyle.image}
        resizeMode="center"
      />
      <Text style={aboutStyle.text}>
        Soviet Space ☭ é uma pequena coleção de matérias introdutórios para a se aprofundar no mundo de escritos socialistas e marxistas. 
      </Text>
    </View>
  );
};

export default About;