import React from 'react';
import {Button, Text, View} from 'react-native';

const ListScreen: React.FC = props => {
  return (
    <View>
      <Text>ListScreen</Text>
      <Button
        onPress={() => {
          props.navigation.navigate('Detail');
        }}
        title="Detail"
      />
    </View>
  );
};

export default ListScreen;
