import Footer from "./footer";
import NavBar from "./navbar";
import { TopGradient } from "./top-gradient";

const Layout = ({ children }) => {
  return (
    <>
      <TopGradient />
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
