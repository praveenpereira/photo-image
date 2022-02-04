import React,{Component} from 'react';
import {View,Text,StyleSheet,Button,Image} from 'react-native';
import { ImagePicker } from 'react-native-image-picker';


export default class Portrait extends Component{
    state={
        photo:null,
    }
    
    handleUploadPhoto =()=>{
         const options = {
             noData : true,
         };
        ImagePicker.launchImageLibrary(options, response =>{
            console.log("response",response);
            if(response.uri){
                this.setState({photo:response});
            }
        });
    }
    render(){
    const {photo} = this.state
    return(
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            {photo &&(
                <Image
                source={{ uri:photo.uri }}
                style={{width:100,height:100}}
                />
            )}
            <Button 
            title="Upload photo"
            onPress={()=>{this.handleUploadPhoto}}
            />
        </View>
    )
}
}
