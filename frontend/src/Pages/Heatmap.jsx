import React, { useEffect } from "react";
import AdminHeader from "../components/AdminHeader";

import "./heatmap.css";

function Heatmap() {
  useEffect(() => {
    async function getCoordinates(pincode) {
      const apiKey = "AIzaSyA-dzrhOYDlls0-9KmfsTTIlW4Jt09lON0";
      const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${pincode}&key=${apiKey}`;

      try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.results.length > 0) {
          const location = data.results[0].geometry.location;
          return { lat: location.lat, lng: location.lng };
        } else {
          throw new Error("Invalid pincode");
        }
      } catch (error) {
        console.error("Error fetching coordinates:", error.message);
        return null;
      }
    }

    async function addCoordinatesToLocations(location) {
      const coordinates = await getCoordinates(location.pincode);
      return coordinates ? { ...location, coordinates } : location;
    }

    async function initMap() {
      try {
        const locations = [
          { pincode: 560043, totalReq: 243, noOfBags: 300 },
          { pincode: 560029, totalReq: 500, noOfBags: 0 },
          { pincode: 560036, totalReq: 100, noOfBags: 100 },
          // Add more locations as needed
        ];

        const updatedLocations = await Promise.all(
          locations.map(addCoordinatesToLocations)
        );

        console.log(updatedLocations);

        var heatmapData = updatedLocations.map((location) => {
          var color = "green";
          var weight = 900;
          if (location.noOfBags > 100 && location.noOfBags <= 200) {
            color = "orange";
           
          } else if (location.noOfBags > 200) {
            color = "red";
          
          }

          return {
            location: new window.google.maps.LatLng(
              location.coordinates.lat,
              location.coordinates.lng
            ),
            weight: weight,
            fillColor: color,
           
          };
        });

        var map = new window.google.maps.Map(
          document.getElementById("heatmap"),
          {
            center: { lat: 12.971598, lng: 77.594562 },
            zoom: 12,
          }
        );

        var heatmap = new window.google.maps.visualization.HeatmapLayer({
          data: heatmapData,
          map: map,
          
        });
      } catch (error) {
        console.error("Error initializing map:", error);
      }
    }
    
    if (window.google && window.google.maps) {
      initMap();
    } else {
      
      console.error("Google Maps script not loaded");
    }
  }, []); 

  return (
    <div className="heatmappg">
      <div className="headerforadmin">
        <AdminHeader />
      </div>
      <div className="heatmapContainer">
        <div id="heatmap" style={{ height: "500px" }}></div>
      </div>
    </div>
  );
}

export default Heatmap;
