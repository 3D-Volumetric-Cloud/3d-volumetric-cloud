import CommentList from "@/components/CommentList";
import RecordButton from "./RecordButton";
import RecordingDisplay from "./RecordingDisplay";



export default function Recording() {
    
    const testComments = [
        {
            message: 'good video',
            userName: 'Bart4'
        },
        {
            message: 'didnt like it',
            userName: 'Justin'
        }
    ];
    
    
    return (
        <div className="flex flex-row justify-center">
            <div className="flex flex-col items-center">
                <p className="text-4xl text-slate-800 mb-6">Recording</p>
                <RecordingDisplay/>
                <RecordButton/>
                <CommentList comments={testComments}/>
            </div>
        </div>
    );
}
