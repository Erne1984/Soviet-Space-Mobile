import React from 'react';
import { View, Text, Switch } from 'react-native';

import settingsStyle from './settingsStyle';

function Settings(){
  return (
    <View style={settingsStyle.container}>
      <Text style={settingsStyle.title}>Configurações</Text>
      <View style={settingsStyle.settingItem}>
        <Text style={settingsStyle.settingText}>Notificações</Text>
        <Switch />
      </View>
      <View style={settingsStyle.settingItem}>
        <Text style={settingsStyle.settingText}>Modo Escuro</Text>
        <Switch />
      </View>
      <View style={settingsStyle.settingItem}>
        <Text style={settingsStyle.settingText}>Idioma</Text>
        <Text style={settingsStyle.languageText}>Português</Text>
      </View>
    </View>
  );
};

export default Settings;