import { Container } from 'components/Container';
import { Footer } from 'components/Footer';
import { Header } from 'components/Header';

import './globals.css';

export const metadata = {
  title: 'Linear copy',
  description: '',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <div>
          <header>
            <Container>
              <Header />
            </Container>
          </header>
          <main className='pt-navigation-height bg-page-gradient '>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
