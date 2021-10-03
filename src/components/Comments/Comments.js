import './Comments.css';
function Comments(props) {
    if(props.comments){
        return(
            props.comments.map(comment => {
                return <div className="comment"><div className="img inline" style={{backgroundImage: 'url("' + comment.user.picture + '")'}}></div><p className="inline">{comment.comment}</p></div>
            })
        );
    }else{
        return(
            <div></div>
        )
    }
    
}
export default Comments;