import Footer from "@/components/layout/home/Footer";
import Nav from "@/components/layout/home/NavHeader/Nav";

const layoutHome = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
};

export default layoutHome;
