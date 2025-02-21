import SearchBar from "@/components/SearchBar";
import "./globals.css";


export default function Layout({ children }: { children: React.ReactNode }) {
  
  return (
    <html lang="en">
      <body 
        className="min-h-screen flex flex-col bg-cover bg-center bg-no-repeat " 
        style={{ backgroundImage: "url('/bg.jpg')" }}
      >
        <SearchBar/>
        <main className="flex flex-col items-center flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}