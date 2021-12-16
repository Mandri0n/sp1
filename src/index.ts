/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />

import {bootstrapExtra} from "@workadventure/scripting-api-extra";

// The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure.
bootstrapExtra().catch(e => console.error(e));

let vip1CodePopup : any;
const vip1CodePopupLayer = 'lounge_bar_guy_action';


// Open the popup when we enter a given zone
WA.room.onEnterLayer(vip1CodePopupLayer).subscribe(() => {
    vip1CodePopup =WA.ui.openPopup("vip_code_popup", 'VIPs zählen von 1 bis 5', [{
        label: "Ok",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }]);
});

// Close the popup when we leave the zone.
WA.room.onLeaveLayer(vip1CodePopupLayer).subscribe(() => {
    vip1CodePopup?.close();
})


let welcomePopup : any;
const welcomePopupLayer = 'lounge_bar_welcome_action';


// Open the popup when we enter a given zone
WA.room.onEnterLayer(welcomePopupLayer).subscribe(() => {
    welcomePopup =WA.ui.openPopup("welcome_popup", 'Willkommen in der Lounge. Wir haben Erohlung, VIP-Räume und Toiletten. Ich wünsche eine angenehme Zeit.', [{
        label: "Ok",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }]);
});

// Close the popup when we leave the zone.
WA.room.onLeaveLayer(welcomePopupLayer).subscribe(() => {
    welcomePopup?.close();
})