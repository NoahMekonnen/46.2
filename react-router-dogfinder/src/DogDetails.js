import { useParams, useHistory } from 'react-router-dom';

const DogDetails = ({dogs}) =>{
    const { name }= useParams()
    const history = useHistory()
    const finalDog = dogs.values().find(dog => dog.name == name)
    if (finalDog){
        return(
            <div>
                <p>Name: {finalDog.name}</p>
                <img src={finalDog.src}/>
                <p>Age: {finalDog.age}</p>
                <ul>
                    {finalDog.facts.map(fact => <li>
                        {fact}
                    </li>)}
                </ul>
            </div>
        )
    }
    history.push('/dogs')
}

export default DogDetails