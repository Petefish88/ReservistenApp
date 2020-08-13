import React, { Component } from 'react';
import { ImageBackground, TouchableOpacity,StyleSheet, View, Text,Image,Linking, Dimensions } from 'react-native';
export default class OrganisationScreen extends Component {
  
  render() {
    
    return (
        /*Screen to provide four links to subpages of the site www.bundeswehr.de. Links lead either to an internal webview of a page or an external browser.
          Styles are added via stylesheets.*/
          
        
        
        <ImageBackground source={require('../assets/background.jpg')} style={{width: "100%", height: "100%"}} imageStyle={{resizeMode:"stretch"}}>
            <View>
                <Text style={{paddingTop:10,color:'white', fontWeight:'bold', fontSize:12,textAlign:'center'}}>Streitkräfteamt</Text>
                <Text style={{paddingTop:10,color:'white', fontWeight:'bold', fontSize:12,textAlign:'center'}}>KompZResAngelBw</Text>
                <Text style={{paddingTop:10,color:'white', fontWeight:'bold', fontSize:12,textAlign:'center'}}>Dez ResArb</Text>
                <Text style={{paddingTop:10,color:'white', fontWeight:'bold', fontSize:12,textAlign:'center'}}>Pascalstraße 10s, 53125 Bonn</Text>
                <Text style={{paddingTop:10,color:'white', fontWeight:'bold', fontSize:12,textAlign:'center'}}>E-Mail an SKAKompZResAngelBwDezResArb@bundeswehr.org</Text>
            </View>
        </ImageBackground>
      
     
        );
      }
    }