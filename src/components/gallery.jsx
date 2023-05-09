import React from "react";
import PhotoAlbum from "react-photo-album";

const photos = [
  { src: "img/drivethru/wineselection3.jpeg", width: 800, height: 600, title: "Wide wine selection" },
  { src: "img/drivethru/wine room.jpeg", width: 800, height: 600, title: "Wine tasting" },
  { src: "img/drivethru/jackpot.jpeg", width: 800, height: 600, title: "Try your luck" },
  { src: "img/drivethru/thuny.png", width: 800, height: 600, title: "Your best friend is also welcomed" },
  { src: "img/drivethru/winetastingwhileshop.jpeg", width: 800, height: 600, title: "Enjoy" },
  { src: "img/drivethru/beer selection.jpeg", width: 800, height: 600, title: "Wide selection of beers" },
  { src: "img/drivethru/coldbeer.jpeg", width: 800, height: 600, title: "Cold as the Rocky's" },
  { src: "img/drivethru/u-haul-truck-900x390.jpeg", width: 900, height: 390, title: "Rent a truck!" },
];

function Gallery() {
  return <PhotoAlbum layout="rows" photos={photos} />;
}

export default Gallery;
