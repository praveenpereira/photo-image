import React, {useState} from 'react';

import { launchImageLibrary } from 'react-native-image-picker';

import {
SafeAreaView,
StyleSheet,
Text,
View,
Button,
Image,
} from 'react-native';


const Landscape = () => {
const [photoUriGallary, setphotoUriGallary] = useState('');


const openGallery = () => {
const options = {
storageOptions: {
path: 'images',
mediaType: 'photo',
},
includeBase64: true,
};

ImagePicker(options, response => {
console.log('Response = ', response);
if (response.didCancel) {
console.log('User cancelled image picker');
} else if (response.error) {
console.log('ImagePicker Error: ', response.error);
} else if (response.customButton) {
console.log('User tapped custom button: ', response.customButton);
} else {
// You can also display the image using data:
const source = {uri: 'data:image/jpeg;base64,' + response.assets[0].base64};
setphotoUriGallary(source);
}
});
};

return (
<SafeAreaView style={{flex: 1}}>
<View
style={{
justifyContent:'center',
alignItems: 'center',
alignSelf: 'center',
flex: 1,
}}>

<Button
title={'Open Gallary'}
onPress={() => {
openGallery();
}}
/>
<Image
source={photoUriGallary}
style={{
height: 100,
width: 100,
borderRadius: 100,
borderWidth: 2,
borderColor: 'black',
}}
/>
</View>
</SafeAreaView>
);
};

const styles = StyleSheet.create({
sectionContainer: {
marginTop: 32,
paddingHorizontal: 24,
},
sectionTitle: {
fontSize: 24,
fontWeight: '600',
},
sectionDescription: {
marginTop: 8,
fontSize: 18,
fontWeight: '400',
},
highlight: {
fontWeight: '700',
},
});

export default Landscape;

