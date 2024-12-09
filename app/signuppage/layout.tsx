'use client'



import "../globals.css";
import { Provider } from "react-redux";
import store from "../store"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
 <Provider store={store} > 
    <html lang="en">
      <body>
        <main>
          
        {children}
        </main>

      
       
      </body>
    </html>
    </Provider>
   
  );
}
