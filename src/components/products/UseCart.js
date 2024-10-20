import { useContext } from 'react';
import { ProductContext } from '../../contexts/CartContext';
import { categories as allCategories } from '../../constants/categories'; 

export const useCart = () => {
    return useContext(ProductContext);
};

export const getFilteredCategories = (path) => {
    return allCategories.filter(category => category.path === path);
};

export const categories = allCategories;