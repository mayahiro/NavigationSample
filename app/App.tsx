import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TopNavigator from './navigator/TopNavigator';
import ModalScreen from './screen/ModalScreen';

const App: React.FC = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Top"
          component={TopNavigator}
          options={{headerShown: false}}
        />
        <Stack.Group screenOptions={{presentation: 'modal'}}>
          <Stack.Screen name="Modal" component={ModalScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
