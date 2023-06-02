import Navbar from "./Navbar";
import Footer from "./Footer";

//children là con của Layout mà  con layout đang được khai báo trong _app.js
export default function Layout({children}) {
    return(
        <div className="content">
            <Navbar/>
                {children}
            <Footer/>
        </div>
    )
}