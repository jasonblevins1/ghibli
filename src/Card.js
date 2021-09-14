import "./card.css";
function Card(props){
    return<div>
        
        <div className ="card">
        <h1>{props.movie.title}</h1>
        <p>{props.movie.description}</p>

    </div>
        </div>;
}
export default Card;