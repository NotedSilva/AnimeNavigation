import { Text, View, ScrollView, Image, StyleSheet, SafeAreaView } from 'react-native';
import img6 from '../assets/Cowboy6.jpeg';
import img7 from '../assets/Cowboy7.jpg';
import img8 from '../assets/Cowboy8.png';
import img9 from '../assets/Cowboy9.png';
import img10 from '../assets/Cowboy10.jpg';

export default function Cowboy() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.logoContainer}>
          <Text style={styles.title}>Cowboy Bebop</Text>
          <Image style={styles.logoImage} source={img6} resizeMode="cover" />
          <Text style={styles.description}>
            Cowboy Bebop conta a história de caçadores de recompensa que integram a tripulação da nave Bebop. O ex-gângster Spike Spiegel trabalha junto ao amigo e ex-policial Jet Black para capturar criminosos em todos os cantos da galáxia. Além deles, a misteriosa e habilidosa Faye Valentine e a hacker Ed fazem parte da equipe.
          </Text>
        </View>
        <View style={styles.characterSection}>
          <Text style={styles.characterTitle}>Personagens</Text>
          <View style={styles.characterContainer}>
            <View style={styles.characterItem}>
              <Image style={styles.characterImage} source={img7} resizeMode="cover" />
              <Text style={styles.characterName}>Spike</Text>
            </View>
            <View style={styles.characterItem}>
              <Image style={styles.characterImage} source={img8} resizeMode="cover" />
              <Text style={styles.characterName}>Faye</Text>
            </View>
            <View style={styles.characterItem}>
              <Image style={styles.characterImage} source={img9} resizeMode="cover" />
              <Text style={styles.characterName}>Edward</Text>
            </View>
            <View style={styles.characterItem}>
              <Image style={styles.characterImage} source={img10} resizeMode="cover" />
              <Text style={styles.characterName}>Jet</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5F9EA0',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  logoImage: {
    width: '100%',
    height: 300,
    borderRadius: 10,
  },
  characterSection: {
    backgroundColor: '#57a6a8',
    padding: 20,
  },
  characterTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  characterContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  characterItem: {
    alignItems: 'center',
    width: '45%',
    marginVertical: 10,
    alignSelf: 'center',
  },
  characterImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  characterName: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
});
