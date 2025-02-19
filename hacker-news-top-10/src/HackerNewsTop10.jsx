import { useEffect, useState } from 'react';

const HackerNewsTop10 = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch(
            'https://hn.algolia.com/api/v1/search?tags=front_page&hitsPerPage=10'
        )
            .then(res => res.json())
            .then(data => setNews(data.hits))
            .catch(err => console.error('Error while fetching API: ', err));
    }, []);

    console.log(news);

    return (
        <div>
            <h1>Hacker News Top 10</h1>
            <ul style={{ listStyle: 'none' }}>
                {news.map(item => (
                    <li
                        key={item.objectID}
                        style={{ display: 'flex', alignItems: 'center' }}
                    >
                        <p>{item.author}: </p>
                        <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {item.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HackerNewsTop10;
