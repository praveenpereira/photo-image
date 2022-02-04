import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Home';
import Photo1 from './Photo1';
import Photo2 from './Photo2';
import Photo3 from './Photo3';

const Stack = createStackNavigator();

export default function App(){
    const screenOptionStyle = {headerShown:false}
    return(
     <NavigationContainer>
    <Stack.Navigator >
        <Stack.Screen name="home" component={Home} options = {screenOptionStyle}/>
        <Stack.Screen name="photo1" component={Photo1}/>
        <Stack.Screen name="photo2" component={Photo2}/>
        <Stack.Screen name="photo3" component={Photo3}/>
    </Stack.Navigator>
     </NavigationContainer>  
    );
}

