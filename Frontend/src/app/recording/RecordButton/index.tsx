'use client'

import { useState } from 'react';



export default function RecordButton() {
    
    const [isRecording, setIsRecording] = useState(false);
    
    const onClick = () => {
        setIsRecording(!isRecording);
    }
    
    return (
        <div 
            className="rounded-full bg-red-500 h-20 w-20 flex items-center justify-center hover:bg-red-400"
            onClick={onClick}
        >
            play icon
        </div>
    );
}
