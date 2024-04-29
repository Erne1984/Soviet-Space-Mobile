import React, { useState } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity, Linking, Modal, Button } from 'react-native';
import discoveryStyle from './discoveryStyle';

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

          <TouchableOpacity style={[discoveryStyle.rowBooks, { width: '50%' }]} onPress={() => openLink('https://www.marxists.org/portugues/lenin/1913/03/tresfont.htm')}>
            <Image
              source={require('../../assets/books/fontes.jpg')}
              style={{ width: '100%', height: 130 }}
              resizeMode="center"
            />
            <Text style={discoveryStyle.bookName}>Três Fontes Comunismo</Text>
            <Text style={discoveryStyle.bookRead}>Ler</Text>
          </TouchableOpacity>


          <TouchableOpacity style={[discoveryStyle.rowBooks, { width: '50%' }]} onPress={() => openLink('https://www.marxists.org/portugues/marx/1848/ManifestoDoPartidoComunista/index.htm')}>
            <Image
              source={require('../../assets/books/manifesto.jpg')}
              style={{ width: '100%', height: 130 }}
              resizeMode="center"
            />
            <Text style={discoveryStyle.bookName}>Manifesto Comunista</Text>
            <Text style={discoveryStyle.bookRead}>Ler</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[discoveryStyle.rowBooks, { width: '50%' }]} onPress={() => openLink('https://www.marxists.org/portugues/marx/1880/socialismo/index.htm')}>
            <Image
              source={require('../../assets/books/utopicoAoSocialismo.jpg')}
              style={{ width: '100%', height: 130 }}
              resizeMode="center"
            />
            <Text style={discoveryStyle.bookName}>Do Socialismo ao Socialismo Cientifico</Text>
            <Text style={discoveryStyle.bookRead}>Ler</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[discoveryStyle.rowBooks, { width: '50%' }]} onPress={() => openLink('https://www.marxists.org/portugues/marx/1845/ideologia-alema-oe/index.htm')}>
            <Image
              source={require('../../assets/books/ideologia.jpg')}
              style={{ width: '100%', height: 130 }}
              resizeMode="center"
            />
            <Text style={discoveryStyle.bookName}>A Ideologia Alemã</Text>
            <Text style={discoveryStyle.bookRead}>Ler</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[discoveryStyle.rowBooks, { width: '50%' }]} onPress={() => openLink('https://www.marxists.org/portugues/lenin/1902/quefazer/fazer.pdf')}>
            <Image
              source={require('../../assets/books/imperialismo.webp')}
              style={{ width: '100%', height: 130 }}
              resizeMode="center"
            />
            <Text style={discoveryStyle.bookName}>O Que Fazer?</Text>
            <Text style={discoveryStyle.bookRead}>Ler</Text>
          </TouchableOpacity>


          <TouchableOpacity style={[discoveryStyle.rowBooks, { width: '50%' }]} onPress={() => openLink('https://www.marxists.org/portugues/lenin/1917/08/estado-e-a-revolucao.pdf')}>
            <Image
              source={require('../../assets/books/51hovkkHIZL.jpg')}
              style={{ width: '100%', height: 130 }}
              resizeMode="center"
            />
            <Text style={discoveryStyle.bookName}>Estado e Revolução</Text>
            <Text style={discoveryStyle.bookRead}>Ler</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[discoveryStyle.rowBooks, { width: '50%' }]} onPress={() => openLink('https://www.marxists.org/portugues/marx/1847/11/principios.htm')}>
            <Image
              source={require('../../assets/books/principios.jpeg')}
              style={{ width: '100%', height: 130 }}
              resizeMode="center"
            />
            <Text style={discoveryStyle.bookName}>Principios Básicos do Comunismo</Text>
            <Text style={discoveryStyle.bookRead}>Ler</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[discoveryStyle.rowBooks, { width: '50%' }]} onPress={() => openLink('https://www.marxists.org/portugues/lenin/1916/imperialismo/index.htm')}>
            <Image
              source={require('../../assets/books/imperialismo.jpg')}
              style={{ width: '100%', height: 130 }}
              resizeMode="center"
            />
            <Text style={discoveryStyle.bookName}>Imperialismo, Estágio Superior do Capitalismo</Text>
            <Text style={discoveryStyle.bookRead}>Ler</Text>
          </TouchableOpacity>

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
  )
}

export default Discovery;
