import React, { useState } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity, Linking, Modal, Button } from 'react-native';
import discoveryStyle from './discoveryStyle';

const booksData = [
  {
    url: 'https://www.marxists.org/portugues/lenin/1913/03/tresfont.htm',
    image: require('../../assets/books/fontes.jpg'),
    name: 'Três Fontes Comunismo'
  },
  {
    url: 'https://www.marxists.org/portugues/marx/1848/ManifestoDoPartidoComunista/index.htm',
    image: require('../../assets/books/manifesto.jpg'),
    name: 'Manifesto Comunista'
  },
  {
    url: 'https://www.marxists.org/portugues/marx/1880/socialismo/index.htm',
    image: require('../../assets/books/utopicoAoSocialismo.jpg'),
    name: 'Do Socialismo ao Socialismo Cientifico'
  },
  {
    url: 'https://www.marxists.org/portugues/marx/1845/ideologia-alema-oe/index.htm',
    image: require('../../assets/books/ideologia.jpg'),
    name: 'A Ideologia Alemã'
  },
  {
    url: 'https://www.marxists.org/portugues/lenin/1902/quefazer/fazer.pdf',
    image: require('../../assets/books/imperialismo.webp'),
    name: 'O Que Fazer?'
  },
  {
    url: 'https://www.marxists.org/portugues/lenin/1917/08/estado-e-a-revolucao.pdf',
    image: require('../../assets/books/51hovkkHIZL.jpg'),
    name: 'Estado e Revolução'
  },
  {
    url: 'https://www.marxists.org/portugues/marx/1847/11/principios.htm',
    image: require('../../assets/books/principios.jpeg'),
    name: 'Principios Básicos do Comunismo'
  },
  {
    url: 'https://www.marxists.org/portugues/lenin/1916/imperialismo/index.htm',
    image: require('../../assets/books/imperialismo.jpg'),
    name: 'Imperialismo, Estágio Superior do Capitalismo'
  }
];

function Overlay() {
  return (
    <View style={discoveryStyle.overlay}></View>
  );
}

function Discovery() {
  const [modalVisible, setModalVisible] = useState(false);
  const [urlToOpen, setUrlToOpen] = useState('');

  const openLink = (url) => {
    setUrlToOpen(url);
    setModalVisible(true);
  };

  const handleOpenLink = () => {
    Linking.openURL(urlToOpen).catch((err) => console.error('Erro ao abrir URL:', err));
    setModalVisible(false);
  };

  return (
    <ScrollView style={discoveryStyle.containerDiscovery}>
      <View style={discoveryStyle.boxInput}>
        <View style={discoveryStyle.containerBooks}>
          {booksData.map((book, index) => (
            <TouchableOpacity
              key={index}
              style={[discoveryStyle.rowBooks, { width: '50%' }]}
              onPress={() => openLink(book.url)}
            >
              <Image
                source={book.image}
                style={{ width: '100%', height: 130 }}
                resizeMode="center"
              />
              <Text style={discoveryStyle.bookName}>{book.name}</Text>
              <Text style={discoveryStyle.bookRead}>Ler</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={discoveryStyle.modalContainer}>
          <View style={discoveryStyle.modalContent}>
            <Text style={discoveryStyle.modalText}>Tem certeza que deseja sair do aplicativo?</Text>
            <View style={discoveryStyle.modalButtonContainer}>
              <Button title="Cancelar" onPress={() => setModalVisible(false)} />
              <Button title="Abrir" onPress={handleOpenLink} />
            </View>
          </View>
        </View>
      </Modal>
      {modalVisible && <Overlay />}
    </ScrollView >
  );
}

export default Discovery;
