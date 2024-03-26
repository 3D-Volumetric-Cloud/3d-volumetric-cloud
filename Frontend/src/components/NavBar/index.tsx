import Avatar from "../Avatar";
import SearchBar from "./SearchBar";



export default function NavBar() {
    return (
        <div className="fixed left-0 top-0 w-full h-1 py-12 bg-blue-950 p-6 justify-between" id="NavBar">
            <div className="flex flex-row justify-between items-center h-full w-full">
                <div className="mx-10"></div>
                <SearchBar/>
                <Avatar/>
            </div>
        </div>
    );
}