export default function PaintingLayout({children}:{children: React.ReactNode}){
  return (
    <div className="h-full flex flex-col bg-gray-100 text-black w-full">
      <header className="text-center py-6 bg-white shadow-md">
        <h1 className="text-2xl font-semibold">Our Collections</h1>
      </header>
      <main className="flex flex-col items-center overflow-auto">{children}</main>
    </div>
  )
}