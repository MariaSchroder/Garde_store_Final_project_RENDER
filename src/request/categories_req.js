import { loadCategories } from "../store/reducers/categories";

export const load_categories = dispatch => {
    fetch('https://backend-test-qeyy.onrender.com/categories/all')
        .then(resp => resp.json())
        .then(json => dispatch(loadCategories(json)))
}

