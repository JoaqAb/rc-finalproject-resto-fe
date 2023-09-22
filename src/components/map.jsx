import React, { useRef, useEffect, useState } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import "@maptiler/sdk/dist/maptiler-sdk.css";
import '../css/map.css';

export default function Map() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const Tucuman = { lng: -65.2072906, lat:-26.8361215};
    const [zoom] = useState(17);
    maptilersdk.config.apiKey = '0flPQKEvzYHtOV0CwHU8';
    
    useEffect(() => {
        if (map.current) return; // stops map from intializing more than once
        
        map.current = new maptilersdk.Map({
            container: mapContainer.current,
            style: maptilersdk.MapStyle.STREETS,
            center: [Tucuman.lng, Tucuman.lat],
            zoom: zoom
        });
        new maptilersdk.Marker({color: "#FF0000"})
  .setLngLat([-65.2072906,-26.8361215])
  .addTo(map.current);

    }, [Tucuman.lng, Tucuman.lat, zoom]);
    
    return (
        <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
    }