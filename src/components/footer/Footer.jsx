import { Link } from "react-router-dom";
import { GithubIcon, GmailIcon, LinkedInIcon } from "../../icons";

const Footer = () => {

    return (
        <div className="
        relative
        m-auto
        font-poppins
        text-white	
        flex
        justify-center
        mobile:bg-[#b22f25]
        mobile:h-[410px]
        mobile:w-full
        tablet:h-44
        tablet:m-auto
        ">
            <div className="
            mobile:flex 
            mobile:flex-col
            tablet:flex-row
            mobile:p-[20px]
            tablet:p-[10px]
            tablet:flex
            tablet:justify-center
            desktop:flex
            desktop:justify-start">
                <div className="
                mobile:flex 
                mobile:flex-wrap 
                tablet:align-baseline 
                tablet:flex 
                tablet:pt-4 
                tablet:flex-row">
                    <div className="
                    tablet:mr-[15px]
                    mobile:mr-[20px]
                    mobile:mb-[20px]
                    mobile:flex
                    mobile:flex-col
                    desktop:mr-[100px]">
                        <h2 className="text-xl font-bold mb-[25px]">Navigate</h2>
                        <Link className="" to='/'>Home</Link>
                        <Link className="" to='/complexSearch'>Search Recipes</Link>
                        <Link to='/byIngredients'>What's in your fridge?</Link>
                    </div>
                    <div className="
                    mobile:mr-[50px]  
                    mobile:mb-[20px] 
                    mobile:mr-[20px]
                    tablet:mr-[15px]   
                    desktop:mr-[100px]">
                        <h1 className=" text-xl font-bold mb-[25px]">Made By</h1>
                        <h5>Andrés Orozco Ríos | Full Stack Developer</h5>
                    </div>
                    <div className="
                    mobile:flex
                    mobile:flex-col
                    mobile:mb-[20px]">
                        <h2 className="text-xl font-bold mb-[25px]">Contact Me</h2>
                        <div className="
                        flex
                        flex-row
                        justify-evenly">
                            <a className='' href="https://www.linkedin.com/in/andorozco/" target="_blank"><LinkedInIcon /></a>
                            <a className='' href="https://github.com/ANDOR23" target="_blank" ><GithubIcon /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;