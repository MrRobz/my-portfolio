import NavBar from "./navbar";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <main className="bg-white text-darkBlue">{children}</main>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
