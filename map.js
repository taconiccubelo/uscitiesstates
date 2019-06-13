//style function
function cityStyle() {
            return {
                fillColor: 'red',
                color: 'black',
                weight: 1,
                opacity: 1,
                dashAarray: '3',
                fillOpacity: 0.5
            };

}

function statesStyle() {
            return {
                fillColor: 'white',
                color: 'black',
                weight: 1,
                opacity: 1,
                dashAarray: '3',
                fillOpacity: 0.7
            };

}



//highlight on mouseover
function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 4,
        color: 'black',
        dashAarray: '',
        fillOpacity: 0.7
    });

    //old browser management
    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }

//    mapLegend = document.getElementById('map-legend');
//
//    if (layer.feature.properties.PARTY === 'Democrat') {
//        mapLegend.innerHTML = layer.feature.properties.NAME;
//        mapLegend.style = 'color: blue';
//    } else if (layer.feature.properties.PARTY === 'Republican') {
//        mapLegend.innerHTML = layer.feature.properties.NAME;
//        mapLegend.style = 'color: red';
//    } else {
//        map.Legend.innerHTML = null;
//    }
}

//reset style after hover
function resetHighlight(e) {
    states.resetStyle(e.target);
    nyc.resetStyle(e.target);
    lA.resetStyle(e.target);
    chicago.resetStyle(e.target);
    boston.resetStyle(e.target);
    philly.resetStyle(e.target);
    detroit.resetStyle(e.target);
    orlando.resetStyle(e.target);
    pdx.resetStyle(e.target);
    //reset the div
    document.getElementById("map-legend").innerHTML = null;
}

//zoom after click
function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
}

//control mousing functions
function onEachFeature(feature, layer) {
    console.log(feature)
    
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
    });

    //popup
    if (feature.properties) {
        layer.bindPopup(`
            <h2>${feature.properties.STATE_NAME}</h2>
            <h3>Population: ${feature.properties.POPULATION}</h3>
        `);
            
    }
}




// tilelayer
var Stamen_TonerLite = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
});


var states = L.esri.featureLayer({
    url: 'https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/USA_States_Generalized/FeatureServer/0',
    simplifyFactor: 0.5,
    precision: 5,
    style: statesStyle, //added
    onEachFeature: onEachFeature,
});

// NYC
var nyc = L.esri.featureLayer({
    url: 'https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/USA_States_Generalized/FeatureServer/0',
    simplifyFactor: 0.5,
    precision: 5,
    style: cityStyle, //added
    onEachFeature: onEachFeature,
    where: "POPULATION < 22000000"
});

var lA = L.esri.featureLayer({
    url: 'https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/USA_States_Generalized/FeatureServer/0',
    simplifyFactor: 0.5,
    precision: 5,
    style: cityStyle, //added
    onEachFeature: onEachFeature,
    where: "POPULATION < 18000000"
});

var chicago = L.esri.featureLayer({
    url: 'https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/USA_States_Generalized/FeatureServer/0',
    simplifyFactor: 0.5,
    precision: 5,
    style: cityStyle, //added
    onEachFeature: onEachFeature,
    where: "POPULATION < 10000000"
});

var boston = L.esri.featureLayer({
    url: 'https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/USA_States_Generalized/FeatureServer/0',
    simplifyFactor: 0.5,
    precision: 5,
    style: cityStyle, //added
    onEachFeature: onEachFeature,
    where: "POPULATION < 8000000"
});

var philly = L.esri.featureLayer({
    url: 'https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/USA_States_Generalized/FeatureServer/0',
    simplifyFactor: 0.5,
    precision: 5,
    style: cityStyle, //added
    onEachFeature: onEachFeature,
    where: "POPULATION < 7000000"
});

var detroit = L.esri.featureLayer({
    url: 'https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/USA_States_Generalized/FeatureServer/0',
    simplifyFactor: 0.5,
    precision: 5,
    style: cityStyle, //added
    onEachFeature: onEachFeature,
    where: "POPULATION < 5000000"
});

var orlando = L.esri.featureLayer({
    url: 'https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/USA_States_Generalized/FeatureServer/0',
    simplifyFactor: 0.5,
    precision: 5,
    style: cityStyle, //added
    onEachFeature: onEachFeature,
    where: "POPULATION < 4000000"
});

var pdx = L.esri.featureLayer({
    url: 'https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/USA_States_Generalized/FeatureServer/0',
    simplifyFactor: 0.5,
    precision: 5,
    style: cityStyle, //added
    onEachFeature: onEachFeature,
    where: "POPULATION < 3000000"
});



// map object
var map = L.map('map', {
    center: [39, -97.5],
    zoom: 4,
    maxZoom: 8,
    layers: [Stamen_TonerLite, states]
});

var overlays = {
    'New York City ~ 22,000,000': nyc,
    'Los Angales ~ 18,000,000': lA,
    'Chicago, Washington DC or San Francisco ~ 10,000,000': chicago,
    'Boston or Dallas ~ 8,000,000': boston,
    'Philadelphia, Houston, Miami or Atlanta ~ 7,000,000': philly,
    'Detroit, Phoenix or Seattle ~ 5,000,000': detroit,
    'Orlando, Minneapolis, Cleavland or Denver ~ 4,000,000': orlando,
    'Porltand, Saint Louis, Charlotte, Sacramento, Pittsburgh, Salt Lake City ~ 3,000,000': pdx,
};




L.control.layers(overlays, null, {collapsed: false}).addTo(map);
//L.map('map');
