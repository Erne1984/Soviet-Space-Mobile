import { ImageBackground, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import backgroundImg from '../../assets/imgs/fundo.jpg';
import homeStyle from './homeStyle';

function Home() {
  const navigation = useNavigation();

  return (
    <View style={homeStyle.containerHome}>
      <ImageBackground source={backgroundImg} resizeMode="cover" style={homeStyle.image}>
        <View style={homeStyle.overlay}>
          <Text style={homeStyle.title}>Soviet Space ☭</Text>
          <Text style={homeStyle.subTitle}>Explorando o Universo Vermelho de conhecimento</Text>

          <View style={homeStyle.btnContainer}>
            <TouchableOpacity
              style={homeStyle.btnHome}
              onPress={() => navigation.navigate('Obras')}>
              <Text style={homeStyle.btnHomeColor}>Obras</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={homeStyle.btnHome}
              onPress={() => navigation.navigate('Ilustres')}>
              <Text style={homeStyle.btnHomeColor}>Ilustres</Text>
            </TouchableOpacity>
          </View>

        </View>
      </ImageBackground>
    </View>
  );
}

export default Home;
