import Header from "../Header";

const Layout = ({ children }) => {
    return (
        <div className="bg-[#212529] h-[100vh] text-white font-sans overflow-y-scroll">
            <Header />
            <main>{children}</main>
        </div>
    );
};

export default Layout;