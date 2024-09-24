import React, { useState } from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import AppHeader from './components/AppHeader';
import AppNav from './components/AppNav';
import AppFooter from './components/AppFooter';
import Box from './components/AppBox';
import Profile from './components/AppProfile';
import Calendar from './components/AppCalendar';
import Box2 from './components/AppBox2'; // Importando AppBox2 para avisos

export default function App() {
  const [selectedTab, setSelectedTab] = useState('Box'); // Estado para controlar a aba selecionada
  const [selectedNavTab, setSelectedNavTab] = useState('Avisos'); // Estado para controlar a aba de navegação

  // Função para renderizar o conteúdo com base na aba de navegação
  const renderNavContent = () => {
    switch (selectedNavTab) {
      case 'Avisos':
        return (
          <>
            <Box2
            titulo="Sensor 1 - Café"
            conteudos={[
              "- pH elevado: recomenda-se correção do solo com aplicação de calcário (calagem) ",
            ]}
          />
            <Box2
            titulo="Sensor 2 - Milho"
            conteudos={[
              "- Potássio baixo: recomenda-se adubação do solo com cobertura de sulfato ou cloreto de potássio",
            ]}
          /><
            Box2
            titulo="Sensor 3 - Feijão"
            conteudos={[
              "- pH insuficiente: recomenda-se adubação com enxofre ou matéria orgânica rica em nitrogênio",
            ]}
          />


          </>
        );
      case 'Geral':
        return (
          <>
            <Box
              titulo="Café"
              conteudos={[
                "- Teperatura do solo: ok",
                "- Umidade: ok",
                "- pH: Acido demais",
              ]}
            />
            <Box
              titulo="Milho"
              conteudos={[
                "- Teperatura do solo: ok",
                "- Umidade: ok",
                "- Potassio: Baixo",
              ]}
            />
            <Box
              titulo="Feijão"
              conteudos={[
                "- Teperatura do solo: ok",
                "- Umidade: ok",
                "- pH: Alcalino demais",
              ]}
            />

          </>
        );
      default:
        return <Box />;
    }
  };

  // Função para renderizar o conteúdo com base na aba do footer
  const renderContent = () => {
    switch (selectedTab) {
      case 'Box':
        return renderNavContent(); // Quando a aba é "Box", usa o conteúdo de navegação
      case 'Stats':
        return <Calendar />;
      case 'Profile':
        return <Profile />;
      default:
        return <Box />;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Renderiza o AppHeader em todas as telas */}
      <AppHeader />

      {/* Exibe a barra de navegação apenas quando a aba Stats NÃO está selecionada */}
      {selectedTab === 'Box' && (
        <AppNav setSelectedNavTab={setSelectedNavTab} />
      )}

      {/* Conteúdo dinâmico baseado na aba selecionada */}
      <View style={styles.content}>{renderContent()}</View>

      {/* Footer fixo com ícones */}
      <View style={styles.footer}>
        <AppFooter setSelectedTab={setSelectedTab} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f3f5',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  footer: {
    height: 52.5,
  },
});
