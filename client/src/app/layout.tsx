"use client";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isStartPage = pathname === "/";

  return (
    <html lang="en">
      <body 
        className="min-h-screen flex flex-col bg-cover bg-center bg-no-repeat " 
        style={{ backgroundImage: "url('/bg.jpg')" }}
      >
        <div className={`
          transition-all duration-500 ease-in-out
          ${isStartPage ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full h-0'}
        `}>
          <div className="flex justify-center my-5">
            <Image src="/logo.png" alt="Gallery Logo" width={200} height={80} />
          </div>
        </div>

        <nav className={`
          h-20 bg-black transition-all duration-500 ease-in-out
          ${isStartPage ? "flex justify-center items-center" : ""}
        `}>
          <div className="max-w-screen-lg mx-auto flex justify-between items-center h-full px-10">
            <div className={`
              transition-all duration-500 ease-in-out
              ${!isStartPage ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}
            `}>
              <Image src="/logo.png" alt="Gallery Logo" width={150} height={60} />
            </div>
            
            <div className="flex justify-center space-x-10 text-white text-lg">
              {["Start", "Artists", "Paintings", "About", "Contact"].map((item) => {
                const href = item.toLowerCase() === "start" ? "/" : `/${item.toLowerCase()}`;
                return (
                  <Link
                    key={item}
                    href={href}
                    className={`
                      hover:text-gray-400 transition-all duration-300 ease-in-out
                      relative after:content-[''] after:absolute after:w-full after:h-0.5 
                      after:bg-white after:left-0 after:-bottom-1 after:opacity-0 
                      after:transition-all after:duration-300
                      hover:after:opacity-100
                    `}
                  >
                    {item}
                  </Link>
                );
              })}
            </div>
          </div>
        </nav>

        <main className="flex flex-col items-center flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}