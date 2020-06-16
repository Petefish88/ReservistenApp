import React, { Component } from 'react';
import { WebView} from 'react-native-webview';
export default class CalScreen extends Component {
  render() {
    return (
      // Webview of the subpage "Veranstaltungen" of www.reservistenverband.de including the removing of unnecessary elements for that certain view
      <WebView
          source={{ uri: 'https://www.reservistenverband.de/veranstaltungen/?kategorie=&landesid=&search=&distance=' }} 
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
          removeElementsByClass("sidebar-widget sidebar-widget--veranstaltungen");
          removeElementsByClass("footer");
          removeElementsByClass("sticky-nav tab-nav text-uppercase");
          removeElementsByClass("widget widget--social");
          removeElementsByClass("btn btn-block btn--arrow text-uppercase btn--blue btn--big");
          var headers = document.getElementsByClassName("article__content")[0].getElementsByTagName("h3");
          for (i = 0; i < headers.length; i++) {
            if (headers[i].textContent == "Veranstaltungsanmeldung"){
              headers[i].parentNode.removeChild(headers[i]);
            };
          };
          `}
      />
    )
  }
}