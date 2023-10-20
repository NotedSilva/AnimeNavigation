import { Text, View, ScrollView, Image, StyleSheet, SafeAreaView } from 'react-native';
import img1 from '../assets/haikyu1.jpg';
import img2 from '../assets/haikyu2.jpg';
import img3 from '../assets/haikyu3.jpg';
import img4 from '../assets/haikyu4.jpg';
import img5 from '../assets/haikyu5.jpg';

export default function Haikyuu() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.logoContainer}>
          <Text style={styles.title}>Haikyuu!!</Text>
          <Image style={styles.logoImage} source={img1} resizeMode="cover" />
          <Text style={styles.description}>
            Haikyuu!! segue os passos de Shoyo Hinata, um garoto que se apaixona pelo vôlei após assistir a uma partida do campeonato nacional pela televisão. Ele começa a praticar o esporte e constrói uma equipe do seu colégio no último ano do ensino fundamental, mas que é derrotada pelos favoritos comandados por Tobio Kageyama.
          </Text>
        </View>
        <View style={styles.characterSection}>
          <Text style={styles.characterTitle}>Personagens</Text>
          <View style={styles.characterContainer}>
            <View style={styles.characterItem}>
              <Image style={styles.characterImage} source={img2} resizeMode="cover" />
              <Text style={styles.characterName}>Hinata</Text>
            </View>
            <View style={styles.characterItem}>
              <Image style={styles.characterImage} source={img3} resizeMode="cover" />
              <Text style={styles.characterName}>Kageyama</Text>
            </View>
            <View style={styles.characterItem}>
              <Image style={styles.characterImage} source={img4} resizeMode="cover" />
              <Text style={styles.characterName}>Nishinoya</Text>
            </View>
            <View style={styles.characterItem}>
              <Image style={styles.characterImage} source={img5} resizeMode="cover" />
              <Text style={styles.characterName}>Oikawa</Text>
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
    backgroundColor: '#EEE8AA',
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
    backgroundColor: '#FFE4B5',
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
