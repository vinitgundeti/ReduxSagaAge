import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  prevProductClick,
  nextProductClick,
  searchProduct,
  //  searchProduct
} from '../redux/actions';

import {useState} from 'react';

const ProdId = () => {
  const id = useSelector((state: any) => state.id);
  const products = useSelector((state: any) => state.products);
  const [textValue, setTextValue] = useState('');
  const dispatch = useDispatch();
  const increment = () => {
    dispatch(nextProductClick(1));
  };
  const decrement = () => {
    dispatch(prevProductClick(1));
  };

  const onInputChange = (e: string) => {
    setTextValue(e)
    dispatch(searchProduct(e))
  };

  return (
    <View style={styles.centerAlign}>
      <Text style={styles.headerText}>Product: {id}</Text>
      <View style={styles.buttonsWrap}>
        <Button title="Previous (-)" onPress={decrement} />
        <Button title="Next (+)" onPress={increment} />
      </View>

      <TextInput
        value={textValue}
        style={styles.textInput}
        onChangeText={onInputChange}
      />

      {products?.map((item: any, index: number) => (
        <Text key={index}>{item.title}</Text>
      ))}
    </View>
  );
};

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
  textInput: {
    borderWidth: 2,
    width: '100%',
    height: 40,
  },
});

export default ProdId;
