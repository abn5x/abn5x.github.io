import store from './items.json';
import Card from './Card';

export default function Portfolio() {
    return (
        <main className="portfolio-main">
            {
                store.items.map((item, i) => {
                    return <Card item={item} key={i} />
                })
            }
        </main>
    )
}