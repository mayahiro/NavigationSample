import React from 'react';
import {Button, Text, View} from 'react-native';

const Setting2Screen: React.FC = props => {
  return (
    <View>
      <Text>Setting2Screen</Text>
      <Button
        onPress={() => {
          props.navigation.navigate('Modal');
        }}
        title="Modal"
      />
    </View>
  );
};

export default Setting2Screen;
