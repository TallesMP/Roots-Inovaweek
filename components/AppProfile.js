// components/Profile.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Profile = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.profileImage}
        source={{ uri: 'https://via.placeholder.com/150' }} // Imagem genérica de perfil
      />
      <Text style={styles.name}>Nome do Usuário</Text>
      <Text style={styles.email}>usuario@email.com</Text>
      
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Informações Adicionais:</Text>
        <Text style={styles.infoText}>Localização: São Paulo, BR</Text>
        <Text style={styles.infoText}>Data de Nascimento: 01/01/1990</Text>
        <Text style={styles.infoText}>Profissão: Desenvolvedor</Text>
      </View>
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
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  email: {
    fontSize: 18,
    color: 'gray',
    marginBottom: 20,
  },
  infoContainer: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default Profile;
