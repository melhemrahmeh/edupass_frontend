import Header from "../Common/Header";
import Footer from "../Common/Footer";
import GetAppBody from "../ui/GetAppBody";

const GetApp = () => {
  return (
    <>
    <div style={{
      backgroundColor: '#e3f5f5' ,
    }}
    >
    <Header />
    <GetAppBody />
    <Footer/>
    </div>
      
    </>
  );
};

export default GetApp;