import { useAtom } from "jotai"
import { mainQueryAtom, excludeIngredientsAtom, dietAtom, cuisineAtom, typeAtom, AllRecipesAtom, totalResultsAtom } from "../../atoms";
import { getAllRecipes } from "../../actions";
import { RefreshButton } from "../../icons";


const Filters = () => {

    const [recipes, setRecipes] = useAtom(AllRecipesAtom);

    const [mainQuery] = useAtom(mainQueryAtom)
    const [exIngredients, setExIngredients] = useAtom(excludeIngredientsAtom)
    const [diet, setDiet] = useAtom(dietAtom)
    const [cuisine, setCuisine] = useAtom(cuisineAtom)
    const [type, setType] = useAtom(typeAtom)


    const searchRecipe = async () => {
        await getAllRecipes(mainQuery, exIngredients, diet, cuisine, type).then((recipe) => {
            setRecipes(recipe.results)

        })

    }

    const handleCheckCuisine = (e) => {
        const { value, checked } = e.target;

        if (checked) {
            setCuisine(current => [...current, value])
        } else {
            const tempData = [...cuisine]
            if (tempData.includes(value)) {
                let val = tempData.indexOf(value)
                tempData.splice(val, 1)
                setCuisine(tempData)
            }
        }
    }

    const handleCheckType = (e) => {
        const { value, checked } = e.target;

        if (checked) {
            setType(current => [...current, value])
        } else {
            const tempData = [...type]
            if (tempData.includes(value)) {
                let val = tempData.indexOf(value)
                tempData.splice(val, 1)
                setType(tempData)
            }
        }
    }

    return (
        <div className="
        mobile:mb-5
        tablet:z-40">
            <div className="
            mobile:flex
            mobile:flex-col
            mobile:justify-start
            pb-1
            mb-2
            border-b-2
            border-gray-950
            ">
                <label className="font-bold
                mb-px">Exclude Ingredients:</label>
                <input className="
                bg-[#f2f2f0]
                text-gray-950
                border-b-2
                border-[#490f0d]
                mobile:w-48" value={exIngredients} onChange={(e) => setExIngredients(e.target.value)} type="text" placeholder="e.g. salt,pepper,butter" />
            </div>

            <div className="
            mobile:flex
            mobile:flex-col
            mobile:justify-start
            mb-2
            pb-1
            border-b-2
            border-gray-950">
                <label className="
                font-bold
                mb-px" htmlFor="diet">Diet: </label>
                <select className="
                bg-[#f2f2f0]
                w-48" name="diet" defaultValue={diet} onChange={(e) => setDiet(e.target.value)}>
                    <option disabled value='' >Select Diet</option>
                    <option value="glutenfree">Gluten Free</option>
                    <option value="dairyfree">Dairy Free</option>
                    <option value="ketogenic">Ketogenic</option>
                    <option value="vegetarian">Vegetarian</option>
                    <option value="lactoovovegetarian">Lacto Ovo Vegetarian</option>
                    <option value="vegan">Vegan</option>
                    <option value="audi">Pescetarian</option>
                    <option value="paleolithic">Paleo</option>
                    <option value="primal">Primal</option>
                    <option value="lowFodmap">Low FODMAP</option>
                    <option value="whole 30">Whole30</option>
                    <option value="">NONE</option>
                </select>
            </div>
            <div className="tablet:flex
            tablet:flex-row
            tablet:justify-between">

                <div className="
                mobile:flex
                mobile:flex-col
                mobile:border-b-2
                mobile:border-gray-950
                tablet:border-none
                mb-2
                ">
                    <label className="
                    font-bold
                    mb-px">Cuisine:</label>
                    <div className="">
                        <input className="mr-2 accent-[#f7c37a]  " onChange={handleCheckCuisine} type="checkbox" name="" id="" value='American' />American <br />
                        <input className="mr-2 accent-[#f7c37a]  " onChange={handleCheckCuisine} type="checkbox" name="" id="" value='Chinese' />Chinese <br />
                        <input className="mr-2 accent-[#f7c37a] " onChange={handleCheckCuisine} type="checkbox" name="" id="" value='European' />European <br />
                        <input className="mr-2 accent-[#f7c37a] " onChange={handleCheckCuisine} type="checkbox" name="" id="" value='Korean' />Korean <br />
                        <input className="mr-2 accent-[#f7c37a] " onChange={handleCheckCuisine} type="checkbox" name="" id="" value='Japanese' />Japanese <br />
                        <input className="mr-2 accent-[#f7c37a] " onChange={handleCheckCuisine} type="checkbox" name="" id="" value='Indian' />Indian <br />
                        <input className="mr-2 accent-[#f7c37a] " onChange={handleCheckCuisine} type="checkbox" name="" id="" value='Greek' />Greek <br />
                        <input className="mr-2 accent-[#f7c37a] " onChange={handleCheckCuisine} type="checkbox" name="" id="" value='Mediterranean' />Mediterranean <br />
                        <input className="mr-2 accent-[#f7c37a] " onChange={handleCheckCuisine} type="checkbox" name="" id="" value='Mexican' />Mexican <br />
                        <input className="mr-2 accent-[#f7c37a] " onChange={handleCheckCuisine} type="checkbox" name="" id="" value='Spanish' />Spanish <br />
                        <input className="mr-2 accent-[#f7c37a] " onChange={handleCheckCuisine} type="checkbox" name="" id="" value='Thai' />Thai <br />
                        <input className="mr-2 accent-[#f7c37a] " onChange={handleCheckCuisine} type="checkbox" name="" id="" value='French' />French <br />
                    </div>

                </div>
                <div className="
                mobile:flex
                mobile:flex-col
                mobile:border-b-2
                mobile:border-gray-950
                tablet:border-none">
                    <label className="font-bold mb-px">Dish Type:</label>
                    <div>
                        <input className="mr-2 accent-[#f7c37a] " onChange={handleCheckType} type="checkbox" name="" id="" value='sidedish' />Side Dish <br />
                        <input className="mr-2 accent-[#f7c37a] " onChange={handleCheckType} type="checkbox" name="" id="" value='maincourse' />Main Course <br />
                        <input className="mr-2 accent-[#f7c37a] " onChange={handleCheckType} type="checkbox" name="" id="" value='dessert' />Dessert <br />
                        <input className="mr-2 accent-[#f7c37a] " onChange={handleCheckType} type="checkbox" name="" id="" value='appetizer' />Appetizer <br />
                        <input className="mr-2 accent-[#f7c37a] " onChange={handleCheckType} type="checkbox" name="" id="" value='salad' />Salad <br />
                        <input className="mr-2 accent-[#f7c37a] " onChange={handleCheckType} type="checkbox" name="" id="" value='bread' />Bread <br />
                        <input className="mr-2 accent-[#f7c37a] " onChange={handleCheckType} type="checkbox" name="" id="" value='breakfast' />Breakfast <br />
                        <input className="mr-2 accent-[#f7c37a] " onChange={handleCheckType} type="checkbox" name="" id="" value='soup' />Soup <br />
                        <input className="mr-2 accent-[#f7c37a] " onChange={handleCheckType} type="checkbox" name="" id="" value='beverage' />Beverage <br />
                        <input className="mr-2 accent-[#f7c37a] " onChange={handleCheckType} type="checkbox" name="" id="" value='sauce' />Sauce <br />
                        <input className="mr-2 accent-[#f7c37a] " onChange={handleCheckType} type="checkbox" name="" id="" value='marinade' />Marinade <br />
                        <input className="mr-2 accent-[#f7c37a] " onChange={handleCheckType} type="checkbox" name="" id="" value='fingerfood' />Fingerfood <br />
                        <input className="mr-2 accent-[#f7c37a] " onChange={handleCheckType} type="checkbox" name="" id="" value='snack' />Snack <br />
                        <input className="mr-2 accent-[#f7c37a] " onChange={handleCheckType} type="checkbox" name="" id="" value='drink' />Drink <br />
                    </div>

                </div>
            </div>

            <div className="mobile:flex mobile:justify-center tablet:border-t-2 tablet:border-gray-950">
                <button className="border-2 border-[#b22f25] rounded p-1 flex flex-row align-center items-center mobile:mt-5 " onClick={searchRecipe}><RefreshButton width={25} height={25} />Refresh</button>
            </div>


        </div>
    )
}

export default Filters