import { useState, useEffect } from "react"
import { getRandomRecipes } from "../../actions"
import RecipeCard from "./RecipeCard"


const MainContent = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        getRandomRecipes().then((response) => {
            setData(response.recipes)
        })
    }, []);

    return (
        <div className="
        h-full
        p-4">
            <h1 className="text-3xl font-bold font-playfair italic text-center mb-5">Popular Recipes</h1>
            <div className="  tablet:w-[600px] tablet:mt-10 tablet:ms-8 tablet:w-auto tablet:flex tablet:flex-wrap tablet:items-center tablet:justify-between">{data.map((recipe) => { return (<RecipeCard data={recipe} />) })}</div>
        </div>
    )
}

export default MainContent