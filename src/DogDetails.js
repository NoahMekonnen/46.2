import { useParams } from 'react-router-dom'

const DogDetails = ({dogs}) =>{
    const { name }= useParams()
    const finalDog = dogs.values().find(dog => dog.name == name)
    if (finalDog){
        return(
            <div>
                <p>Name: {finalDog.name}</p>
            </div>
        )
    }else{
        return(
            <p>HII</p>
        )
    }
}

export default DogDetails