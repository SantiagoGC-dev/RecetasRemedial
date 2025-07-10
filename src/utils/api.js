import axios from 'axios';

const API_URL = 'https://www.themealdb.com/api/json/v1/1/';

export default {
  async getRandomRecipes() {
    try {
      const response = await axios.get(`${API_URL}random.php`);
      return response.data.meals;
    } catch (error) {
      console.error(error);
      return [];
    }
  },

  async getCategories() {
    try {
      const response = await axios.get(`${API_URL}categories.php`);
      return response.data.categories;
    } catch (error) {
      console.error(error);
      return [];
    }
  },

  async getRecipesByCategory(category) {
    try {
      const response = await axios.get(`${API_URL}filter.php?c=${category}`);
      return response.data.meals;
    } catch (error) {
      console.error(error);
      return [];
    }
  },

  async getRecipeById(id) {
    try {
      const response = await axios.get(`${API_URL}lookup.php?i=${id}`);
      return response.data.meals[0];
    } catch (error) {
      console.error(error);
      return null;
    }
  },

  async searchRecipes(query) {
    try {
      const response = await axios.get(`${API_URL}search.php?s=${query}`);
      return response.data.meals;
    } catch (error) {
      console.error(error);
      return [];
    }
  }
};