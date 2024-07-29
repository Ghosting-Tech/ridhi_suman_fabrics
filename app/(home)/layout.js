import Nav from "@/components/layout/home/NavHeader/Nav";
import CartDrawer from "@/components/drawer/CartDrawer";
import Footer from "@/components/layout/home/Footer";

const layoutHome = ({ children }) => {
  return (
    <>
      <CartDrawer />
      <Nav />
      {children}
      <Footer />
    </>
  );
};

export default layoutHome;
