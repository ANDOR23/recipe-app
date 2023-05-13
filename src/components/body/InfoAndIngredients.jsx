import { useState } from "react";
import { SelectIcon } from "../../icons";

const InfoAndIngredients = ({ data }) => {
    const [cuisineOpen, setCuisineOpen] = useState(false)
    const [dishOpen, setDishOpen] = useState(false)
    const [wineOpen, setWineOpen] = useState(false)
    const [dietsOpen, setDietsOpen] = useState(false)
    return (
        <div>
            <h1 className="text-3xl font-bold font-playfair italic text-center mb-5">{data.title}</h1>
            <div className="
            flex
            mobile:justify-center
            mobile:mb-4
            ">
                <img className="mobile:w-64
                rounded-lg
                " src={data.image} />
            </div>
            <div className="text-justify mb-8" dangerouslySetInnerHTML={{__html: data.summary}}/> 
            <div className="
            tablet:px-14
            desktop:px-28">
                <div className="
                font-bold
                ">
                    <h2>Ready in: {data.readyInMinutes} minutes!</h2>
                    <h3>Servings: {data.servings}</h3>
                </div>
                <div className="
                mobile:flex
                mobile:flex-wrap
                mobile:justify-around
                mobile:my-8
                ">
                    <div>
                        <div className="
                        mobile:flex
                        mobile:flex-row
                        mobile:items-center
                        mobile:align-center
                        font-playfair
                        font-bold
                        text-lg
                        italic" onClick={() => setCuisineOpen(!cuisineOpen)}>Cuisines <SelectIcon width={20} height={20} />  </div>
                        {cuisineOpen ? (
                            <div>{data.cuisines.length !== 0 ? data.cuisines?.map(item => { return (<ul className="font-poppins font-normal not-italic text-base list-disc marker:text-[#490f0d] list-inside"><li>{item}</li></ul>) }) : <p className="font-poppins font-normal not-italic text-base">No cuisines.</p>}</div>
                        ) : null}
                    </div>
                    <div>
                        <div className="
                        mobile:flex
                        mobile:flex-row
                        mobile:items-center
                        mobile:align-center
                        font-playfair
                        font-bold
                        text-lg
                        italic" onClick={() => setDishOpen(!dishOpen)}>Dish Types <SelectIcon width={20} height={20} /> </div>
                        {dishOpen ? (
                            <div>{data.dishTypes.length !== 0 ? data.dishTypes?.map(item => { return (<ul className="font-poppins font-normal not-italic text-base list-disc marker:text-[#490f0d] list-inside"><li>{item}</li></ul>) }) : <p className="font-poppins font-normal not-italic text-base">No dish types.</p>}</div>
                        ) : null}
                    </div>
                    <div>
                        <div className="
                        mobile:flex
                        mobile:flex-row
                        mobile:items-center
                        mobile:align-center
                        font-playfair
                        font-bold
                        text-lg
                        italic" onClick={() => setWineOpen(!wineOpen)}>Wine Pairing <SelectIcon width={20} height={20} /> </div>
                        {wineOpen ? (
                            <div>{data.winePairing?.pairedWines.length !== 0 ? data.winePairing?.pairedWines.map(item => { return (<ul className="font-poppins font-normal not-italic text-base list-disc marker:text-[#490f0d] list-inside"><li>{item}</li></ul>) }) : <p className="font-poppins font-normal not-italic text-base">No wines.</p>}</div>
                        ) : null}
                    </div>
                    <div>
                        <div className="
                        mobile:flex
                        mobile:flex-row
                        mobile:items-center
                        mobile:align-center
                        font-playfair
                        font-bold
                        text-lg
                        italic" onClick={() => setDietsOpen(!dietsOpen)}>Diets <SelectIcon width={20} height={20} /> </div>
                        {dietsOpen ? (
                            <div>{data.diets.length !== 0 ? data.diets?.map(item => { return (<ul className="font-poppins font-normal not-italic text-base list-disc marker:text-[#490f0d] list-inside "><li className="">{item}</li></ul>) }) : <p className="font-poppins font-normal not-italic text-base">No diets.</p>}</div>
                        ) : null}
                    </div>
                </div>
            </div>
            <div className="
            tablet:px-14
            desktop:px-28">
                <h2 className="
                font-playfair
                font-bold
                text-2xl
                italic">Ingredients</h2>
                <div className="
                m-2">{data.extendedIngredients?.map(item => {
                    return (
                        <ul className="font-poppins font-normal not-italic text-base list-disc marker:text-[#490f0d] list-inside" ><li>{item.original}</li></ul>
                    )
                })}
                </div>
            </div>
        </div>
    )
}

export default InfoAndIngredients