import { Link } from "react-router-dom";

const Article = (props) => {
    return (
        <div className="">
            <Link to={"/detail/"+props.id}><img src={props.thumbnail} className="thumbnail" class="img-fluid" /></Link>
            <Link to={"/detail/"+props.id}><h2 className="title">{props.title}</h2></Link>
        </div>
    );
};

export default Article;