import RecordButton from "./RecordButton";



export default function Recording() {
    return (
        <div className="min-h-screen flex flex-row justify-center">
            <div>
                <p className="text-3xl flex flex-col justify-center">Recording</p>
                <RecordButton/>
            </div>
        </div>
    );
}
