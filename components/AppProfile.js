// components/Profile.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Profile = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.profileImage}
        source={ require('../assets/user_pic.png') }
      />
      <Text style={styles.name}>Usuario</Text>
      <Text style={styles.email}>usuario@email.com</Text>
      
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Informações Adicionais:</Text>
        <Text style={styles.infoText}>Localização: Espirito Santo, BR</Text>
        <Text style={styles.infoText}>Data de Nascimento: 25/07/1963</Text>
        <Text style={styles.infoText}>Telefone: +55 27 99999-9999</Text>

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
    width: 130,
    height: 130,
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
