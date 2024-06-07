export default function Card(props) {
    const item = props.item
    
    return (
        <div className="card">
            <h2>{item.name}</h2>
            <div className="tags">
                <div>Nível: {item.level}</div>
                <div>Time: {item.team}</div>
                <div>Aldeia: {item.village}</div>
            </div>
            <img src={item.image} />
        </div>
    )
}