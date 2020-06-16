import React from 'react';
import { Component } from 'react';
import { WebView} from 'react-native-webview';
export default class LinkReserveangelegenheitenOrgaScreen extends Component {
    render() {
        return (
        // Webview of a subpage of www.bundeswehr.de including the removing of unnecessary elements for that certain view
        <WebView
            source={{uri: 'https://www.bundeswehr.de/de/ueber-die-bundeswehr/die-reserve-der-bundeswehr/organisation-der-reserve-der-bundeswehr/beauftragte-fuer-reservistenangelegenheiten'}}
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
            
            function removeElementsByFourHeading(name, main){
                var strat1;
                for (i = 0; i<main.children.length; i++){
                    for (j = 0; j<main.children[i].children.length; j++){
                        for (k = 0; k<main.children[i].children[j].children.length; k++){
                            for (h = 0; h<main.children[i].children[j].children[k].children.length; h++){
                                for (l = 0; l<main.children[i].children[j].children[k].children[h].children.length; l++){
                                    for (m = 0; m<main.children[i].children[j].children[k].children[h].children[l].children.length; m++){
                                        if (main.children[i].children[j].children[k].children[h].children[l].children[m].tagName == "H4"){
                                            if (main.children[i].children[j].children[k].children[h].children[l].children[m].innerHTML.includes(name)){
                                                strat1 = i;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                if (strat1 > -1){
                    main.removeChild(main.children[strat1]);
                }
            }

            function removeElementsByTwoHeading(name, main){
                var help;
                for (i = 0; i<main.children.length; i++){
                    for (j = 0; j<main.children[i].children.length; j++){
                        for (k = 0; k<main.children[i].children[j].children.length; k++){
                            if (main.children[i].children[j].children[k].tagName == "H2"){
                                if (main.children[i].children[j].children[k].innerHTML.includes(name)){
                                    help = i;
                                }
                            }
                        }
                    }
                }
                if (help > -1){
                main.removeChild(main.children[help]);
                }
            }
            
            var main = document.getElementById("r-main");

            removeElementsByTwoHeading("Weitere Themen", main);
            removeElementsByTwoHeading("Weitere Informationen zur Reservistenarbeit der Bundeswehr", main);

            removeElementsByClass("c-share-page c-share-page--default is-static");
            removeElementsByClass("c-share-page c-share-page--default is-on-top");

            document.getElementById("r-mainmenu").remove();

            removeElementsByFourHeading("Reservist werden", main);

            removeElementsByClass("footer");
            `}
        />
        )
    }
}