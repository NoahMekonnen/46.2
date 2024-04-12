import { useParams, Link } from 'react-router-dom';

const ColorPage = ({colors}) => {
    
    const { color } = useParams()
    console.log(colors,"Page")
    const colorValue = colors[color]
    return (
        <div className="ColorPage" style={{ backgroundColor: colorValue }}>
            <p className="ColorPage-Text">THIS IS {color.toUpperCase()}</p>
            <p className="ColorPage-Text">ISN'T THIS BEAUTIFUL</p>
            <Link to="/colors" className="ColorPage-Text">GO BACK</Link>
        </div>
    )
}

export default ColorPage