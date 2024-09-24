import { Text, StyleSheet, View, Image } from 'react-native';
import { useFonts, JetBrainsMono_400Regular } from '@expo-google-fonts/jetbrains-mono';

export default function AppHeader() {
  let [fontsLoaded] = useFonts({JetBrainsMono_400Regular});

  return (
     <View style={styles.container}>
      <Image source={require('../assets/sqrt.png')} style={styles.sqrt} />
      <Text style={styles.text}>r00ts</Text>
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    height: 70,
    width: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 36,
    fontFamily: 'JetBrainsMono_400Regular',
  },
  sqrt: {
    height: 30,
    width: 30,
    marginRight: -15,
  }
});
