import Logo from '../assets/cook_it_up.svg'

function Header(){
    return (
        <header>
            <div className='header-div'>
                <img src={Logo} alt="logo" />
                <h1>Cook it Up</h1>
            </div>
        </header>
    )
}

export default Header;