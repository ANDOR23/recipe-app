import { useNavigate } from "react-router-dom"


const RecipeCard = ({ data }) => {

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
        tablet:w-[379px]
        tablet:h-auto
        tablet:mr-6
        desktop:w-[275px]" onClick={() => showRecipe(data.id)}>
            <p className="
            text-center
            mobile:font-bold
            italic
            font-playfair
            my-3
            mobile:text-3xl
            tablet:px-6
            desktop:font-bold
            desktop:text-2xl
            desktop:px-4
             ">{data.title}</p>
            <img className="
            mobile:w-56
            desktop:w-48
            rounded-lg" src={data.image} />
            <div className="
            w-80
            my-3
            flex
            flex-row
            justify-evenly">
                <div className="
                flex
                flex-col
                items-center">
                    <p className="">Ready in</p><p className="font-bold">{data.readyInMinutes} mins.</p>
                </div>
                <div className="
                flex
                flex-col
                items-center
                px-2
                border-x-2
                border-[#c2c2c0]">
                    <p>Servings</p><p className="font-bold">{data.servings}</p>
                </div>
                <div className="
                flex
                flex-col
                items-center">
                    <p>Health Score</p><p className="font-bold">{data.healthScore}</p>
                </div>
            </div>
        </div>
    )
}

export default RecipeCard