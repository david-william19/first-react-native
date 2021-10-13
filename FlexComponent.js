import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import dapundo from './dapundo.jpg';

export default class FlexComponent extends Component {
  render() {
    return (
      <View>
        <View
          style={{
            backgroundColor: 'gray',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 300,
          }}>
          <View style={{backgroundColor: 'orange', width: 50, height: 50}} />
          <View style={{backgroundColor: 'green', width: 50, height: 50}} />
          <View style={{backgroundColor: 'blue', width: 50, height: 50}} />
          <View style={{backgroundColor: 'purple', width: 50, height: 50}} />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginVertical: 15,
          }}>
          <Text>Beranda</Text>
          <Text>Penelusuran</Text>
          <Text>Favorit</Text>
          <Text>Profil</Text>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={dapundo}
            style={{
              width: 100,
              height: 100,
              borderRadius: 75,
              borderColor: 'gray',
              borderWidth: 1,
              marginRight: 20,
            }}
          />
          <View>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 18,
                color: 'black',
                marginBottom: 8,
              }}>
              David William Da Costa
            </Text>
            <Text style={{color: 'blue'}}>S1 Sistem Informasi</Text>
          </View>
        </View>
      </View>
    );
  }
}
