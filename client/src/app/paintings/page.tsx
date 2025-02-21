"use client";

import { useState, useEffect } from "react";
import GenereFilter from "../../components/GenereFilter";
import PaintingGrid from "../../components/PaintingGrid";
import { sanityClient } from "../../lib/sanity.js";


interface Painting {
  _id: string;
  artist: {
    _id: string;
    name:string;
  };
  title: string;
  year: string;
  material:string;
  genre: string;
  image: {
    asset:{
      url:string;
    }
  }
  size: string;
}


export default function PaintingsPage() {
  const [selectedGenre, setSelectedGenre] = useState<string>("scenery")
  const [paintings, setPaintings] = useState<Painting[]>([]);

  useEffect(() => {
    sanityClient.fetch(`
      *[_type == "painting" && genre == $genre]{
      _id,
      title,
      year,
      material,
      genre,
      size,
      image{
       asset-> {
       url
       }
       },
       artist->{
       _id,
       name
       }
       }
    `, {genre:selectedGenre})
    .then((data) => {
      console.log("Fetched paintings:", data);
      setPaintings(data);
    })
     .catch(console.error);
  },[selectedGenre]);

  return (
    <div className="container flex flex-col items-center bg-gray-100 text-black w-full p-6 h-full min-h-screen">
      <GenereFilter selectedGenre={selectedGenre} setSelectedGenre={setSelectedGenre}/>
      <PaintingGrid paintings={paintings.map(painting => ({
        id: painting._id,
        artistId: painting.artist._id,
        title: painting.title,
        year:painting.year,
        material: painting.material,
        genre: painting.genre,
        image: painting.image.asset.url,
        author: painting.artist.name,
        size: painting.size
      }))}/>
    </div>
  )
}