import Image from "next/image";

interface ImageDisplayProps {
  title: string;
  year: string;
  image:string;
}

export default function ImageDisplay({title, year, image}:ImageDisplayProps) {
  return (
    <div className="flex flex-col items-center mt-3">
      <div className="w-[350px] h-[350px] relative">
      <Image
      src={image} 
      alt={title} 
      fill
      className="object-contain rounded-md shadow-md"
      // sizes="(max-width:300px) 100vw, 300px"
       />
      
      </div>
      <p className="mt-2 text-lg font-semibold">{title}</p>
      <p className="text-gray-600">{year}</p>
    </div>
  )
}