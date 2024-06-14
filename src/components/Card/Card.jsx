import { Link } from "react-router-dom"
import './Card.css'

export default function Card(props) {
    const item = props.item

    return (
        <Link to={`/item/${item.id}`} className="link">
            <div className="card">
                <h2>{item.name}</h2>
                <div className="tags">
                    <div>Village: {item.personal?.affiliation?.[0] ?? 'Undefined'}</div>
                    <div>Team: {item.personal?.team?.[0] ?? 'Undefined'}</div>
                    <div>Rank: {item.rank?.ninjaRank?.["Part I"] ?? 'Undefined'}</div>
                </div>
                <img src={item.images[0]} />
            </div>
        </Link>
    )
}