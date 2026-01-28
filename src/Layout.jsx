import {Link, Outlet} from "react-router";

function Layout() {
    return (
        <div>
            <header>
                <nav>
                    <Link to={`/`} className={"main_button"}>Home</Link>
                    <Link to={`/create`} className={"main_button"}>New Dragon</Link>
                </nav>
            </header>
            <main>
                <Outlet/>
            </main>
        </div>
    );
}

export default Layout;