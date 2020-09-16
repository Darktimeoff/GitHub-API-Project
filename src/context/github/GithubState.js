import React, { useReducer } from 'react';
import axios from 'axios';
import { GithubContext } from './GithubContext';
import { githubReducer } from './GithubReducer';
import { SET_LOADING, CLEAR_USERS, GET_REPOS, GET_USER, SEARCH_USERS } from './../types';

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

const withCreds = url => {
    return `${url}client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
}

export const GithubState = ({children}) => {
    const initialState = {
        user: {},
        users: [],
        loading: false,
        repos: []
    }

    const [state, dispatch] = useReducer(githubReducer, initialState);

    const searchUsers = async value => {
        setLoading();
        try {
            const {data} = await axios.get(withCreds(`https://api.github.com/search/users?q=${value}&`));  
            dispatch({type: SEARCH_USERS, payload: data.items});
        } catch (err) {
            console.error(err)
        }
    }

    const getUser = async name => {
        setLoading();
        try {
            const {data} = await axios.get(withCreds(`https://api.github.com/users/${name}?`));   
            dispatch({type: GET_USER, payload: data})
        } catch (err) {
            console.error(err)
        }
    }

    const getRepos = async name => {
        setLoading();
        try {
            const {data} = await axios.get(withCreds(`https://api.github.com/users/${name}/repos?per_page=5&`)); 
            dispatch({type: GET_REPOS, payload: data})
        } catch (err) {
            console.error(err)
        }
    }

    const clearUsers = () =>  dispatch({type: CLEAR_USERS});

    const setLoading = () =>  dispatch({type: SET_LOADING});

    const {user, users, repos, loading} = state;

    return (
        <GithubContext.Provider value={{
            setLoading, searchUsers, getRepos, getUser, clearUsers,
            users, user, repos, loading
        }}>
            {children}
        </GithubContext.Provider>
    )
}