import React from "react";
import { Link } from "react-router-dom";
import s from './index.module.css'


export default function CategoriesSectionCard({ id, title, image }) {
  
  return (
    <div className={s.categories_section}>
      
      <Link to={`/categories/${id}`}>
        <img src={`https://backend-test-qeyy.onrender.com${image}`} alt={ title } />
        <p>{ title }</p>
      
      </Link>
    </div>
  );
}


