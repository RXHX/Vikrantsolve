import React from 'react';
import {View,Text} from 'react-native';
class HomeScreen extends React.Component {
    render()
    {
      return(
           <View style = {{flex : 1, justifyContent : "center", alignItems:"center", backgroundColor: '#fff'}}>
          <Text>This is my Home Screen </Text>
           </View>
      );
    }
  }
  export default HomeScreen;  