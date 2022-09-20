import Footer from './Footer';
import Header from './header';

const Layout = ({ children }: any) => {
  return (
    <div className='min-h-screen flex flex-col'>
        <Header />
        <main className='w-[100%]'>{children}</main>
        <Footer />
    </div>
  );
}

export default Layout;
