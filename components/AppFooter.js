import * as React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AppFooter({ setSelectedTab }) {
  return (
    <View style={footerStyles.tabBarStyle}>
      {/* Ícone "leaf" para a página Box */}
      <TouchableOpacity
        style={footerStyles.iconContainer}
        onPress={() => setSelectedTab('Box')}
      >
        <Ionicons name="leaf-outline" size={30} color="#000" />
      </TouchableOpacity>

      {/* Ícone "bar-chart" para a página Stats */}
      <TouchableOpacity
        style={footerStyles.iconContainer}
        onPress={() => setSelectedTab('Stats')}
      >
        <Ionicons name="bar-chart-outline" size={30} color="#000" />
      </TouchableOpacity>

      {/* Ícone "person" para a página Profile */}
      <TouchableOpacity
        style={footerStyles.iconContainer}
        onPress={() => setSelectedTab('Profile')}
      >
        <Ionicons name="person-outline" size={30} color="#000" />
      </TouchableOpacity>
    </View>
  );
}

const footerStyles = {
  tabBarStyle: {
    flexDirection: 'row',
    backgroundColor: '#AAF594',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 52.5,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  iconContainer: {
    alignItems: 'center',
  },
};
