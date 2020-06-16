import React, { Component } from 'react';
import 'react-native-gesture-handler';
import { ImageBackground, TouchableOpacity, StyleSheet, View, Text} from 'react-native';
export default class BwScreen extends Component {
  render() {
    return (
      /*Screen to provide five links to certain content. Links lead either to an internal webview of a page, an external browser or another screen within the app.
          Styles are added via stylesheets.*/
      <ImageBackground source={require('../assets/background.jpg')} style={{width: '100%', height: '100%'}}>
      <View style={{flex: 1, flexDirection: 'column',alignItems: 'center', justifyContent:'center'}}>

        <View style={styles.buttonBorder}>
          <TouchableOpacity onPress= {() => this.props.navigation.navigate('Link_Aktuelles_BwScreen')}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Aktuelles</Text> 
          </View>
          </TouchableOpacity> 
        </View>

        <View style={styles.buttonBorder}>
          <TouchableOpacity style={{}} onPress= {() => this.props.navigation.navigate('Link_Menschen_BwScreen')}>
            <View style={styles.button}>            
              <Text style={styles.buttonText}>Menschen</Text>            
            </View>
          </TouchableOpacity> 
        </View>

        <View style={styles.buttonBorder}>
          <TouchableOpacity  onPress= {() => this.props.navigation.navigate('Link_Auftrag_BwScreen')}>
            <View style={styles.button}>            
              <Text style={styles.buttonText}>Auftrag</Text>           
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonBorder}>
          <TouchableOpacity  onPress= {() => this.props.navigation.navigate('Organisation')}>
            <View style={styles.button}>            
              <Text style={styles.buttonText}>Organisation</Text>          
            </View>
          </TouchableOpacity> 
        </View>  

        <View style={styles.buttonBorder}>
          <TouchableOpacity onPress= {() => this.props.navigation.navigate('Reservist_BwScreen')}>
            <View style={styles.button}>          
              <Text style={styles.buttonText}>Reservist werden</Text>            
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