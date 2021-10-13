import React from 'react';
import {ScrollView} from 'react-native';
import FlexComponent from './FlexComponent';
import SampleComponent from './SampleComponent';
import PositionComponent from './PositionComponent'

const App = () => {
  return (
    <ScrollView>
      {/* <SampleComponent /> */}
      {/* <FlexComponent /> */}
      <PositionComponent />
    </ScrollView>
  );
};

export default App;
