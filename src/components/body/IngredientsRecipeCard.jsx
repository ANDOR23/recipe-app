import { useNavigate } from "react-router-dom"

const IngredientsRecipeCard = ({ data }) => {

    const navigation = useNavigate();

    const showRecipe = async (id) => {
        navigation(`/recipe/${id}`)
    }

    return (
        <div className="
        bg-[#dadad8]
        mobile:mb-5
        flex
        mobile:flex-wrap
        font-poppins
        justify-evenly
        rounded-lg
        shadow-lg
        tablet:flex
        tablet:flex-row
        tablet:items-center
        tablet:justify-evenly
        desktop:flex
        desktop:flex-col
        desktop:justify-center
        desktop:items-center
        desktop:px-6" onClick={() => showRecipe(data.id)}>
            <p className="
            text-center
            mobile:font-bold
            italic
            font-playfair
            my-3
            mobile:text-3xl
            tablet:px-20
            desktop:font-bold
            desktop:text-2xl
            desktop:px-4
            desktop:w-60">{data.title}</p>
            <img className="
            mobile:w-56
            tablet:mb-4
            desktop:w-48
            rounded-lg" src={data.image} />
            <div className="
            px-8
            my-3
            mobile:flex
            mobile:flex-col
            mobile:justify-start
            mobile:w-80
            tablet:w-[208px]">
                <div className="">Missed Ingredients</div>
                <div>{data.missedIngredients?.map(item => { return (<ul className=" list-disc marker:text-[#490f0d] list-inside font-bold"><li>{item.name}</li></ul>) })}</div>
            </div>
        </div>
    )
}

export default IngredientsRecipeCard