export default function Button({text, clickHandler}: {text: string, clickHandler: () => void}) {
    return (
        <a onClick={clickHandler} className="bg-gray-800 rounded-lg px-4 py-2 border-gray-600 border-2">
            {text}
        </a>
    );
}
