import { useState } from "react";
import ImageDisplay from "./ImageDisplay";

interface Artist {
  name: string;
  bio: string;
  artworks: {
    title: 
    string; 
    year:string; 
    image: {
      asset: {
        url: string;
      };
    };
}[];
};
interface ArtistInfoProps {
  artist: Artist;
}

export default function ArtistInfo({artist}:ArtistInfoProps){
  const [showFullBio, setShowFullBio] = useState(false);
  return(
    <div className="w-full h-[640px] bg-gray-100 p-6 rounded-lg shadow-md overflow-y-auto">
    <h2 className="text-2xl font-semibold" >{artist.name}</h2>
    <p className={`mt-2 text-gray-700 transition-all duration-300 ${
      showFullBio ? "line-clamp-none h-auto" : "line-clamp-3 h-[72px]"
    }`}>
      {artist.bio}
    </p>

    {artist.bio.length > 100 && (
      <button
      className="text-blue-600 text-sm mt-1"
      onClick ={() => setShowFullBio(!showFullBio)}
      >
        {showFullBio ? "Show Less ▲" : "Show More ▼"}
      </button>
    )}

    <div className="mt-6 grid grid-cols-2 gap-6">
        {artist.artworks?.map((artwork, index)=>(
          <ImageDisplay key={index} title={artwork.title} year={artwork.year} image={artwork.image.asset.url}/>
        )) ?? []}
    </div>
  </div>
  ) 
}