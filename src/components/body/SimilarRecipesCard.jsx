import { useNavigate } from "react-router-dom"

const SimilarRecipesCard = ({ data }) => {
    const navigation = useNavigate();

    const showRecipe = async (id) => {
        navigation(`/recipe/${id}`)
    }

    return (
        <div className="
        bg-[#dadad8]
        mobile:mb-5
        mobile:p-2
        flex
        mobile:flex-wrap
        font-poppins
        justify-around  
        rounded-lg
        shadow-lg" onClick={() => showRecipe(data.id)}>
            <p className="
            text-center
            font-bold
            italic
            font-playfair
            mobile:text-3xl
            mobile:mb-2
            mobile:border-b-2 
            mobile:border-[#490f0d]">{data.title}</p>
            <div className="
            w-80
            flex
            mobile:flex-row
            mobile:justify-evenly">
                <div className="
                flex
                flex-col
                items-center">
                    <p className="">Ready in</p><p className="font-bold">{data.readyInMinutes} mins.</p>
                </div>
                <div className="
                mobile:border-r-2
                mobile:border-[#c2c2c0]">
                </div>
                <div className="
                flex
                flex-col
                items-center">
                    <p>Servings</p><p className="font-bold">{data.servings}</p>
                </div>
            </div>
        </div>
    )
}

export default SimilarRecipesCard