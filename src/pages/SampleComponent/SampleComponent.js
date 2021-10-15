import React, {Component} from 'react';
import {View, Text, Image, TextInput} from 'react-native';

const SampleComponent = () => {
  return (
    <View>
      <View style={{width: 80, height: 80, backgroundColor: '#0abde3'}} />
      <Text>David William Da Costa</Text>
      <Text>Christian Johan Da Costa</Text>
      <Text>Imanuella Fensi Da Costa</Text>
      <Photo />
      <TextInput style={{borderWidth: 1}} />
      <BoxGreen />
      <Profile />
    </View>
  );
};

const Photo = () => {
  return (
    <Image
      source={{
        uri: 'https://placeimg.com/640/480/any',
      }}
      style={{width: 100, height: 100}}
    />
  );
};

class BoxGreen extends Component {
  render() {
    return (
      <View>
        <Text>This is class component</Text>
        <Text>and not a function component</Text>
      </View>
    );
  }
}

class Profile extends Component {
  render() {
    return (
      <View>
        <Image
          source={{uri: 'https://placeimg.com/640/480/animals'}}
          style={{width: 200, height: 200, borderRadius: 150}}
        />
        <Text>ini foto hewan</Text>
      </View>
    );
  }
}

export default SampleComponent;
