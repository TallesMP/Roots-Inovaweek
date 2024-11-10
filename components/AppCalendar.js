import * as React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Calendar } from 'react-native-calendars';

export default function CalendarWithText() {
  // Definir uma data específica a ser destacada
  const markedDates = {
    '2024-09-25': { // Exemplo: destacar 25 de setembro de 2024
      selected: true,
      selectedColor: '#00a000', // Cor de fundo para a data destacada
    },
    '2024-09-11': {
      marked: true, dotColor: '#00a000'
    },
    '2024-09-13': {
      marked: true, dotColor: '#00a000'
    },
    '2024-09-27': {
      marked: true, dotColor: '#00a000'
    }, 

  };

  return (
    <View style={styles.container}>
      {/* Calendário com o mês de setembro de 2024 e data destacada */}
      <Calendar
        current={'2024-09-01'} // Inicia em setembro de 2024
        style={styles.calendar}
        markedDates={markedDates} // Marca a data especificada
        theme={{
          calendarBackground: '', // Fundo do calendário
          textSectionTitleColor: '#333', // Cor dos dias da semana
          selectedDayBackgroundColor: '#00a000', // Cor dos dias selecionados
          todayTextColor: '#333',
          arrowColor: '#00a000',
          dayTextColor: '#333',
          textDisabledColor: '#d9e1e8', // Cor dos dias desativados
          monthTextColor: '#333', // Cor do nome do mês
          textDayFontFamily: 'Roboto',
          textMonthFontFamily: 'Roboto',
          textDayHeaderFontFamily: 'Roboto',
          textDayFontWeight: '300',
          textMonthFontWeight: 'bold',
          textDayHeaderFontWeight: '500',
        }}
      />

      {/* Textos abaixo do calendário */}
      <ScrollView style={styles.textContainer}>
        <Text style={styles.text}>11- Produção de milho caiu 14% nos últimos 10 dias.</Text>
        <Text style={styles.text}>13- Inicio da época de laranja.</Text>
        <Text style={styles.text}>27- Previsão de chuvas intensas.</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  calendar: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    width: '90%',
    marginBottom: 20,
    backgroundColor: '#ececec', // Fundo mais claro do calendário
    shadowColor: '#000', // Sombra para profundidade
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, // Sombra para Android
    justifyContent: 'center',
    alignSelf: 'center'
  },
  textContainer: {
    width: '90%',
    paddingHorizontal: 10,
    backgroundColor: '#ececec', // Fundo branco para o container de texto
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, // Sombra no Android
  },
  text: {
    fontSize: 16,
    color: '#333', // Cor do texto
    marginVertical: 5,
    textAlign: 'center',
    lineHeight: 22, // Melhor espaçamento entre as linhas
    fontFamily: 'Roboto',
  },
});
