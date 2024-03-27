export default function SearchBar() {
    return (
        <div>
            <a className="logo">
                <img src='logo.png' alt='Official logo' width='100px' height='50px'/>
            </a>
            <div className="rounded-lg bg-blue-900 min-w-60 min-h-8 flex justify-center">
                <input className="text-blue-200 bg-blue-900 outline-none" type='text' placeholder="Search"/>
            </div>
        </div>
    );
}