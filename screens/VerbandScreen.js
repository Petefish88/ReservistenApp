import React, { Component } from 'react';
import 'react-native-gesture-handler';
import { ImageBackground, TouchableOpacity, StyleSheet, View, Text, Linking} from 'react-native';
export default class VerbandScreen extends Component {
  render() {
    return (
        /*Screen to provide three links to certain content.
          Styles are added via stylesheets.*/
      <ImageBackground source={require('../assets/background.jpg')} style={{width: '100%', height: '100%'}}>
      <View style={{flex: 1, flexDirection: 'column',alignItems: 'center', justifyContent:'center'}}>

        <View style={styles.buttonBorder}>
          <TouchableOpacity onPress= {() => this.props.navigation.navigate('Link_Magazin_VerbandScreen')}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Das Magazin <Text style={{fontStyle: 'italic', fontSize:17}}>die reserve</Text></Text>
            </View>
          </TouchableOpacity> 
        </View>

        <View style={styles.buttonBorder}>
          <TouchableOpacity onPress= {() => this.props.navigation.navigate('Cal')}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Veranstaltungskalender</Text>  
            </View>
          </TouchableOpacity> 
        </View>

        <View style={styles.buttonBorder}>
          <TouchableOpacity onPress= {() => { Linking.openURL('https://www.reservistenverband.de')}}>
           <View style={styles.button}>
             <Text style={styles.buttonText}>Reservistenverband.de</Text>
           </View>
          </TouchableOpacity> 
        </View>

      </View>
      </ImageBackground>
      
    );
  }
}

const styles = StyleSheet.create({
  buttonBorder: {
    padding: 10,
    width:'100%',
  },
  buttonText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 22,
  },
  button: {
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255, 0.90)',
    alignItems: 'center',
    padding: 20,
  },
});
