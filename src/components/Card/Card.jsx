export default function Card(props) {
    const item = props.item
    
    return (
        <div className="card">
            <h2>{item.name}</h2>
            <div className="tags">
                <div>Village: {item.personal.affiliation[0]}</div>
                <div>Team: {item.personal.team ? item.personal.team[0] : 'None'}</div>
                <div>Jutsu: {item.jutsu ? item.jutsu[0] : 'None'}</div>
                
            </div>
            <img src={item.images[0]} />
        </div>
    )
}