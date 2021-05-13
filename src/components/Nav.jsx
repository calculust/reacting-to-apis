import styled from 'styled-components';
import logo from '../images/Studio_Ghibli_logo.svg'

const Nav = (props) => {
    let filmsActive, peopleActive = '';

    switch (props.active) {
        case 'films':
            filmsActive = 'nav-link disabled';
            break;
        case 'people':
            peopleActive = 'nav-link disabled';
            break;
        default:
            break;
    }
    
    return (
        <nav className="mb-5">
            <div className="row justify-content-center mb-3">
                <Logo className="rounded-3 border border-secondary shadow" onClick={() => props.setKey('home')} />
            </div>
            <div className="row">
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <NavLink className={filmsActive} onClick={() => props.setKey('films')}>Films</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={peopleActive} onClick={() => props.setKey('people')}>People</NavLink>
                    </li>
                </ul>                
            </div>
        </nav>
    )
}

const Logo = styled.button`
    width: 320px;
    height: 164px;
    background-color:white;
    background-image: url(${logo});
    background-position: center center;
    background-repeat: no-repeat;
    padding:10px;
`
const NavLink = styled.button`
    background-color:inherit;
    border: none;
    display: block;
    padding: .5rem 1rem;
    color: #0d6efd;
    text-decoration: none;
`

export default Nav
