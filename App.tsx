import React from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';
import {Provider} from 'react-redux';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import store from './src/redux/store';
import ProdId from './src/components/prodId';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Provider store={store}>
      <SafeAreaView style={[backgroundStyle, styles.container]}>
        <ProdId />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
  },
  centerAlign: {
    alignItems: 'center',
  },
  buttonsWrap: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    marginTop: 10,
  },
  headerText: {
    fontWeight: '700',
    fontSize: 30,
  },
});

export default App;
