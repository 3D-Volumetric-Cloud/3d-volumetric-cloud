'use client'

import { useState } from 'react';


export default function RecordButton() {
    
    const [isRecording, setIsRecording] = useState(false);
    
    const onClick = () => {
        setIsRecording(!isRecording);
    }
    
    return (
        <div 
            className="rounded-full bg-red-500 h-16 w-16 flex aspect-square items-center justify-center hover:brightness-110 brightness-transition"
            onClick={onClick}
        >
            play icon
        </div>
    );
}
