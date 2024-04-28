import { ImageBackground, Text, View, TouchableOpacity } from 'react-native';
import backgroundImg from '../../assets/imgs/fundo.jpg';
import homeStyle from './homeStyle';

function Home() {
  return (
    <View style={homeStyle.containerHome}>
      <ImageBackground source={backgroundImg} resizeMode="cover" style={homeStyle.image}>
        <View style={homeStyle.overlay}>
          <Text style={homeStyle.title}>Soviet Space ☭</Text>
          <Text style={homeStyle.subTitle}>Explorando o Universo Vermelho</Text>
          <TouchableOpacity style={homeStyle.btnHome} onPress={() => console.log('Button pressed')}>
            <Text>Saiba Mais</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

export default Home;
