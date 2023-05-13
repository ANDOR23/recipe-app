import { useAtom } from "jotai"
import { getAllRecipesByIngredients } from "../../actions"
import { IngredientsRecipesAtom, IngredientsQueryAtom } from "../../atoms"
import IngredientsRecipeCard from "./IngredientsRecipeCard"
import { SearchIcon, CroissantIcon } from "../../icons"
import { useState } from "react"

const IngredientsRecipes = () => {

    const [query, setQuery] = useAtom(IngredientsQueryAtom)
    const [bool, setBool] = useState(false)
    const [recipes, setRecipes] = useAtom(IngredientsRecipesAtom)

    const searchRecipe = async (query) => {
        await getAllRecipesByIngredients(query).then((recipe) => {
            setRecipes(recipe)
            setBool(true)
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(query);
    }

    return (
        <div className="
        tablet:flex
        tablet:flex-row
        tablet:justify-evenly
        bg-[#f2f2f0]
        font-poppins
        desktop:mb-60
        p-4">
            <div className="    
            mb-2">
                <h1 className="text-3xl font-bold font-playfair italic text-center mb-5">Find by ingredients</h1>
                <form className="
                flex
                mobile:flex-row
                mobile:justify-start
                tablet:flex-col
                mb-2" onSubmit={handleSubmit}>
                    <label className="font-bold mb-px">Enter ingredients: </label>
                    <div className="
                    mobile:flex
                    mobile:flex-row
                    mobile:justify-start
                    mobile:mb-5
                    ">
                        <input value={query} onChange={(e) => setQuery(e.target.value)} type="text" placeholder="e.g. flour,butter,eggs" className="
                        text-gray-950
                        border-b-2
                        border-[#490f0d]
                        bg-[#f2f2f0]
                        mobile:w-36
                        mr-3" />
                        <button className="" onClick={() => searchRecipe(query)}><SearchIcon width={25} height={25} /></button>
                    </div>
                </form>
            </div>
            {bool ? <div className=" tablet:w-[833px] tablet:mt-10 tablet:ms-8 desktop:w-[600px] desktop:flex desktop:flex-wrap desktop:items-center desktop:justify-between">{recipes.map((recipe) => { return (<IngredientsRecipeCard data={recipe} />) })}</div> : <div className=" tablet:w-[600px] flex justify-center m-8"><CroissantIcon className={" mobile:h-56 tablet:h-72 desktop:h-96 desktop:mb-96"} /></div>}
        </div>
    )
}

export default IngredientsRecipes