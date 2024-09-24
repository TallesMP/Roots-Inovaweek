import React from 'react';
import { Text, SafeAreaView, TouchableOpacity, StyleSheet, View } from 'react-native';

const AppNav = ({ setSelectedNavTab }) => {
  const [selectedSection, setSelectedSection] = React.useState('Avisos');

  const handlePress = (section) => {
    setSelectedSection(section);
    setSelectedNavTab(section); // Atualiza a aba de navegação no componente pai
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={[
            styles.section,
            selectedSection === 'Avisos' && styles.selectedSection,
          ]}
          onPress={() => handlePress('Avisos')}
        >
          <View style={styles.sectionContent}>
            <Text style={styles.text}>Avisos</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.section,
            selectedSection === 'Geral' && styles.selectedSection,
          ]}
          onPress={() => handlePress('Geral')}
        >
          <View style={styles.sectionContent}>
            <Text style={styles.text}>Geral</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 2,
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 4,
  },
  section: {
    paddingVertical: 4,
    alignItems: 'center',
  },
  sectionContent: {
    paddingHorizontal: 50, // Largura fixa para evitar movimento
    paddingVertical: 4,
  },
  selectedSection: {
    backgroundColor: '#AAF594',
    borderRadius: 20,
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default AppNav;
