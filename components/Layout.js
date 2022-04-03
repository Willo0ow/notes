import Navbar from "./NavBar";

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar></Navbar>
            { children }
        </div>

    );
}

export default Layout;