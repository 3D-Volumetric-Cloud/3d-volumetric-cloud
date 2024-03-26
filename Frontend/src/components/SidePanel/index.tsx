export default function SidePanel() {
    return (
        <div className="fixed left-0 top-24 h-full w-64 py-12 bg-blue-400 p-6">
            <ul>
                <li><a href='/'>Home</a></li>
                <li><a href='/recording'>recording</a></li>
                <li><a>about</a></li>
            </ul>
        </div>
    );
}
