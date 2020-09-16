import React, {useContext} from 'react';
import { Search } from './../components/Search';
import { Card } from './../components/Card';
import { GithubContext } from './../context/github/GithubContext';

export const Home = () => {
    const {users, loading} = useContext(GithubContext)

    const usersCard = users.map((user, i) => (
        <div className="col-sm-4 mb-4" key={i}>
            <Card user={user}/>
         </div>
    ))

    return (
        <>
            <Search />
            <div className="row">
                {loading 
                    ? <p className="text-center">Загруз...</p> 
                    : usersCard
                }
            </div>
        </>
    )
}