import ArtistCard from "./ArtistCard";

interface Painting {
  id: string;
  artistId: string;
  title: string;
  year: string;
  material: string;
  genre: string;
  image: string;
  author: string;
  size: string;
}

interface PaintingGridProps {
  paintings: Painting[];
}

export default function PaintingGrid({paintings}:PaintingGridProps){
  return (
    <div className="grid grid-cols-4 gap-6 mt-6 auto-rows-auto overflow-visible">
      {paintings.map((painting) =>(
        <ArtistCard key={painting.id} {...painting}/>
      ))}
    </div>
  )
}