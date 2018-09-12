(function(window){
  var config = {};

  config.event = 'Florence';
  // config.additionalText = '**Need help? [Find shelters here.](irmashelters.org/map-link-here-when-ready)**';

  config.dataEntryPortal = '//hurricane-florence-api';
  config.apiBaseURL = '//hurricane-florence-api.com/api/v1/';
  config.googleMapsAPIKey = 'AIzaSyAP7W-h_jBmtgRcROX1y-ZDNpTorc-PwlU';

  config.mapDefaults = {
    center: {
      lat: 34.2104,
      lng: -77.8868
    },
    zoom: 12
  };

  // config.analyticsId = 'UA-105623670-2';

  config.nullPhrases = [];

  function getConfig(){
    return config;
  }

  window.getConfig = getConfig;

}(window))