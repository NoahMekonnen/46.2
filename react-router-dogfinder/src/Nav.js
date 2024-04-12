import { Link } from "react-router-dom"

const Nav = ({dogs}) =>{

    return(
       <nav>
        {dogs.map(dog => <Link to={`/${dog}`}>
            {dog}
            </Link>)}
       </nav>
    )
}

export default Nav