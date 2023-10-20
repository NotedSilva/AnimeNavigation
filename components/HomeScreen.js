import { View, Text, StyleSheet, ImageBackground } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/fundo.png')}
        style={styles.backgroundImage}
        overlayColor={'rgba(0, 0, 0, 0.5'}
      >
        <Text style={styles.title}>Bem-vindo ao Blog de Animes</Text>
        <Text style={styles.subtitle}>Descubra e explore o mundo dos animes</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#FFF',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    color: '#FFF',
    textAlign: 'center',
    fontWeight: '400',
  },
});

