(self.webpackChunkmaps_angst_frei_ch=self.webpackChunkmaps_angst_frei_ch||[]).push([[179],{924:function(e,o,t){var n=t(243);!function(e,o,t){"use strict";n.AwesomeMarkers={},n.AwesomeMarkers.version="2.0.1",n.AwesomeMarkers.Icon=n.Icon.extend({options:{shadowAnchor:[10,12],shadowSize:[36,16],className:"awesome-marker",icon:"block",markerColor:"white",iconColor:"white"},initialize:function(e){e=n.Util.setOptions(this,e)},createIcon:function(){var e=n.Util.setOptions(this),t=o.createElementNS("http://www.w3.org/2000/svg","svg"),i=o.createElementNS("http://www.w3.org/2000/svg","path"),r=o.createElementNS("http://www.w3.org/2000/svg","circle");if(t.setAttribute("width","31"),t.setAttribute("height","42"),t.setAttribute("class","awesome-marker"),t.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink"),r.setAttribute("cx","15.5"),r.setAttribute("cy","15"),r.setAttribute("r","11"),r.setAttribute("fill",e.markerColor),i.setAttributeNS(null,"d","M15.6,1c-7.7,0-14,6.3-14,14c0,10.5,14,26,14,26s14-15.5,14-26C29.6,7.3,23.3,1,15.6,1z"),i.setAttribute("stroke","white"),i.setAttribute("style","fill:"+e.markerColor),e.icon&&0===e.icon.indexOf("fa-")){var l=o.createElementNS("http://www.w3.org/2000/svg","foreignObject"),s=o.createElement("i");l.setAttribute("height","42"),l.setAttribute("width","31"),s.setAttribute("class","fas "+e.icon),s.style.color=e.iconColor,t.appendChild(i),t.appendChild(r),l.appendChild(s),t.appendChild(l)}else l=o.createElementNS("http://www.w3.org/2000/svg","g"),(s=o.createElementNS("http://www.w3.org/2000/svg","text")).textContent=e.icon,s.setAttribute("x","7"),s.setAttribute("y","23"),s.setAttribute("class","material-icons"),s.setAttribute("fill",e.iconColor),s.setAttribute("font-family","Material Icons"),t.appendChild(i),t.appendChild(r),l.appendChild(s),t.appendChild(l);return t},_setIconStyles:function(e,o){var t,i=this.options,r=n.point(i["shadow"===o?"shadowSize":"iconSize"]);!(t="shadow"===o?n.point(i.shadowAnchor||i.iconAnchor):n.point(i.iconAnchor))&&r&&(t=r.divideBy(2,!0)),e.className="awesome-marker-"+o+" "+i.className,t&&(e.style.marginLeft=-t.x+"px",e.style.marginTop=-t.y+"px"),r&&(e.style.width=r.x+"px",e.style.height=r.y+"px")},createShadow:function(){var e=o.createElement("div");return this._setIconStyles(e,"shadow"),e}}),n.AwesomeMarkers.icon=function(e){return new n.AwesomeMarkers.Icon(e)}}(0,document)},138:(e,o,n)=>{"use strict";n(924),n(978),n(732),n(652),n(817),n(687),n(408),n(292),n(920),n(504),n(681),n(905),n(278),n(385),n(13),n(981),n(931),n(979),n(207);var r=n(243),s=n(755),a=n(460),d="https://docs.google.com/spreadsheets/d/1PRZp5jzotF3LQhc_JCgON2oM2oxWCv_6hr6z_Zlv8LY/edit#gid=0",g="AIzaSyA5IUHNyPZvWuCMTqvI4DJ2ygqDO5_t5Is",u=r.map("map",{preferCanvas:!0,fullscreenControl:{pseudoFullscreen:!1,position:"bottomleft"},attributionControl:!1,zoomControl:!1,scrollWheelZoom:!0,tap:!1}).setView([41.76,-72.69],11),h={notesSheetName:"Notes",optionsSheetName:"Options",pointsSheetName:"Points",polygonsSheetName:"Polygons",polylinesSheetName:"Polylines",_mapTitle:"Map Title",_mapSubtitle:"Map Subtitle",_mapTitleDisplay:"Display Title",_authorName:"Author Name",_authorURL:"Author Email or Website",_codeCredit:"Author Code Credit",_githubRepo:"Author Code Repo",_googleAnalytics:"Google Analytics Tracking ID",_tileProvider:"Basemap Tiles",_markercluster:"Cluster Markers",_introPopupText:"Intro Popup Text",_initZoom:"Initial Zoom",_initLat:"Initial Center Latitude",_initLon:"Initial Center Longitude",_mapSearch:"Search Button",_mapSearchCircleRadius:"Search Radius",_mapSearchZoom:"Search Results Zoom Level",_mapZoom:"Zoom Controls",_mapMyLocation:"Show My Location",_mapAttribution:"Credits and Attribution",_pointsLegendTitle:"Point Legend Title",_pointsLegendPos:"Point Legend Position",_pointsLegendIcon:"Point Legend Icon",_displayTable:"Display Table",_tableHeight:"Table Height",_tableColumns:"Table Columns",_tableHeaderColor:"Table Header Color",_polylinesLegendTitle:"Polyline Legend Title",_polylinesLegendPos:"Polyline Legend Position",_polylinesLegendIcon:"Polyline Legend Icon",_polylinesWeight:"Polyline Thickness",_polygonsLegendTitle:"Polygon Legend Title",_polygonsLegendPosition:"Polygon Legend Position",_polygonsLegendIcon:"Polygon Legend Icon",_polygonsGeojsonURL:"Polygon GeoJSON URL",_popupProp:"Property Popups, Labels",_polygonLayers:"Polygon Properties, Labels",_bucketDivisors:"Property Ranges",_colorScheme:"Property Range Color Palette",_colorOpacity:"Polygon Color Opacity",_outlineColor:"Polygon Outline Color",_bucketColors:"Property Range Manual Colors",_polygonDisplayImages:"Show Images When Available",_polygonLabel:"Show Polygon Labels",_polygonLabelZoomLevel:"Show Polygon Labels at Zoom Level",_polygonShowOnStart:"Show Polygon Data on Start"};s(window).on("load",(function(){var e,o={},n={},m=[],f=!1,y=!1,v=!1;function _(e,o,t,n){return r.AwesomeMarkers.icon({icon:e,prefix:o,markerColor:t,iconColor:n})}var L=0,b=0,w=[],C=[],k=[],P=[],S=[],T=[],x=[],A=[],I=[];function N(o){if(o<m.length&&U(o,"_polygonsGeojsonURL").trim()){L=o;var n=U(o,"_popupProp").split(";");for(i in n)n[i]=n[i].split(",");x.push(n),s.getJSON(U(o,"_polygonsGeojsonURL").trim(),(function(e){geoJsonLayer=r.geoJson(e,{onEachFeature:Z,pointToLayer:function(e,o){return r.circleMarker(o,{className:"geojson-point-marker"})}}),P.push(geoJsonLayer),N(o+1)}))}else!function(){for(var o=0;o<m.length&&U(o,"_polygonsGeojsonURL").trim();){for(i in isNumerical=[],divisors=[],colors=[],polygonLayers=U(o,"_polygonLayers").split(";"),polygonLayers)polygonLayers[i]=polygonLayers[i].split(",");if(divisors=U(o,"_bucketDivisors").split(";"),divisors.length!=polygonLayers.length)return void alert("Error in Polygons: The number of sets of divisors has to match the number of properties");for(colors=U(o,"_bucketColors").split(";"),i=0;i<divisors.length;i++){for(divisors[i]=divisors[i].split(","),j=0;j<divisors[i].length;j++)divisors[i][j]=divisors[i][j].trim();colors[i]?colors[i]=colors[i].split(","):colors[i]=[]}for(i=0;i<divisors.length;i++){if(0==divisors[i].length)return void alert("Error in Polygons: The number of divisors should be > 0");if(0==colors[i].length)for(colors[i]=palette(H(o,"_colorScheme","tol-sq"),divisors[i].length),j=0;j<colors[i].length;j++)colors[i][j]="#"+colors[i][j].trim();else if(divisors[i].length!=colors[i].length)return void alert("Error in Polygons: The number of divisors should match the number of colors")}for(i=0;i<divisors.length;i++)if(isNaN(parseFloat(divisors[i][0].trim())))isNumerical[i]=!1;else for(isNumerical[i]=!0,j=0;j<divisors[i].length;j++)divisors[i][j]=parseFloat(divisors[i][j].trim());w.push(divisors),C.push(colors),k.push(isNumerical),T.push(polygonLayers);var n=H(o,"_polygonsLegendPosition","off");(e=r.control({position:"off"==n?"topleft":n})).onAdd=function(e){var t='<h6 class="pointer">'+U(o,"_polygonsLegendTitle")+"</h6>";for(i in t+="<form>",polygonLayers){var n=polygonLayers[i][1]?polygonLayers[i][1].trim():polygonLayers[i][0].trim();t+='<label><input type="radio" name="prop" value="'+o+";"+i+'"> ',t+=(n=""==n?"On":n)+"</label><br>"}t+='<label><input type="radio" name="prop" value="'+o+';-1"> Off</label></form><div class="polygons-legend-scale">';var l=r.DomUtil.create("div","leaflet-control leaflet-control-custom leaflet-bar ladder polygons-legend"+o);return l.innerHTML=t,l.innerHTML+="</div>",l},e.addTo(u),"off"==U(o,"_polygonsLegendPosition")&&s(".polygons-legend"+o).css("display","none"),S.push(e),o++}for(var i in I){var l=r.featureGroup(I[i]);A.push(l)}for(s('.ladder input:radio[name="prop"]').change((function(){L=parseInt(s(this).val().split(";")[0]),-1==(b=parseInt(s(this).val().split(";")[1]))?(s(".polygons-legend"+L).find(".polygons-legend-scale").hide(),u.hasLayer(P[L])&&(u.removeLayer(P[L]),u.hasLayer(A[L])&&u.removeLayer(A[L]))):O()})),t=0;t<o;t++)"on"==U(t,"_polygonShowOnStart")?s('.ladder input:radio[name="prop"][value="'+t+';0"]').click():s('.ladder input:radio[name="prop"][value="'+t+';-1"]').click();s(".polygons-legend-merged h6").eq(0).click().click(),y=!0}()}function O(){if(p=L,z=b,P[p].setStyle(M),u.hasLayer(P[p])||(u.addLayer(P[p]),!u.hasLayer(A[p])&&A[p]&&u.addLayer(A[p])),s("#polylines-legend form label input").each((function(e){s(this).click().click()})),""!=w[p][z]){s(".polygons-legend"+p+" .polygons-legend-scale").html("");for(var e=[],o=0;o<w[p][z].length;o++){var t=k[p][z],n=w[p][z][o],i=w[p][z][o+1],r=D(n);n=n?W(n):n,i=i?W(i):i,e.push('<i style="background:'+r+"; opacity: "+H(p,"_colorOpacity","0.7")+'"></i> '+n+(i&&t?"&ndash;"+i:t?"+":""))}s(".polygons-legend"+p+" .polygons-legend-scale").html(e.join("<br>")),s(".polygons-legend"+p+" .polygons-legend-scale").show(),G()}else s(".polygons-legend"+p).find(".polygons-legend-scale").css({margin:"0px",padding:"0px",border:"0px solid"})}function M(e){var o=e.properties[T[L][b][0].trim()];return"Point"==e.geometry.type?{radius:4,weight:1,opacity:1,color:D(o),fillOpacity:H(L,"_colorOpacity","0.7"),fillColor:"white"}:{weight:2,opacity:1,color:H(L,"_outlineColor","white"),dashArray:"3",fillOpacity:H(L,"_colorOpacity","0.7"),fillColor:D(o)}}function D(e){var o,t=k[L][b],n=C[L][b],i=w[L][b];if(t)for(o=n.length-1;e<i[o];)o-=1;else for(o=0;o<n.length-1&&e!=i[o];o++);return n[o]||(o=0),n[o]}function Z(e,o){if(""!=U(L,"_popupProp")||"off"!=U(L,"_polygonDisplayImages")){var t="";for(i in props=x[L],props)if(""!=props[i]){t+=props[i][1]?props[i][1].trim():props[i][0].trim();var n=e.properties[props[i][0].trim()];t+=": <b>"+(n?W(n):n)+"</b><br>"}if("on"==U(L,"_polygonDisplayImages")&&e.properties.img&&(t+='<img src="'+e.properties.img+'">'),o.bindPopup(t),I[L]||I.push([]),""!==U(L,"_polygonLabel")){var l=r.marker(polylabel(o.feature.geometry.coordinates,1).reverse(),{icon:r.divIcon({className:"polygon-label"+L+" polygon-label",html:e.properties[U(L,"_polygonLabel")]})});I[L].push(l)}}}function R(e,t,a){var p,d;!function(e){for(var t in e){var n=e[t];o[n.Setting]=n.Customize}}(e),document.title=E("_mapTitle"),p=J("_tileProvider","CartoDB.Positron"),r.tileLayer.provider(p,{maxZoom:19}).addTo(u),r.control.attribution({position:J("_mapAttribution","bottomright")}).addTo(u);var g,h,m="";if(t&&t.length>0?(d=function(e){var o=[],t={};for(var i in e){var l=e[i].Group;l&&-1===o.indexOf(l)&&(o.push(l),n[l]=e[i]["Marker Icon"].indexOf(".")>0?e[i]["Marker Icon"]:e[i]["Marker Color"])}if(0===o.length)t=void 0;else for(var i in o){var s=o[i];t[s]=r.layerGroup(),t[s].addTo(u)}return t}(t),m=function(e,o){var t=[];for(var n in e){var i=e[n],l=i["Custom Size"],a=l.indexOf("x")>0?[parseInt(l.split("x")[0]),parseInt(l.split("x")[1])]:[32,32],p=[a[0]/2,a[1]],c=i["Marker Icon"].indexOf(".")>0?r.icon({iconUrl:i["Marker Icon"],iconSize:a,iconAnchor:p}):_(i["Marker Icon"],"fa",i["Marker Color"].toLowerCase(),i["Icon Color"]);if(""!==i.Latitude&&""!==i.Longitude){var d=r.marker([i.Latitude,i.Longitude],{icon:c}).bindPopup("<b>"+i.Name+"</b><br>"+(i.Image?'<img src="'+i.Image+'"><br>':"")+i.Description);void 0!==o&&1!==o.length&&d.addTo(o[i.Group]),t.push(d)}}var g=r.featureGroup(t),h="on"===E("_markercluster");if(void 0===o||0===o.length)u.addLayer(h?r.markerClusterGroup({chunkedLoading:!0}).addLayer(g).addTo(u):g);else{if(h){var m=r.markerClusterGroup.layerSupport();for(n in m.addTo(u),o)m.checkIn(o[n]),o[n].addTo(u)}var y="off"==E("_pointsLegendPos")?"topleft":E("_pointsLegendPos"),v=r.control.layers(null,o,{collapsed:!1,position:y});"off"!==E("_pointsLegendPos")&&(v.addTo(u),v._container.id="points-legend",v._container.className+=" ladder")}s("#points-legend").prepend('<h6 class="pointer">'+E("_pointsLegendTitle")+"</h6>"),""!=E("_pointsLegendIcon")&&s("#points-legend h6").prepend('<span class="legend-icon"><i class="fas '+E("_pointsLegendIcon")+'"></i></span>');var L="on"==E("_displayTable"),b=E("_tableColumns").split(",").map(Function.prototype.call,String.prototype.trim);if(L&&b.length>1){var w=J("_tableHeight",40);(w<10||w>90)&&(w=40),s("#map").css("height",100-w+"vh"),u.invalidateSize();var C=E("_tableHeaderColor").split(",");function t(){var t=[];for(n in e)u.hasLayer(o[e[n].Group])&&u.getBounds().contains(r.latLng(e[n].Latitude,e[n].Longitude))&&t.push(e[n]);var l=i(t);k.clear(),k.rows.add(l),k.draw()}function i(e){var o=[];for(var t in e){var n=[];for(var i in b)n.push(e[t][b[i]]);o.push(n)}return o}function l(){var e=[];for(var o in b)e.push({title:b[o]});return e}""!=C[0]&&(s("table.display").css("background-color",C[0]),C.length>=2&&s("table.display").css("color",C[1])),u.on("moveend",t),u.on("layeradd",t),u.on("layerremove",t);var k=s("#maptable").DataTable({paging:!1,scrollCollapse:!0,scrollY:"calc("+w+"vh - 40px)",info:!1,searching:!1,columns:l()})}return f=!0,g}(t,d)):f=!0,function(e){var o,t=u.getCenter().lat,n=!1,i=u.getCenter().lng,l=!1,s=12,a=!1;""!==E("_initLat")&&(t=E("_initLat"),n=!0),""!==E("_initLon")&&(i=E("_initLon"),l=!0),""!==E("_initZoom")&&(s=parseInt(E("_initZoom")),a=!0),o=n&&l||!e?r.latLng(t,i):e.getBounds().getCenter(),!a&&e&&(s=u.getBoundsZoom(e.getBounds())),u.setView(o,s)}(m),a&&a.length>0?function(e){if(e&&0!=e.length){var o="off"==E("_polylinesLegendPos")?"topleft":E("_polylinesLegendPos"),t=r.control.layers(null,null,{position:o,collapsed:!1});for(i=0;i<e.length;i++)s.getJSON(e[i]["GeoJSON URL"],function(o){return function(n){for(l in latlng=[],n.features)latlng.push(n.features[l].geometry.coordinates);for(l in latlng)for(c in latlng[l])latlng[l][c].reverse(),3==latlng[l][c].length&&latlng[l][c].shift();if(line=r.polyline(latlng,{color:""==e[o].Color?"grey":e[o].Color,weight:J("_polylinesWeight",2),pane:"shadowPane"}).addTo(u),e[o].Description&&""!=e[o].Description&&line.bindPopup(e[o].Description),t.addOverlay(line,'<i class="color-line" style="background-color:'+e[o].Color+'"></i> '+e[o]["Display Name"]),0==o&&(t._container&&(t._container.id="polylines-legend",t._container.className+=" ladder"),""!=E("_polylinesLegendTitle")&&(s("#polylines-legend").prepend('<h6 class="pointer">'+E("_polylinesLegendTitle")+"</h6>"),""!=E("_polylinesLegendIcon")&&s("#polylines-legend h6").prepend('<span class="legend-icon"><i class="fas '+E("_polylinesLegendIcon")+'"></i></span>'),"in polylines legend"==E("_mapTitleDisplay")))){var i="<h3>"+E("_mapTitle")+"</h3>",a="<h6>"+E("_mapSubtitle")+"</h6>";s("#polylines-legend").prepend(i+a)}e.length==o+1&&(v=!0)}}(i));"off"!==E("_polylinesLegendPos")&&t.addTo(u)}}(a):v=!0,U(0,"_polygonsGeojsonURL")&&U(0,"_polygonsGeojsonURL").trim()?N(0):y=!0,"off"!==E("_mapSearch")){var L=r.Control.geocoder({expand:"click",position:E("_mapSearch"),geocoder:r.Control.Geocoder.nominatim({geocodingQueryParams:{viewbox:"",bounded:1}})}).addTo(u);function e(){var e=u.getBounds();L.options.geocoder.options.geocodingQueryParams.viewbox=[e._southWest.lng,e._southWest.lat,e._northEast.lng,e._northEast.lat].join(",")}u.on("moveend",e)}"off"!==E("_mapMyLocation")&&r.control.locate({keepCurrentZoomLevel:!0,returnToPrevBounds:!0,position:E("_mapMyLocation")}).addTo(u),"off"!==E("_mapZoom")&&r.control.zoom({position:E("_mapZoom")}).addTo(u),u.on("zoomend",(function(){G()})),function(){var e=E("_mapTitleDisplay");if("off"!==e){var o='<h3 class="pointer">'+E("_mapTitle")+"</h3>",t="<h5>"+E("_mapSubtitle")+"</h5>";"topleft"==e?s("div.leaflet-top").prepend('<div class="map-title leaflet-bar leaflet-control leaflet-control-custom">'+o+t+"</div>"):"topcenter"==e&&(s("#map").append('<div class="div-center"></div>'),s(".div-center").append('<div class="map-title leaflet-bar leaflet-control leaflet-control-custom">'+o+t+"</div>")),s(".map-title h3").click((function(){location.reload()}))}}(),g=s(".leaflet-control-attribution")[0].innerHTML,E("_authorName"),E("_authorURL"),h="Code",E("_codeCredit")&&(h+=" by "+E("_codeCredit")),h+=" with ",s(".leaflet-control-attribution")[0].innerHTML=h+g,s("#points-legend label span").each((function(e){var o=s(this).text().trim(),t=n[o].indexOf(".")>0?'<img src="'+n[o]+'" class="markers-legend-icon">':'&nbsp;<i class="fas fa-map-marker" style="color: '+n[o]+'"></i>';s(this).prepend(t)})),function e(){if(f&&v&&y){for(i in s(".ladder h6").append('<span class="legend-arrow"><i class="fas fa-chevron-down"></i></span>'),s(".ladder h6").addClass("minimize"),S)""!=U(i,"_polygonsLegendIcon")&&s(".polygons-legend"+i+" h6").prepend('<span class="legend-icon"><i class="fas '+U(i,"_polygonsLegendIcon")+'"></i></span>');s(".ladder h6").click((function(){s(this).hasClass("minimize")?(s(".ladder h6").addClass("minimize"),s(".legend-arrow i").removeClass("fa-chevron-up").addClass("fa-chevron-down"),s(this).removeClass("minimize").parent().find(".legend-arrow i").removeClass("fa-chevron-down").addClass("fa-chevron-up")):(s(this).addClass("minimize"),s(this).parent().find(".legend-arrow i").removeClass("fa-chevron-up").addClass("fa-chevron-down"))})),s(".ladder h6").first().click(),s("#map").css("visibility","visible"),s(".loader").hide(),""!=E("_introPopupText")&&function(e,o){if(window.matchMedia("only screen and (max-width: 760px)").matches)return s("body").append('<div id="mobile-intro-popup"><p>'+e+'</p><div id="mobile-intro-popup-close"><i class="fas fa-times"></i></div></div>'),void s("#mobile-intro-popup-close").click((function(){s("#mobile-intro-popup").hide()}));r.popup({className:"intro-popup"}).setLatLng(o).setContent(e).openOn(u)}(E("_introPopupText"),u.getCenter()),G()}else setTimeout(e,50)}();var b=E("_googleAnalytics");if(b&&b.length>=10){var w=document.createElement("script");function e(){dataLayer.push(arguments)}w.setAttribute("src","https://www.googletagmanager.com/gtag/js?id="+b),document.head.appendChild(w),window.dataLayer=window.dataLayer||[],e("js",new Date),e("config",b)}}function G(){for(i in I)u.getZoom()<=H(i,"_polygonLabelZoomLevel",9)?s(".polygon-label"+i).hide():"-1"!=s(".polygons-legend"+i+" input[name=prop]:checked").val()&&s(".polygon-label"+i).show()}function E(e){return o[h[e]]}function U(e,o){return!!m[e]&&m[e][h[o]]}function J(e,o){return(e=E(e))&&""!==e.trim()?e:o}function H(e,o,t){return(o=U(e,o))&&""!==o.trim()?o:t}function B(e){var o={};for(var t in e){var n=e[t];o[n.Setting]=n.Customize}m.push(o)}function W(e){for(;/(\d+)(\d{3})/.test(e.toString());)e=e.toString().replace(/(\d+)(\d{3})/,"$1,$2");return e}s.ajax({url:"./csv/Options.csv",type:"HEAD",error:function(){var e=function(e){return a.parse(a.unparse(e[0].values),{header:!0}).data},o="https://sheets.googleapis.com/v4/spreadsheets/",t=d.indexOf("/d/")>0?d.split("/d/")[1].split("/")[0]:d;s.getJSON(o+t+"?key="+g).then((function(n){var i=n.sheets.map((function(e){return e.properties.title}));0===i.length||i.includes("Options"),s.when(s.getJSON(o+t+"/values/Options?key="+g),s.getJSON(o+t+"/values/Points?key="+g),s.getJSON(o+t+"/values/Polylines?key="+g)).done((function(n,r,l){var a=i.filter((function(e){return 0===e.indexOf("Polygons")})),p=function(i){0===i.length?R(e(n),e(r),e(l)):s.getJSON(o+t+"/values/"+i.shift()+"?key="+g,(function(o){B(e([o])),p(i)}))};p(a)}))}))},success:function(){var e=function(e){return a.parse(e[0],{header:!0}).data};s.when(s.get("./csv/Options.csv"),s.get("./csv/Points.csv"),s.get("./csv/Polylines.csv")).done((function(o,t,n){!function i(r){s.get("./csv/Polygons"+(0===r?"":r)+".csv",(function(o){B(e([o])),i(r+1)})).fail((function(){R(e(o),e(t),e(n))}))}(0)}))}})}))},905:(e,o,t)=>{"use strict";e.exports=t.p+"img/angst-frei-marker-pin.png"},681:(e,o,t)=>{"use strict";e.exports=t.p+"img/angst-frei.png"},385:(e,o,t)=>{"use strict";e.exports=t.p+"img/animap-marker-pin.png"},278:(e,o,t)=>{"use strict";e.exports=t.p+"img/animap.png"},981:(e,o,t)=>{"use strict";e.exports=t.p+"img/mettagstesch-marker-pin-blue.png"},931:(e,o,t)=>{"use strict";e.exports=t.p+"img/mettagstesch-marker-pin-gold.png"},13:(e,o,t)=>{"use strict";e.exports=t.p+"img/mettagstesch.png"},207:(e,o,t)=>{"use strict";e.exports=t.p+"img/sonja-marker-pin.png"},979:(e,o,t)=>{"use strict";e.exports=t.p+"img/sonja.png"}},e=>{e.O(0,[692],(()=>(138,e(e.s=138)))),e.O()}]);