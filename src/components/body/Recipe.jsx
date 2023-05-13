import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRecipe, getSimilarRecipes } from "../../actions";
import InfoAndIngredients from "./InfoAndIngredients";
import SimilarRecipesCard from "./SimilarRecipesCard";

const Recipe = () => {
    const { id } = useParams();
    const [data, setData] = useState([])
    const [similarRecipes, setSimilarRecipes] = useState([])

    useEffect(() => {
        getRecipe(id).then((response) => {
            setData(response)
        })
        getSimilarRecipes(id).then((response) => {
            setSimilarRecipes(response)
        })
    }, [id])

    if (data.instructions !== null) {
        return (
            <div className="
            font-poppins
            p-4">
                <InfoAndIngredients data={data} />
                <div className="
                tablet:px-14
                desktop:px-28">
                    <h2 className="
                    font-playfair
                    font-bold
                    text-2xl
                    italic
                    mobile:mb-2
                    ">Instructions</h2>
                    {data.analyzedInstructions?.[0].steps?.map((item, index) => {
                        return (
                            <div>
                                <p className="
                                font-bold
                                italic
                                mobile:mt-4
                                mobile:text-lg">Step {index + 1}</p>

                                <p className="
                                mobile:border-b-2
                                mobile:border-gray-500
                                mobile:mb-2
                                mobile:text-lg">{item.step}</p>
                                <div>
                                    <div className="
                                    font-playfair
                                    font-bold
                                    mobile:flex
                                    mobile:flex-row
                                    mobile:items-center
                                    mobile:align-center">
                                        Ingredients to use
                                    </div>
                                    <div className="
                                    mobile:flex
                                    mobile:flex-wrap
                                    mobile:justify-start
                                    mobile:border-b-2
                                    mobile:border-gray-500">
                                        {item.ingredients.length !== 0 ? item.ingredients.map(stepIngredients => {
                                            if (stepIngredients.id > 0) {
                                                return (
                                                    <ul><li className=" font-poppins font-normal not-italic text-base list-disc marker:text-[#490f0d] list-inside mobile:mr-4">{stepIngredients.name}</li></ul>
                                                )
                                            }
                                        }) : <p>No ingredients to use in this step.</p>}
                                    </div>
                                </div>
                                <div>
                                    <div className="
                                    font-playfair
                                    font-bold
                                    mobile:flex
                                    mobile:flex-row
                                    mobile:items-center
                                    mobile:align-center" >
                                        Equipment to use
                                    </div>
                                    <div className="mobile:flex
                                        mobile:flex-wrap
                                        mobile:justify-start
                                        mobile:border-b-2
                                        mobile:border-gray-500">
                                        {item.equipment.length !== 0 ? item.equipment.map(stepTools => {
                                            return (
                                                <ul><li className="font-poppins font-normal not-italic text-base list-disc marker:text-[#490f0d] list-inside mobile:mr-4">{stepTools.name}</li></ul>
                                            )
                                        }) : <p>No equipment to use in this step.</p>}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <h3 className="
                font-playfair
                font-bold
                text-2xl
                italic
                mobile:mt-4
                mobile:mb-2">Similar Recipes</h3>
                <div>{similarRecipes.map((recipe) => { return (<SimilarRecipesCard data={recipe} />) })}</div>
            </div>

        )
    } else {
        return (
            <div className="
            font-poppins
            p-4">
                <InfoAndIngredients data={data} />
                <div className="
                tablet:px-14
                desktop:px-28">
                    <h2 className="
                    font-playfair
                    font-bold
                    text-2xl
                    italic
                    mobile:mb-2">Instructions</h2>
                    <p className="
                    font-poppins
                    font-bold">To see full instructions check this <a href={data.sourceUrl}>link</a>!</p>
                </div>
                <h3 className="
                font-playfair
                font-bold
                text-2xl
                italic
                mobile:mt-4
                mobile:mb-2">Similar Recipes</h3>
                <div>{similarRecipes.map((recipe) => { return (<SimilarRecipesCard data={recipe} />) })}</div>
            </div>
        )
    }
}

export default Recipe