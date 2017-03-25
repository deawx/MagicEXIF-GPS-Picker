function initializeMap(){var a=transformToMap(mapLatLng);map=new google.maps.Map(document.getElementById("mapUICanvas"),{zoom:mapZoom,center:a,disableDefaultUI:!0,clickableIcons:!1}),mapIsLoaded=!0,mapMarker=new google.maps.Marker({position:a,map:map,icon:"res/img/pin.png",draggable:!0});var n=$("#mapUICtl");map.controls[google.maps.ControlPosition.TOP_LEFT].push(n[0]),n.show(),mapLoaderFunc.initializeTools(),map.addListener("zoom_changed",function(){mapZoom=map.getZoom()}),mapMarker.addListener("mousedown",function(a){mapMarker.setOpacity(.6)}),mapMarker.addListener("mouseup",function(a){mapMarker.setOpacity(1)}),mapMarker.addListener("dragend",function(a){var n=a.latLng.lat(),o=a.latLng.lng();if(MapCoordSrvc.insideChina(n,o))if(MapCoordSrvc.insideSAR(n,o)||MapCoordSrvc.insideTaiwan(n,o))mapLatLng.lat=n,mapLatLng.lng=o;else{var r=MapCoordSrvc.gcj2wgs(n,o);mapLatLng.lat=r.lat,mapLatLng.lng=r.lng}else mapLatLng.lat=n,mapLatLng.lng=o;mapLoaderFunc.enableEdit()})}function moveMarkerTo(a){var n=transformToMap(a);mapMarker.setPosition(n),map.panTo(n)}function transformToMap(a){if(MapCoordSrvc.insideChina(a.lat,a.lng)){if(MapCoordSrvc.insideSAR(a.lat,a.lng)||MapCoordSrvc.insideTaiwan(a.lat,a.lng))return a;var n=MapCoordSrvc.wgs2gcj(a.lat,a.lng);return{lat:n.lat,lng:n.lng}}return a}var map,mapMarker;