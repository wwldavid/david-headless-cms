interface GenreFilterProps {
  selectedGenre: string;
  setSelectedGenre: (genre: string) => void;
 }

 export default function GenreFilter({selectedGenre, setSelectedGenre}: GenreFilterProps) {
  const genres = ["scenery","character","modernism","expressionism","others"];

  return (
    <div className="flex space-x-4 mt-4">
      {genres.map((genre) => (
        <button
        key={genre}
        className={`px-4 py-2 border rounded-md transition ${
          selectedGenre === genre ? "bg-black text-white" : "bg-white text-black"
        }`}
        onClick={() => setSelectedGenre(genre)}
        >
          {genre}
        </button>
      ))}
    </div>
  )
 }