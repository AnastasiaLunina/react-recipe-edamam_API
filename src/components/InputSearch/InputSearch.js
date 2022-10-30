import React, { useState, useEffect } from 'react';

import Recipes from '../Recipes/Recipes';

import './InputSearch.css'
import icon from '../../img/icon.png';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)
 
const InputSearch = () => {
    const MY_ID = 'a914f6f1';
    const MY_KEY = '048fdc4ba5cd5cadc0239dff178affbf';
    
    const [mySearch, setMySearch] = useState('');
    const [myRecipes, setMyRecipes] = useState([]);
    const [wordSubmitted, setWordSubmitted] = useState('honey');

    useEffect(() => {
      async function fetchData() {
        // You can await here
        const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}
        `);
        const data = await response.json();
        // console.log(data.count)
        if (data.count === 0) {
            MySwal.fire('No recipes found.');
            setMySearch('');
        }

        setMyRecipes(data.hits)
      }
      fetchData();
    }, [wordSubmitted]);

    const myRecipeSearch = (e) => {
        setMySearch(e.target.value)
    }

    const finalSearch = (e) => {
        e.preventDefault();
        setWordSubmitted(`${mySearch} + 'honey'`);
        setMySearch('')
    }

    return (
        <div>
            <h2>Search through the best honey recipes</h2>
            <div className='center'>
                <form className='form' onSubmit={finalSearch}>
                    <input className='input-field' 
                           placeholder='Serch by ingredients e.g. egg shrimp'
                           onChange={myRecipeSearch}
                           value={mySearch}
                           type="text" 
                           spellCheck="true"/>
                    <button className='search-button'>
                        <img src={icon} alt='bee' className='search-button-img'/>
                    </button>
                </form>
            </div>
            {myRecipes.map((element, index) => (
                <Recipes label={element.recipe.label}
                         calories={element.recipe.calories}
                         ingredientLines={element.recipe.ingredientLines}
                         image={element.recipe.image}
                         key={index}/>
            ))}
        </div>
    );
}

export default InputSearch;