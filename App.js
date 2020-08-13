import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartScreen from './screens/StartScreen';
import CalScreen from './screens/CalScreen';
import BwScreen from './screens/BwScreen';
import BoerseScreen from './screens/BoerseScreen';
import OrganisationScreen from './screens/OrganisationScreen';
import ReservistScreen from './screens/ReservistScreen';
import LinkAuftragBwScreen from './screens/Link_Auftrag_BwScreen';
import LinkMenschenBwScreen from './screens/Link_Menschen_BwScreen';
import LinkAktuellesBwScreen from './screens/Link_Aktuelles_BwScreen';
import LinkReserveangelegenheitenOrgaScreen from './screens/Link_Reserveangelegenheiten_OrgaScreen';
import LinkKompetenzzentrumOrgaScreen from './screens/Link_Kompetenzzentrum_OrgaScreen';
import ImpressumScreen from './screens/ImpressumScreen';

import LinkStrategieOrgaScreen from './screens/Link_Strategie_OrgaScreen';
import VerbandScreen from './screens/VerbandScreen';
import LinkMagazinVerbandScreen from './screens/Link_Magazin_VerbandScreen';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={StartScreen} options={{title: 'Die App der Reserve', headerTitleAlign:'center'}}/>
        <Stack.Screen name="Cal" component={CalScreen} options={{title: 'Veranstaltungen', headerTitleAlign:'center'}}/>
        <Stack.Screen name="Bw" component={BwScreen} options={{title: 'Die Reserve',headerTitleAlign:'center'}}/>
        <Stack.Screen name="Boerse" component={BoerseScreen} options={{title: 'Stellenbörse',headerTitleAlign:'center'}}/>
        <Stack.Screen name="Verband" component={VerbandScreen} options={{title: 'Reservistenverband',headerTitleAlign:'center'}}/>        
        <Stack.Screen name="Organisation" component={OrganisationScreen} options={{title: 'Organisation',headerTitleAlign:'center'}}/>
        <Stack.Screen name="Reservist_BwScreen" component={ReservistScreen} options={{title: 'Reservist werden',headerTitleAlign:'center'}}/>
        <Stack.Screen name="Link_Auftrag_BwScreen" component={LinkAuftragBwScreen} options={{title: 'Auftrag',headerTitleAlign:'center'}}/>
        <Stack.Screen name="Link_Menschen_BwScreen" component={LinkMenschenBwScreen} options={{title: 'Menschen',headerTitleAlign:'center'}}/>
        <Stack.Screen name="Link_Aktuelles_BwScreen" component={LinkAktuellesBwScreen} options={{title: 'Aktuelles',headerTitleAlign:'center'}}/>
        <Stack.Screen name="Link_Reserveangelegenheiten_OrgaScreen" component={LinkReserveangelegenheitenOrgaScreen} options={{title: 'Reserveangelegenheiten',headerTitleAlign:'center'}}/>
        <Stack.Screen name="Link_Kompetenzzentrum_OrgaScreen" component={LinkKompetenzzentrumOrgaScreen} options={{title: 'Kompetenzzentrum Reserve',headerTitleAlign:'center'}}/>
        <Stack.Screen name="Link_Strategie_OrgaScreen" component={LinkStrategieOrgaScreen} options={{title: 'Strategie der Reserve',headerTitleAlign:'center'}}/>
        <Stack.Screen name="Link_Magazin_VerbandScreen" component={LinkMagazinVerbandScreen} options={{title: 'Magazin - die reserve',headerTitleAlign:'center'}}/>
        <Stack.Screen name="Impressum" component={ImpressumScreen} options={{title: 'Impressum',headerTitleAlign:'center'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;