import {Button, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {prevProductClick, nextProductClick} from '../redux/actions';

const ProdId = () => {
  const id = useSelector((state: any) => state.id);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch(nextProductClick(1));
  };
  const decrement = () => {
    dispatch(prevProductClick(1));
  };
  return (
    <View style={styles.centerAlign}>
      <Text style={styles.headerText}>Product: {id}</Text>
      <View style={styles.buttonsWrap}>
        <Button title="Previous (-)" onPress={decrement} />
        <Button title="Next (+)" onPress={increment} />
      </View>
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
});

export default ProdId;