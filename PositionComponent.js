import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import Cart from './cart.png';

const PositionComponent = () => {
  return (
    <View style={styles.container}>
      <Text>Keranjang</Text>
      <View style={styles.wrapper}>
        <Image source={Cart} style={styles.cart} />
        <Text style={styles.notification}>20</Text>
      </View>
      <Text style={styles.text}>Keranjang Belanja</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  wrapper: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginTop: 15,
  },
  notification: {
    fontWeight: '400',
    color: '#fff',
    position: 'absolute',
    top: 0,
    right: 0,
    fontSize: 12,
    padding: 4,
    backgroundColor: '#2edb87',
    width: 24,
    height: 24,
    borderRadius: 25,
    textAlign: 'center',
  },
  cart: {
    width: 50,
    height: 50,
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default PositionComponent;
