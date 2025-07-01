import { divIcon } from "leaflet";

/**
 * Returns a rotated airplane icon based on the heading angle (deg).
 * The plane icon is visually rotated to match the direction of flight.
 *
 * @param {number} deg - Heading in degrees.
 * @returns {divIcon} A Leaflet divIcon with the rotated airplane image.
 */
export const getIcon = (deg) => {
  return divIcon({
    html: `<div style="transform: rotate(${deg - 45}deg)">
             <img src="/plane_icon.png" style="width:40px;height:40px" alt="plane icon" />
           </div>`,
    className: "",
    iconSize: [30, 30],
  });
};
