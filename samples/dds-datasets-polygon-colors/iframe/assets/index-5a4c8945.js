(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */function i(r){switch(r.feature.datasetAttributes.typecategory){case"Undeveloped":return{strokeColor:"blue",strokeWeight:2,strokeOpacity:1,fillColor:"blue",fillOpacity:.3};case"Parkway":return{strokeColor:"red",strokeWeight:2,strokeOpacity:1,fillColor:"red",fillOpacity:.5};default:return{strokeColor:"green",strokeWeight:2,strokeOpacity:1,fillColor:"green",fillOpacity:.3}}}async function l(){const{Map:r}=await google.maps.importLibrary("maps"),t={lat:40.580732,lng:-74.152826},n=new r(document.getElementById("map"),{zoom:14,center:t,mapId:"b98e588c46685dd7",mapTypeControl:!1}),a="6fe13aa9-b900-45e7-b636-3236672c3f4f",e=n.getDatasetFeatureLayer(a);e.style=i;const o=document.createElement("div"),s=c();o.appendChild(s),n.controls[google.maps.ControlPosition.LEFT_BOTTOM].push(o)}function c(r){const t=document.createElement("div");return t.style.backgroundColor="#fff",t.style.opacity="0.7",t.style.fontFamily="Roboto,Arial,sans-serif",t.style.fontSize="10px",t.style.padding="2px",t.style.margin="2px",t.textContent="Data source: NYC Open Data",t}l();