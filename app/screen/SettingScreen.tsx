import React from 'react';
import {Button, Text, View} from 'react-native';

const SettingScreen: React.FC = props => {
  return (
    <View>
      <Text>SettingScreen</Text>
      <Button
        onPress={() => {
          props.navigation.navigate('Setting1');
        }}
        title="Setting1"
      />
      <Button
        onPress={() => {
          props.navigation.navigate('Setting2');
        }}
        title="Setting2"
      />
      <Button
        onPress={() => {
          props.navigation.navigate('Setting3');
        }}
        title="Setting3"
      />
    </View>
  );
};

export default SettingScreen;
