import React, { useState } from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [age, setAge] = useState(18)

  const increment=()=>{
    setAge(prevState=> prevState+1)
  }

  const decrement=()=>{
    setAge(prevState=> prevState-1)
  }

  return (
    <SafeAreaView style={[backgroundStyle, styles.container]}>
      <View style={styles.centerAlign}>
        <Text style={styles.headerText}>Your Age: {age}</Text>
        <View style={styles.buttonsWrap}>
          <Button title="Age Down" onPress={decrement}/>
          <Button title="Age Up" onPress={increment}/>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30
  },
  centerAlign: {
    alignItems: 'center',
  },
  buttonsWrap: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    marginTop: 10
  },
  headerText: {
    fontWeight: '700',
    fontSize: 30
  }
});

export default App;
