import React, { Component } from 'react';
import { ImageBackground, TouchableOpacity,StyleSheet, View, Text,Image,Linking, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
export default class OrganisationScreen extends Component {
  
  render() {
    
    return (
        /*Screen to provide four links to subpages of the site www.bundeswehr.de. Links lead either to an internal webview of a page or an external browser.
          Styles are added via stylesheets.*/
          
        
        
        <ImageBackground source={require('../assets/background.jpg')} style={{width: "100%", height: "100%"}} imageStyle={{resizeMode:"stretch"}}>
        <ScrollView>
          <View style={{ padding: 20, flex: 1, flexDirection: 'column',alignItems: 'center', justifyContent:'center'}}>

            <View style={{alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{paddingTop:10,color:'white', fontWeight:'bold', fontSize:22,textAlign:'center'}}>Die Organisation der Reserve</Text>
              <Text style={styles.textBody}>Die Konzeption der Bundeswehr und die Strategie der Reserve bilden die Grundlage für Planung und Organisation der Reserve. Die Strategie der Reserve bildet den Rahmen für den Dialog zwischen</Text>
              <View>
                <Text style={styles.textBody}>der Bundeswehr,</Text>
                <Text style={styles.textBody}>den Reservistinnen und Reservisten,</Text>
                <Text style={styles.textBody}>den Arbeitgeberinnen und Arbeitgebern sowie</Text>
                <Text style={styles.textBody}>den in der Reservistenarbeit tätigen Verbänden und Vereinigungen.</Text>
              </View>              
              <Text style={{paddingTop:10,color:'white', fontWeight:'bold', fontSize:17,textAlign:'center'}}>Weitere Informationen finden Sie in den unten aufgeführten Links:</Text>
            </View>

            <View style={{paddingTop:20, alignItems:'center'}}>

              <View style={{borderColor:'white', borderWidth:1, justifyContent:'space-evenly', flexDirection: 'row',width:'85%'}}>
                <TouchableOpacity style={{flexDirection:'row'}} onPress= {() => this.props.navigation.navigate('Link_Reserveangelegenheiten_OrgaScreen')}>
                  <View style={{justifyContent:'center', width:'40%'}}>           
                    <Image style={{}} source={require('../assets/very_small_laubenthal.png')} />           
                  </View>
                  <View style={{justifyContent:'center', width:'60%'}}>
                    <Text style={{color:'white'}}>Beauftragter{"\n"}für Reservisten- {"\n"}angelegenheiten</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={{paddingTop:10}}>
                <View style={{borderColor:'white', borderWidth:1,justifyContent:'space-evenly', flexDirection: 'row', width:'85%'}}>
                  <TouchableOpacity style={{flexDirection:'row'}} onPress= {() => this.props.navigation.navigate('Link_Kompetenzzentrum_OrgaScreen')}>
                    <View style={{justifyContent:'center', width:'40%'}}>           
                      <Image style={{}} source={require('../assets/very_small_strategie.png')} />            
                    </View>
                    <View style={{justifyContent:'center', width:'60%'}}>
                      <Text style={{color:'white'}}>Kompetenzzentrum {"\n"}für Reservisten-{"\n"}angelegenheiten</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={{paddingTop:10}}>
                <View style={{borderColor:'white', borderWidth:1,justifyContent:'space-evenly', flexDirection: 'row', width:'85%'}}>
                  <TouchableOpacity style={{flexDirection:'row'}} onPress= {() => this.props.navigation.navigate('Link_Strategie_OrgaScreen')}>
                    <View style={{justifyContent:'center', width:'40%'}}>           
                      <Image style={{}} source={require('../assets/very_small_panzer.png')} />            
                    </View>
                    <View style={{justifyContent:'center', width:'60%'}}>
                      <Text style={{color:'white'}}>Strategie der Reserve</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>

              
              <View style={{paddingTop:10}}>
                <View style={{borderColor:'white', borderWidth:1,justifyContent:'space-evenly', flexDirection: 'row', width:'85%'}}>
                  <TouchableOpacity style={{flexDirection:'row'}} onPress= {() => { Linking.openURL('https://www.bundeswehr.de/de/ueber-die-bundeswehr/die-reserve-der-bundeswehr/organisation-der-reserve-der-bundeswehr/grundlagen-und-gesetze-fuer-die-reserve-der-bundeswehr')}}>
                    <View style={{justifyContent:'center', width:'40%'}}>          
                      <Image style={{}} source={require('../assets/very_small_gesetze.png')} />            
                    </View>
                    <View style={{justifyContent:'center', width:'60%'}}>
                      <Text style={{color:'white'}}>Grundlagen und Gesetze</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
              

            </View>
      
          </View>
          </ScrollView>
        </ImageBackground>
        
     
    );
  }
}
const styles = StyleSheet.create({
  textBody: {
    paddingTop:10,
    paddingLeft:20,
    paddingRight:5,
    color:'white',
    fontSize:17,
    textAlign:'left',
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