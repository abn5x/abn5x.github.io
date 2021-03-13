import { Link } from 'react-router-dom';


export default function Card({ item }) {
    return (
        <a href={item.url}>
            <div className="content-card">
                <div className="content-card__img" style={{ "backgroundImage": `url(${item.imageUrl})` }} alt="" />
                <h2>{item.title}</h2>
                <div className="content-card__text">
                    <p>{item.description}</p>
                </div>
            </div>
        </a>
    )
};