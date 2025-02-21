export default function ArtistsLayout({children}:{children: React.ReactNode}){
  return (
    <div className="container min-h-screen flex flex-col text-black w-full pb-10">
           <header className="pt-6">
             <h1 className="text-2xl font-semibold" >Meet Our Painters</h1>
           </header>

           <main className="flex flex-grow items-center justify-center">
            {children}
           </main>
    </div>
  )
}