import {Link} from 'react-router-dom';


const Home = ({colors, setColors}) =>{

    return(
        <div className="Home">
            <h3>Welcome to the Color Factory.</h3>
            <Link to="/colors/new">Add Color</Link>
            <p>Please Select a Color</p>
        <ul>
            {colors.map((colorDict,idx) => 
            <li key={idx}><Link to={`/colors/${Object.keys(colorDict)[0]}`}>
                {Object.keys(colorDict)[0]}
            </Link>
            </li>
)}
        </ul>
        </div>
    )
}

export default Home