import { useState } from "react"
import RecipeCard from "./RecipeCard";
import { getAllRecipes } from "../../actions";
import { AllRecipesAtom, mainQueryAtom } from "../../atoms";
import { useAtom } from "jotai";
import Filters from "./Filters";
import { SearchIcon, FilterIcon, CroissantIcon } from "../../icons";


const AllRecipes = () => {

    const [open, setOpen] = useState(false)
    const [bool, setBool] = useState(false)
    const [recipes, setRecipes] = useAtom(AllRecipesAtom);

    const [query, setQuery] = useAtom(mainQueryAtom);

    const searchRecipe = async (query) => {
        await getAllRecipes(query).then((recipe) => {
            setRecipes(recipe.results)
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
        desktop:flex
        desktop:flex-row
        desktop:justify-evenly
        bg-[#f2f2f0]
        font-poppins
        desktop:mb-60
        p-4">
            <div className="
            mobile:w-72
            tablet:w-[550px]
            desktop:w-80
            mr-8
            mb-2
            ">
                <h1 className="text-3xl font-bold font-playfair italic text-center mb-5">Complex Search</h1>
                <form className="
                mobile:flex
                mobile:flex-row
                mobile:align-center
                mobile:items-center
                mobile:justify-between
                tablet:flex
                tablet:flex-row
                tablet:justify-center
                " onSubmit={handleSubmit}>
                    <label className="font-semibold tablet:mr-2">Enter recipe: </label>
                    <input value={query} onChange={(e) => setQuery(e.target.value)} type="text" placeholder="e.g. fried eggs" className="
                    bg-[#f2f2f0]
                    mobile:w-32
                    text-gray-950
                    border-b-2
                    border-[#490f0d]
                    tablet:mr-2
                    "/>
                    <button className="
                     " onClick={() => searchRecipe(query)}><SearchIcon width={25} height={25} /></button>
                </form>

                <div className="
                mobile:flex 
                mobile:justify-center">
                    <button className="
                    border-2 
                    border-[#b22f25] 
                    rounded 
                    p-1
                    mb-2
                    flex 
                    flex-row 
                    align-center 
                    items-center 
                    mobile:mt-2
                    " onClick={() => setOpen(!open)}><FilterIcon width={25} height={25} />Filters</button>
                </div>
                <div className="">
                    {open ? (
                        <Filters />
                    ) : null}

                </div>
            </div>

            {bool ? <div className="tablet:w-[833px] tablet:mt-10 tablet:ms-8 desktop:w-[600px] desktop:flex desktop:flex-wrap desktop:items-center desktop:justify-between">{recipes.map((recipe) => { return (<RecipeCard data={recipe} />) })}</div> : <div className=" tablet:w-[600px] flex justify-center m-8"><CroissantIcon className={" mobile:h-56 tablet:h-72 desktop:h-96 desktop:mb-96"} /></div>}

        </div>
    )
}

export default AllRecipes