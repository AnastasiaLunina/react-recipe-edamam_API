import './Recipes.css';

function Recipes({label, calories, ingredientLines, image}) {
    return(
        <div>
            <h2>{label}</h2>
            <img src={image} alt='food' className="recipe-image"/>
            <p>{calories.toFixed()} calories</p>
            <ul className='recipe-list'>
                {ingredientLines.map((ingredient, index) => (
                    <li key={index} className='recipe-list-item'>{ingredient}</li>
                ))}
            </ul>
        </div>
    )
}

export default Recipes;