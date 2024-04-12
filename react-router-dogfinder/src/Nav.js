import { Link } from "react-router-dom"

const Nav = ({dogNames}) =>{

    return(
       <nav className="Nav">
        {dogNames.map(dogName => <Link to={`/dogs/${dogName}`} className="Nav-Link">
            {dogName}
            </Link>)}
       </nav>
    )
}

export default Nav