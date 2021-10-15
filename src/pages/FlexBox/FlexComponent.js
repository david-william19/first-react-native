import React, { Component, useState, useEffect } from 'react';
import { Text, View, Image } from 'react-native';
import dapundo from '../../assets/images/dapundo.jpg';

// export default class FlexComponent extends Component {

//   constructor(props) {
//     super(props);
//     console.log("hello from constructor");
//     this.state = {
//       subscriber: 500,
//     }
//   }

//   componentDidMount() {
//     console.log("component did mount");
//     setTimeout(() => {
//       this.setState({
//         subscriber: 200,
//       })
//     }, 1000)
//   }

//   componentDidUpdate() {
//     console.log("component did update")
//   }

//   render() {
//     console.log("hello from render");
//     return (
//       <View>
//         <View
//           style={{
//             backgroundColor: 'gray',
//             flexDirection: 'row',
//             alignItems: 'center',
//             justifyContent: 'space-between',
//             height: 300,
//           }}>
//           <View style={{ backgroundColor: 'orange', width: 50, height: 50 }} />
//           <View style={{ backgroundColor: 'green', width: 50, height: 50 }} />
//           <View style={{ backgroundColor: 'blue', width: 50, height: 50 }} />
//           <View style={{ backgroundColor: 'purple', width: 50, height: 50 }} />
//         </View>

//         <View
//           style={{
//             flexDirection: 'row',
//             justifyContent: 'space-evenly',
//             marginVertical: 15,
//           }}>
//           <Text>Beranda</Text>
//           <Text>Penelusuran</Text>
//           <Text>Favorit</Text>
//           <Text>Profil</Text>
//         </View>

//         <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//           <Image
//             source={dapundo}
//             style={{
//               width: 100,
//               height: 100,
//               borderRadius: 75,
//               borderColor: 'gray',
//               borderWidth: 1,
//               marginRight: 20,
//             }}
//           />
//           <View>
//             <Text
//               style={{
//                 fontWeight: 'bold',
//                 fontSize: 18,
//                 color: 'black',
//               }}>
//               David William Da Costa
//             </Text>
//             <Text style={{ color: 'blue', marginVertical: 8 }}>S1 Sistem Informasi</Text>
//             <Text style={{ color: 'red' }}>{this.state.subscriber} ribu subscriber</Text>
//           </View>
//         </View>
//       </View>
//     );
//   }
// }

const FlexComponent = () => {
  const [subscriber, setSubscriber] = useState(200);

  useEffect(() => {
    console.log('did mount');
    setTimeout(() => {
      setSubscriber(400);
    }, 3000);
    return () => {
      console.log('did update');
    }
  }, [subscriber]);

  // useEffect(() => {
  //   console.log( "did update");
  //   setTimeout(() => {
  //     setSubscriber( 400);
  //   }, 3000)
  // }, [subscriber]);
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
        <View style={{ backgroundColor: 'orange', width: 50, height: 50 }} />
        <View style={{ backgroundColor: 'green', width: 50, height: 50 }} />
        <View style={{ backgroundColor: 'blue', width: 50, height: 50 }} />
        <View style={{ backgroundColor: 'purple', width: 50, height: 50 }} />
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

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
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
            }}>
            David William Da Costa
          </Text>
          <Text style={{ color: 'blue', marginVertical: 8 }}>S1 Sistem Informasi</Text>
          <Text style={{ color: 'red' }}>{ subscriber } ribu subscriber</Text>
        </View>
      </View>
    </View>
  );
}

export default FlexComponent;
