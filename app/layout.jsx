import "@styles/globals.css";
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: "Mohit World",
  description: "I do magic on the web",
};

const RootLayout = ({ children }) => (
  <html lang='en'>
    <body>
        <div className='main'>
          <div className='gradient' />
        </div>

        <main className='app'>
          {children}
          <Analytics />
        </main>
    </body>
  </html>
);

export default RootLayout;