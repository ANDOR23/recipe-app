import { Link } from 'react-router-dom';
import { LogoIcon, MenuIcon } from '../../icons';
import { useState } from 'react';

const Navbar = () => {

    const [open, setOpen] = useState(false)
    return (
        <div className='
        relative
        w-full
        bg-[#b22f25]
        text-gray-100
        font-bold
        font-poppins'>
            <div className='
            flex
            items-center
            align-center
            justify-between
            mobile:p-[20px]
            tablet:p-[20px]
            desktop:p-[20px]'>
                <LogoIcon />
                <div onClick={() => setOpen(!open)} >
                    <MenuIcon className="tablet:hidden" />
                </div>
                <div className="
                mobile:hidden
                tablet:flex
                tablet:flex-row
                tablet:justify-evenly
                tablet:w-[450px]
                desktop:w-3/5">
                    <Link className="" to='/'>Home</Link>
                    <Link className="" to='/complexSearch'>Search Recipes</Link>
                    <Link to='/byIngredients'>What's in your fridge?</Link>
                </div>
            </div>

            {open ? (
                <div className='bg-[#b22f25] w-full py-3 mobile:px-[15px] tablet:hidden'>
                    <ul >
                        <li onClick={() => setOpen(!open)}><Link to='/'>Home</Link></li>
                        <li onClick={() => setOpen(!open)}><Link to='/complexSearch'>Search Recipes</Link></li>
                        <li onClick={() => setOpen(!open)}><Link to='/byIngredients'>What's in your fridge?</Link></li>
                    </ul>
                </div>
            ) : null}
        </div>
    )
}

export default Navbar