import axios from "axios"
let recipes = {};
let recipe = {};
let ingredientsRecipes = {};
let randomRecipes = {};
let similarRecipes = {};
const app_key = "9d2ee654e0fd46508614f0d72c04b256";


export const getAllRecipes = async (mainQuery, excludeIngredients, diet, cuisine, type) => {
    await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${app_key}&query=${mainQuery}&number=10&addRecipeInformation=true&addRecipeNutrition=true&instructionsRequired=true&excludeIngredients=${excludeIngredients}&diet=${diet}&cuisine=${cuisine}&type=${type}`)
        .then((response) => {
            recipes = response.data
        })
        .catch((error) => {
            recipes = error.response.data.code
            console.error('Error', error.response.data.code);
        })
    return recipes
}

export const getAllRecipesByIngredients = async (query) => {
    await axios.get(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${app_key}&ingredients=${query}&number=10&ignorePantry=false`)
        .then((response) => {
            ingredientsRecipes = response.data
        })
        .catch((error) => {
            console.log(error)
        })
    return ingredientsRecipes
}

export const getRandomRecipes = async () => {
    await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${app_key}&number=10`)
        .then((response) => {
            randomRecipes = response.data
        })
        .catch((error) => {
            console.log(error);
        })
    return randomRecipes
}

export const getSimilarRecipes = async (id) => {
    await axios.get(`https://api.spoonacular.com/recipes/${id}/similar?apiKey=${app_key}&number=10`)
        .then((response) => {
            similarRecipes = response.data
        })
        .catch((error) => {
            console.log(error);
        })
    return similarRecipes
}

export const getRecipe = async (id) => {
    await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${app_key}&includeNutrition=true`)
        .then((response) => {
            recipe = response.data
        })
        .catch((error) => {
            console.log(error);
        })
    return recipe
}