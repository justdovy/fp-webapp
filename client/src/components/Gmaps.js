import React from 'react';
import { 
    GoogleMap, 
    useLoadScript,
    //Marker 
} from "@react-google-maps/api";

const libraries = ["places"];
const mapContainerStyle = {
    width: '1160px',
    height: '600px',
};
const center = {
    lat: 51.506873,
    lng: -0.304264,
}

export default function Gmaps(){
    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_API_KEY,
        libraries,
    });
    
    if (loadError) return "Error loading maps";
    if (!isLoaded) return "Loading Maps";

    return (
        <div>
            <GoogleMap mapContainerStyle={mapContainerStyle} zoom={15} center={center}></GoogleMap>
        </div>
    );
}

    

