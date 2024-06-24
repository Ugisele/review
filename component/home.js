import React from 'react';
import {View,Text, Image, ImageBackground, Dimensions, Button, TouchableOpacity} from "react-native";

export default Home => {
    const width = Dimensions.get('screen').width
    const height = Dimensions.get('screen').height;
    return (
        <View style={{}}>
            
          <ImageBackground source={require('../assets/bg.png')} style={{width: width,height:height}}>
          <View style={{ flex:1,padding:15,backgroundColor:'rgba(0,0,0,0.5)',justifyContent:'flex-end',marginBottom:50,}}>
            <Text style={{color:'white', fontSize: 20,fontStyle:'italic',}}>
                You're welcome in our fashion store!
            </Text>
            <Text style={{color:'white', fontSize: 14,fontStyle:'italic',marginTop: 20,marginBottom: 10}}>I think you turned the right way</Text>
            <TouchableOpacity onPress={{}}>
            <Button title="Let's go"/>
            </TouchableOpacity>
           
          </View>

          </ImageBackground>
        </View>
    )
}