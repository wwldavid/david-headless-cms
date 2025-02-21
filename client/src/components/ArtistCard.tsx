import Image from "next/image";

interface ArtistCardProps {
  title: string;
  year: string;
  material: string;
  image: string;
  author: string;
  size: string;
}

export default function ArtistCard({title, year, material, image, author, size}:ArtistCardProps){
  return (
    <div className="w-[270px] h-[350px] flex flex-col justify-center items-center shadow-lg overflow-hidden border border-gray-200 hover:border-gray-500 hover:shadow-md transition duration-200 p-2">
      <div className="relative w-[250px] h-[300px]">
        <Image 
        src={image} 
        alt={title}
        layout="fill"
        className="max-w-full max-h-full object-contain"
        style={{boxShadow:"4px 4px 12px rgba(255, 255, 255, 0.3)"}}
         />
      </div>
      <div className="p-1 text-sm text-gray-700">
         <div className="flex justify-between">
            <span className="font-bold">{title}</span>
            <span className="text-right text-gray-500">{year}, {material}</span>
         </div>
         <div className="flex justify-between">
          <span className="font-bold">{author}</span>
          <span className="text-right text-gray-500">{size}</span>
        </div>
      </div>

    </div>
  )
}