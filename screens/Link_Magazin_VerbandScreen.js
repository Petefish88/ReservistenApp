import React from 'react';
import { Component } from 'react';
import { WebView} from 'react-native-webview';
export default class LinkMagazinVerbandScreen extends Component {
    render() {
        return (
        // Webview of the subpage "magazin-die-reserve" of www.reservistenverband.de including the removing of unnecessary elements for that certain view
        <WebView
            source={{uri: 'https://www.reservistenverband.de/magazin-die-reserve/'}}
            ref={c => this._webview = c}
            renderLoading={this.renderLoading}
             startInLoadingState
            javaScriptEnabled={true}
            // Function to first list and than remove the elements
             injectedJavaScript={`
             function removeElementsByClass(className){
                var elements = document.getElementsByClassName(className);
                while(elements.length > 0){
                    elements[0].parentNode.removeChild(elements[0]);
                }
             }
             removeElementsByClass("mobile-nav-toggle visible-xs-block visible-sm-block");
             removeElementsByClass("footer");
             removeElementsByClass("widget widget--social");
             removeElementsByClass("sticky-nav tab-nav text-uppercase");
             document.getElementById("pl-36").remove();
             `}
        />
        )
    }
}