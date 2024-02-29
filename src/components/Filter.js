import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Filter() {
    return (
        <div className='FilterComp'>
            <ul>
            <h2>Filter component</h2>
            <label>Price</label><br />
            <label>Min</label> <input type='range' min={10} max={1000}/> to <label>Max</label>
            <input type='range' min={2000} max={10000}/><br />
            <input type='checkbox' />
            <label>Flipkart Assured</label><br />
            
            <label>Customer Rating</label><br />
            <input type='checkbox' /><label>4 <FontAwesomeIcon icon="fa-solid fa-star" /> & Above</label><br />
            <input type='checkbox' /><label>3 <FontAwesomeIcon icon="fa-solid fa-star" />& Above</label><br />
            <input type='checkbox' /><label>2 <FontAwesomeIcon icon="fa-solid fa-star" /> </label><br />
            <input type='checkbox' /><label>1 <FontAwesomeIcon icon="fa-solid fa-star" /></label><br />
            <label>Availabitliy</label><br />
            <input type='checkbox' /><label>Include Out of Stock</label>
            </ul>
           
        </div>
    );
}

export default Filter;