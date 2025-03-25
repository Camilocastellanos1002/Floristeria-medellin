import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

function GoogleMapApi(){

    const containerStyle = {
      width: "100%",
      height: "400px",
    };
    
    const center = {
      lat: 6.245751626327091,
      lng: -75.5624897242311
    };

    return (
        <>
        <div className="w-full flex justify-center items-center">
            <LoadScript >
                <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
                    <Marker position={center} />
                </GoogleMap>
            </LoadScript>
        </div>
        </>
    );
}

export {GoogleMapApi}
