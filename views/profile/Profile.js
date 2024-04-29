import React, { useState } from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity, Linking, Modal, Button } from 'react-native';
import ilustreStyle from './ilustres.js';

function Overlay() {
  return (
    <View style={ilustreStyle.overlay}></View>
  );
}

function Profile() {
  const [modalVisible, setModalVisible] = useState(false);
  const [urlToOpen, setUrlToOpen] = useState('');

  const illustresData = [
    {
      name: 'Karl Marx',
      description: 'Filósofo, economista e sociólogo alemão, autor das principais obras que fundamentam o socialismo e o comunismo.',
      image: require('../../assets/persons/karl.webp'),
      url: "https://www.marxists.org/portugues/marx/1877/06/marx.htm",
    },
    {
      name: 'Friedrich Engels',
      description: 'Coautor de diversas obras com Karl Marx, contribuiu significativamente para o desenvolvimento do socialismo científico.',
      image: require('../../assets/persons/engels.jpg'),
      url: "https://www.marxists.org/portugues/dicionario/verbetes/e/engels.htm",
    },
    {
      name: 'Vladimir Lenin',
      description: 'Líder revolucionário russo, político e teórico comunista que serviu como chefe de governo da Rússia Soviética de 1917 a 1924 e da União Soviética de 1922 a 1924.',
      image: require('../../assets/persons/lenin.jpg'),
      url: "https://www.marxists.org/portugues/lenin/index.htm",
    },
    {
      name: 'Antonio Gramsci',
      description: 'Filósofo, político, teórico marxista e jornalista italiano. Gramsci foi um dos fundadores do Partido Comunista Italiano e é conhecido por sua teoria da hegemonia cultural.',
      image: require('../../assets/persons/Gramsci.png'),
      url: "https://www.marxists.org/portugues/gramsci/index.htm",
    },
    {
      name: 'Josef Stalin',
      description: 'Líder soviético que governou a União Soviética de meados dos anos 1920 até sua morte em 1953. Stalin liderou a URSS durante a Segunda Guerra Mundial e foi responsável por transformar a União Soviética em uma superpotência mundial.',
      image: require('../../assets/persons/Stalin.jpg'),
      url: "https://www.marxists.org/portugues/stalin/index.htm",
    },
    {
      name: 'Enver Hoxha',
      description: 'Revolucionário e principal dirigente do Partido do Trabalho da Albânia. Dirigiu a luta antifascista de libertação nacional do povo albanês contra a ocupação italiana e alemã. Organizou a construção socialista na Albânia de 1944 até 1985.',
      image: require('../../assets/persons/enver.jpg'),
      url: "https://www.marxists.org/portugues/hoxha/index.htm",
    },
    {
      name: 'Ho Chi Minh',
      description: 'Político e revolucionário vietnamita que foi primeiro-ministro e presidente da República Democrática do Vietnã (Vietnã do Norte). Ho Chi Minh desempenhou um papel fundamental na luta pela independência do Vietnã contra o colonialismo francês e o imperialismo americano.',
      image: require('../../assets/persons/Ho_Chi_Minh_1946.jpg'),
      url: "https://www.marxists.org/portugues/ho_chi_minh/index.htm",
    },
    {
      name: 'Luís Carlos Prestes',
      description: 'Militar e político brasileiro, líder da Aliança Nacional Libertadora durante a Era Vargas. Prestes foi uma figura importante na história política brasileira, especialmente durante os movimentos comunistas e a Revolução de 1930.',
      image: require('../../assets/persons/Prestes.jpg'),
      url: "https://www.marxists.org/portugues/prestes/index.htm",
    },
  ];

  const openLink = (url) => {
    setUrlToOpen(url);
    setModalVisible(true);
  };

  const handleOpenLink = () => {
    Linking.openURL(urlToOpen).catch((err) => console.error('Erro ao abrir URL:', err));
    setModalVisible(false);
  };

  return (
    <ScrollView style={ilustreStyle.container}>
      {illustresData.map((illustre, index) => (
        <TouchableOpacity key={index} onPress={() => openLink(illustre.url)}>
          <View style={ilustreStyle.illustreContainer}>
            <Image
              source={illustre.image}
              style={ilustreStyle.illustreImage}
              resizeMode="cover"
            />
            <View style={ilustreStyle.illustreInfo}>
              <Text style={ilustreStyle.illustreName}>{illustre.name}</Text>
              <Text style={ilustreStyle.illustreDescription}>{illustre.description}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={ilustreStyle.modalContainer}>
          <View style={ilustreStyle.modalContent}>
            <Text style={ilustreStyle.modalText}>Tem certeza que deseja sair do aplicativo?</Text>
            <View style={ilustreStyle.modalButtonContainer}>
              <Button title="Cancelar" onPress={() => setModalVisible(false)} />
              <Button title="Abrir" onPress={handleOpenLink} />
            </View>
          </View>
        </View>
      </Modal>
      {modalVisible && <Overlay />}
    </ScrollView>
  );
}

export default Profile;