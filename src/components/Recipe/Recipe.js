import React from 'react'
import './Recipe.css'


const Recipe = (props) => {
    return (
        <div className="recipe">
           <h1>{props.recipe.label}</h1>
           <ul>
                {props.recipe.ingredientLines.map(e => <li>{e}</li>)} 
            </ul>
            <img src={props.recipe.image} />
        </div>
    );
}

export default Recipe