interface CommentData {
    message: string,
    userName: string,
}


export default function CommentList({comments}: {comments: CommentData[]}) {
    return (
        <div className="fixed right-20 top-40 rounded-l-lg">
            {comments.map((comment, index) => (
                <Comment data={comment} key={index}/>
            ))}
        </div>
    );
}


function Comment({data}: {data: CommentData}) {
    return (
        <div className="bg-slate-200 rounded-lg px-4 py-2 mx-2 my-4 border-2 border-slate-400 min-w-80">
            <p className="text-xl text-slate-950">{data.message}</p>
            <p className="text-slate-500 italic">{data.userName}</p>
        </div>
    );
}
