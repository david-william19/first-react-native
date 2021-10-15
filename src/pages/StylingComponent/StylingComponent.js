import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import dapundo from '../../assets/images/dapundo.jpg';

const StylingComponent = () => {
  return (
    <View style={{backgroundColor: 'gray', padding: 10, alignItems: 'center'}}>
      <View style={styles.card}>
        <Image source={dapundo} style={styles.imageCard} />
        <Text style={styles.name}>david William Da Costa</Text>
        <Text style={styles.date}>21 Tahun</Text>
        <Text style={styles.birth}>Makassar</Text>
        <View style={styles.button}>
          <Text style={styles.buttonText}>See More</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageCard: {
    width: 188,
    height: 107,
    borderRadius: 8,
  },
  card: {
    padding: 12,
    backgroundColor: '#e3e3e3',
    width: 212,
    borderRadius: 8,
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 16,
    color: 'black',
  },
  date: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#e39362',
    marginVertical: 6,
  },
  birth: {
    fontWeight: '300',
  },
  button: {
    backgroundColor: '#41bf82',
    padding: 6,
    borderRadius: 8,
    marginTop: 9,
  },
  buttonText: {
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
  },
});

export default StylingComponent;
