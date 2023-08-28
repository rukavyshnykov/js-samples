(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(e){if(e.ep)return;e.ep=!0;const i=n(e);fetch(e.href,i)}})();/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */function c(){const r=new google.maps.Map(document.getElementById("map"),{mapTypeControl:!1,center:{lat:-33.8688,lng:151.2195},zoom:13});new l(r)}class l{constructor(t){this.map=t,this.originPlaceId="",this.destinationPlaceId="",this.travelMode=google.maps.TravelMode.WALKING,this.directionsService=new google.maps.DirectionsService,this.directionsRenderer=new google.maps.DirectionsRenderer,this.directionsRenderer.setMap(t);const n=document.getElementById("origin-input"),o=document.getElementById("destination-input"),e=document.getElementById("mode-selector"),i=new google.maps.places.Autocomplete(n,{fields:["place_id"]}),s=new google.maps.places.Autocomplete(o,{fields:["place_id"]});this.setupClickListener("changemode-walking",google.maps.TravelMode.WALKING),this.setupClickListener("changemode-transit",google.maps.TravelMode.TRANSIT),this.setupClickListener("changemode-driving",google.maps.TravelMode.DRIVING),this.setupPlaceChangedListener(i,"ORIG"),this.setupPlaceChangedListener(s,"DEST"),this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(n),this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(o),this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(e)}setupClickListener(t,n){document.getElementById(t).addEventListener("click",()=>{this.travelMode=n,this.route()})}setupPlaceChangedListener(t,n){t.bindTo("bounds",this.map),t.addListener("place_changed",()=>{const o=t.getPlace();if(!o.place_id){window.alert("Please select an option from the dropdown list.");return}n==="ORIG"?this.originPlaceId=o.place_id:this.destinationPlaceId=o.place_id,this.route()})}route(){if(!this.originPlaceId||!this.destinationPlaceId)return;const t=this;this.directionsService.route({origin:{placeId:this.originPlaceId},destination:{placeId:this.destinationPlaceId},travelMode:this.travelMode},(n,o)=>{o==="OK"?t.directionsRenderer.setDirections(n):window.alert("Directions request failed due to "+o)})}}window.initMap=c;
