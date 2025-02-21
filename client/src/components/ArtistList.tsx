import Image from "next/image";

interface Artist {
  _id: string;
  name: string;
  image:  {
    asset: {
      url:string;
    };
  };
}

interface ArtistListProps {
  artists: Artist[];
  onSelectArtist: (artist: Artist) => void;
}

export default function ArtistList({ artists, onSelectArtist }: ArtistListProps) {
  return (
    <div className="w-full h-[640px] bg-white p-4 rounded-lg shadow-md sticky top-6 overflow-y-auto">
      <h2 className="text-xl font-semibold mb-4">Artist List</h2>
      <ul className="space-y-4">
        {artists.map((artist) => (
          <li
          key={artist._id}
          className="flex items-center space-x-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md transition"
          onClick={() => onSelectArtist(artist)}
          >
            <Image src={artist.image.asset.url} width={48} height={48} alt={artist.name} className="rounded-full object-contain" />
            <span className="text-lg">{artist.name}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}