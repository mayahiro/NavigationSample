import React from 'react';
import {Button, Text, View} from 'react-native';

const HomeScreen: React.FC = props => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        onPress={() => {
          props.navigation.navigate('Modal');
        }}
        title="Modal"
      />
    </View>
  );
};

export default HomeScreen;
