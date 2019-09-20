import React from 'react';
import style from './Form.module.css'
const Form = props => {
    return (
      
                <form
                onSubmit={props.onSubmit}
                 className={style.form} >
                <input
            onChange={props.onChange}
            className={style.searchBar}
            value={props.value}
            type="text"
            placeholder="search reacipe. e.g chicken"
            />
            <button
           
            className={style.searchBtn}
            type="submit">
                Search
            </button>

                </form>
            
    );
}


export default Form