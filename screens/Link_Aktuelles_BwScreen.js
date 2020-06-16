import React from 'react';
import { Component } from 'react';
import { WebView} from 'react-native-webview';
export default class LinkAktuellesBwScreen extends Component {
    render() {
        return (
        // Webview of a subpage of www.bundeswehr-karriere.de including the removing of unnecessary elements for that certain view
        <WebView
            source={{uri: 'https://www.bundeswehr.de/de/ueber-die-bundeswehr/die-reserve-der-bundeswehr/aktuelles-aus-der-reserve-der-bundeswehr'}}
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
            removeElementsByClass("footer");
            var main = document.getElementById("r-main");
            main.removeChild(main.lastChild);
            main.removeChild(main.lastChild);
            main.removeChild(main.lastChild);

            removeElementsByClass("c-share-page c-share-page--default is-static");
            removeElementsByClass("c-share-page c-share-page--default is-on-top");

            document.getElementById("r-mainmenu").remove();
            `}
        />
        )
    }
}