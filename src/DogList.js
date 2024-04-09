import {Link} from 'react-router-dom';

const DogList = ({dogs}) => {

    return(
        <>
            <ul>
                {dogs.map((dog,i) => {

                return <li key={i}>name: 
                    <Link  to={`/dogs/${dog.name}`}>{dog.name}</Link>
                    </li>
                }
            )}
            </ul>
        </>
    )
}

export default DogList