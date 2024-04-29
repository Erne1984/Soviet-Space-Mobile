import { ImageBackground, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importe useNavigation
import backgroundImg from '../../assets/imgs/fundo.jpg';
import homeStyle from './homeStyle';

function Home() {
  const navigation = useNavigation(); // Obtenha o objeto de navegação

  return (
    <View style={homeStyle.containerHome}>
      <ImageBackground source={backgroundImg} resizeMode="cover" style={homeStyle.image}>
        <View style={homeStyle.overlay}>
          <Text style={homeStyle.title}>Soviet Space ☭</Text>
          <Text style={homeStyle.subTitle}>Explorando o Universo Vermelho de conhecimento</Text>
          <TouchableOpacity 
            style={homeStyle.btnHome} 
            onPress={() => navigation.navigate('Discovery')}>
            <Text style={homeStyle.btnHomeColor}>Obras</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

export default Home;
