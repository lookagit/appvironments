import { useRouter } from 'next/router';
import Footer from './Footer';

const Layout = ({ children }: any) => {
  return (
    <div className='min-h-screen flex flex-col justify-center'>
        <div>HEADER</div>
        <main className='w-[100%]'>{children}</main>
        <Footer />
    </div>
  );
}

export default Layout;
