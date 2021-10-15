import React from 'react';
import {ScrollView} from 'react-native';
import FlexComponent from './pages/FlexBox/FlexComponent';
// import SampleComponent from './src/pages/Sample/SampleComponent';
// import PositionComponent from './pages/Position/PositionComponent';

const App = () => {
  return (
    <ScrollView>
      {/* <SampleComponent /> */}
      <FlexComponent />
      {/* <PositionComponent /> */}
    </ScrollView>
  );
};

export default App;
