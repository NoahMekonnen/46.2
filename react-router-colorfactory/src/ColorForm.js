import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ColorForm = ({ colors, setColors }) => {
    const INITIAL_STATE = {colorName:"", colorValue:""}
    const navigate = useNavigate()
    const [formColor, setFormColor] = useState(INITIAL_STATE)

    const handleNameChange = (e) => {
        const { value } = e.target
        setFormColor(colorInfo => ({...colorInfo, colorName:value }))
    }

    const handleColorChange = (e) =>{
        const { value } = e.target
        setFormColor(colorInfo => ({...colorInfo, colorValue:value }))
    }

    const handleSubmit = (e) => {
        const name = formColor['colorName']
        const value = formColor['colorValue']
        e.preventDefault()
        setColors(values => ([{[name]: value}, ...values]))
        setFormColor(INITIAL_STATE)
        navigate('/colors')
    }

    return (
        <div className="ColorForm">
            <form onSubmit={handleSubmit} className="ColorForm-form">
                <label htmlFor="color-name">Color name:</label>
                <input id="color-name" onChange={handleNameChange} />
                <label htmlFor="color-value">Color value:</label>
                <input id="color-value" onChange={handleColorChange}  type="color" />
                <button>Add this color</button>
            </form>
        </div>
    )
}

export default ColorForm