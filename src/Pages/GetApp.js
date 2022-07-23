import Header from "../components/Common/Header";
import Footer from "../components/Common/Footer";
import GetAppBody from "../components/ui/GetAppBody";

const GetApp = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#e3f5f5",
        }}
      >
        <Header />
        <GetAppBody />
        <Footer />
      </div>
    </>
  );
};

export default GetApp;
