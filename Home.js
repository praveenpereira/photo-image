import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';

const Home = ({navigation})=>{
    return(
        <View>
            <View>
            <TouchableOpacity style={{alignItems:'center',
            marginTop:90,
             borderRadius:10,marginVertical:20,
             justifyContent:'center',width:'100%',backgroundColor:'green',
             padding:20}}  onPress={()=>{navigation.navigate('landscape')}}>
                <Text style={{fontSize:20}}>Landscape</Text>
            </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={{alignItems:'center',
                 borderRadius:10,marginVertical:20,justifyContent:'center',
                 width:'100%',backgroundColor:'green',padding:20}} 
                  onPress={()=>{navigation.navigate('abstract')}}>
                    <Text style={{fontSize:20}} >Abstract</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={{alignItems:'center',
                 borderRadius:10,marginVertical:20,justifyContent:'center',
                 width:'100%',backgroundColor:'green',padding:20}}
                   onPress={()=>{navigation.navigate('portrait')}}>
                    <Text style={{fontSize:20}}>Portrait</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Home;

