import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text } from 'react-native';
// import HomeScreen from 'screens/HomeScreen';
// import DetailMenuScreen from 'screens/DetailMenuScreen';

function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Text>test</Text>
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
    //     <Stack.Screen name="DetailMenu" options={{ headerShown: false }} component={DetailMenuScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}

export default App;
