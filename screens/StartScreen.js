import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Linking, ImageBackground} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
export default class StartScreen extends Component {
  render() {
    return (
      /*Start screen of the App to provide the four main topics. Links lead either to an internal webview of a page, an external browser or another screen within the app.
          Styles are added via stylesheets.*/
      <ImageBackground source={require('../assets/background.jpg')} style={{width: '100%', height: '100%'}}>
      <View style={{ height: '100%',flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly' }}>

          <TouchableOpacity style={styles.button} onPress= {() => this.props.navigation.navigate('Bw')}>
            <Image style={styles.icon} source={require('../assets/iconbw.png')} />
            <Text style={styles.buttonText}>Informationen</Text>
          </TouchableOpacity>
        
          <TouchableOpacity style={styles.button} onPress= {() => { Linking.openURL('https://bundeswehr.community')}}>
            <Image style={styles.iconcom} source={require('../assets/iconcommunity.png')} />
            <Text style={styles.buttonText}>Bw Community</Text>
          </TouchableOpacity>
        
          <TouchableOpacity style={styles.button} onPress= {() => this.props.navigation.navigate('Boerse')}>
            <Image style={styles.icon} source={require('../assets/iconboerse.png')} />
            <Text style={styles.buttonText}>Stellenbörse</Text>
          </TouchableOpacity>          
        
          <TouchableOpacity style={styles.button} onPress= {() => this.props.navigation.navigate('Verband')}>
            <Image style={styles.icon} source={require('../assets/iconcal.png')} />
            <Text style={styles.buttonText}>Reservistenverband</Text>
          </TouchableOpacity>  

      </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 55,
    height: 55,
    resizeMode: 'contain',
    alignSelf: "center",
    margin: 5,
  },
  iconcom: {
    width: 110,
    height: 110,
    resizeMode: 'contain',
    alignSelf: "center",
  },
  buttonText: {
    fontSize: 27,
    color: 'black',
  },
  button: {
    height:65,
    backgroundColor:'rgba(255,255,255, 0.90)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%'
  }
});
