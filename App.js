
import Gallery, { Favorites, Profile} from './components/Gallery';
import {View, StyleSheet, ScrollView , Text} from 'react-native'
import Home from './screens/home';
import Login from './screens/login';
export default function App() {
  return (
    <View style={styles.container}>
      <Login/> {'Coloquei os dois juntos mas fiz separado'}
      <Home/>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{ //serve para ocupar toda tela
    flex:1,
  },
})