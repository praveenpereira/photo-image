import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Home';
import Landscape from './Landscape';
import Abstract from './Abstract';
import Portrait from './Portrait';

const Stack = createStackNavigator();

export default function App(){
    const screenOptionStyle = {headerShown:false}
    return(
     <NavigationContainer>
    <Stack.Navigator >
        <Stack.Screen name="home" component={Home} options = {screenOptionStyle}/>
        <Stack.Screen name="landscape" component={Landscape}/>
        <Stack.Screen name="abstract" component={Abstract}/>
        <Stack.Screen name="portrait" component={Portrait}/>
    </Stack.Navigator>
     </NavigationContainer>  
    );
}

