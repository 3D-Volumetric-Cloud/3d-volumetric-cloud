import './SidePanel.css';


export default function SidePanel() {
    return (
        <div className="fixed left-0 top-24 h-full w-64 py-12 bg-blue-900 p-6 panel">
            <ul>
                <li className="mb-2"><a href='/'>Home</a></li>
                <li className="mb-2"><a href='/recording'>recording</a></li>
                <li className="mb-2"><a>about</a></li>
            </ul>
        </div>
    );
}
