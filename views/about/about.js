import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

function About() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/imgs/stalinMao.jpg')}
        style={styles.image}
        resizeMode="center"
      />
      <Text style={styles.text}>
        Soviet Space ☭ é uma pequena coleção de matérias introdutórios para a se aprofundar no mundo de escritos socialistas e marxistas. 
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: '100%',
    height: 330,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
});
export default About;