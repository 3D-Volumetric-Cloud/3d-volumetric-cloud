import Avatar from "../Avatar";



export default function NavBar() {
    return (
        <div className="fixed left-0 top-0 w-full h-1 py-12 bg-blue-950 p-6 justify-between" id="NavBar">
            <div className="flex flex-row justify-between items-center h-full w-full">
                <ul className="flex flex-row">
                    <li>Home</li>
                    <li>Recording</li>
                    <li>About</li>
                    <li>Support</li>
                </ul>
                <Avatar/>
            </div>
        </div>
    );
}