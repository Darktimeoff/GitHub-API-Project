import React from 'react';
import { Search } from './../components/Search';
import { Card } from './../components/Card';

export const Home = () => {
    const cards = new Array(15).fill('');

    return (
        <>
            <Search />
            <div className="row">
                {cards.map((_, i) => (
                    <div className="col-sm-4 mb-4" key={i}>
                        <Card />
                     </div>
                ))}
            </div>
        </>
    )
}