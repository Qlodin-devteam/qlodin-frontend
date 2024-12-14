
import type { Metadata } from "next";


import "./globals.css";
import ClientProvider from "./hoc/ClientProvider";

import { Toaster } from "react-hot-toast";



export const metadata: Metadata = {
  title: "qlodin",
  description: "created by  qlodin's team",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>
          
        <ClientProvider>
       
        {children}
        <Toaster/>
        </ClientProvider>
        
     
        </main>

      
       
      </body>
    </html>
    
  );
}
