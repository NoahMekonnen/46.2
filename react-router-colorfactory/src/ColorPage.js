import { useEffect } from 'react';
import { useParams, Link, Navigate, useNavigate } from 'react-router-dom';

const ColorPage = ({ colors }) => {
    const { color } = useParams()
    const navigate = useNavigate()
    const finalColorDict = colors.find(colorDict => colorDict[color] !== undefined)
    console.log('bye')
    useEffect(() => {
        console.log('hi')
        if (!finalColorDict) {
            navigate('/colors')
        }
    })
    return (
        <div className="ColorPage" style={{ backgroundColor: finalColorDict[color] }}>
            <p className="ColorPage-Text">THIS IS {color.toUpperCase()}</p>
            <p className="ColorPage-Text">ISN'T THIS BEAUTIFUL</p>
            <Link to="/colors" className="ColorPage-Text">GO BACK</Link>
        </div>
    )

}

export default ColorPage