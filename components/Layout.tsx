import { useRouter } from 'next/router';
import Footer from './Footer';

export default function Layout({ children }: any) {
  const router = useRouter();

  const menuItems = [
    {
      href: '/',
      title: 'Homepage',
    },
    {
      href: '/about',
      title: 'About',
    },
    {
      href: '/contact',
      title: 'Contact',
    },
  ];

  return (
    <div className='min-h-screen flex flex-col'>
        <main className='w-[100%]'>{children}</main>
        <Footer />
    </div>
  );
}