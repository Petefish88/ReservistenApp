import React, { Component } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ImageBackground, TouchableOpacity, Button, View, Text} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


export default class BwScreen extends Component {
  render() {
    return (
      <ScrollView>
      <ImageBackground source={require('../assets/background.jpg')} style={{width: '100%', height: '100%'}}>
      <View style={{padding: 20,alignItems: 'center', width: '100%', justifyContent:'center'}}>

        
        <View style={{padding: 20, width:'70%',}}>
        <TouchableOpacity  onPress= {() => this.props.navigation.navigate('Link_Auftrag_BwScreen')}>
          <View style={{justifyContent:'center', backgroundColor:'rgba(255,255,255, 0.65)',alignItems: 'center', padding: 10}}>
            
            <Text style={{textAlign:'center',color:'white', fontSize:15, fontWeight:'bold'}}>Der Auftrag</Text>
           
          </View>
          </TouchableOpacity>
        </View>

        <View style={{padding: 20, width: '70%'}}>
        <TouchableOpacity  onPress= {() => this.props.navigation.navigate('Organisation_BwScreen')}>
          <View style={{justifyContent:'center', backgroundColor:'rgba(255,255,255, 0.65)',alignItems: 'center', padding: 10}}>
            
            <Text style={{textAlign:'center',color:'white', fontSize:15, fontWeight:'bold'}}>Die Organisation</Text>
          
          </View>
          </TouchableOpacity> 
        </View>  

        <View style={{padding: 20, width: '70%' }}>
        <TouchableOpacity style={{}} onPress= {() => this.props.navigation.navigate('Link_Menschen_BwScreen')}>
          <View style={{justifyContent:'center',backgroundColor:'rgba(255,255,255, 0.65)',alignItems: 'center', padding: 10}}>
            
            <Text style={{textAlign:'center',color:'white', fontSize:15, fontWeight:'bold'}}>Die Menschen</Text>
            
          </View>
          </TouchableOpacity> 
        </View>

        <View style={{padding: 20, width: '70%'}}>
        <TouchableOpacity onPress= {() => this.props.navigation.navigate('Reservist_BwScreen')}>
          <View style={{justifyContent:'center',backgroundColor:'rgba(255,255,255, 0.65)',alignItems: 'center', padding: 10}}>
          
            <Text style={{textAlign:'center',color:'white', fontSize:15, fontWeight:'bold'}}>Reservist werden!</Text>
            
          </View>
          </TouchableOpacity>
        </View>

        <View style={{padding: 20, width: '70%'}}>
        <TouchableOpacity onPress= {() => this.props.navigation.navigate('Link_Aktuelles_BwScreen')}>
          <View style={{justifyContent:'center', backgroundColor:'rgba(255,255,255, 0.65)',alignItems: 'center', padding: 10}}>
            
             <Text style={{textAlign:'center',color:'white', fontSize:15, fontWeight:'bold'}}>Aktuelles</Text>
             
         </View>
         </TouchableOpacity> 
        </View>

        <View style={{height:250, justifyContent:'center', alignItems:'center'}}>
        
        </View>

      </View>
      </ImageBackground>
      </ScrollView>
    );
  }
}
