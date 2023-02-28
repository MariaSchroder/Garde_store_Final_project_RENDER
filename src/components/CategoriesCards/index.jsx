import React from 'react'; 
import { Link } from 'react-router-dom';
import s from './index.module.css' 


export default function CategoriesCards({ id, title, image }) { 
  
return ( 
  <div className={s.categories}> 
    
    <Link to={`/categories/${id}`}>
      <img src={`https://backend-test-qeyy.onrender.com${image}`} alt={ title } /> 
      <p className={s.categories_title}>{ title }</p> 
    </Link>
    
  </div> 
  ); 
}
