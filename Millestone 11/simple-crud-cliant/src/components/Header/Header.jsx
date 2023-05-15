import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">Simple CRUD</a>
            </div>
            <div className="flex-none">
                <Link to='/users'>User</Link>
            </div>
        </div>
    );
};

export default Header;