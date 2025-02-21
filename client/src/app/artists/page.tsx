"use client"

import { useState, useEffect } from "react";
import { sanityClient } from "../../lib/sanity.js";
import ArtistList from "../../components/ArtistList";
import ArtistInfo from "../../components/ArtistInfo";

interface Artist {
  _id: string;
  name: string;
  image: {
    asset: {
      url: string;
    };
  };
  bio: string;
  artworks:{
    title: string;
    year: string; 
    image: {
      asset: {
        url: string;
      };
    };
  }[];
}

export default function ArtistsPage(){
  const [artists, setArtists] = useState<Artist[]>([]);
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);

  useEffect(() => {
    sanityClient.fetch(`
      *[_type == "artist"]{
      _id,
      name,
      bio,
      image{
      asset->{
      url
      }
      },
      artworks[]->{
      title, 
      year, 
      image{
      asset->{
      url
      }
      }
      }
      }
    `)
    .then((data) =>{
      console.log("Fetched artists:", data);
      setArtists(data);
      if(data.length > 0) {
        setSelectedArtist(data[0]);
      }
    })
    .catch(console.error);
  },[]);

return (
  <div className="flex flex-col items-center h-[750px]  bg-lime-200 text-full w-full p-6 overflow-hidden">

     <p className="mt-1 text-lg text-gray-600" >Discover talented artists behind these beautiful oil paintings.</p>
     <div className="flex max-w-8xl mt-4 space-x-6">
      <div className="w-[300px] flext-shrink-0">
         <ArtistList artists={artists } onSelectArtist={(artist) => setSelectedArtist(artist as Artist)}/>
      </div>
      <div className="flex-1">
         {selectedArtist && <ArtistInfo artist={selectedArtist}/>}
      </div>
     </div>
  </div>
)

}