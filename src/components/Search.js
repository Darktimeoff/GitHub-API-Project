import React, { useContext, useState } from 'react';
import { AlertContext } from './../context/alert/AlertContext';
import { GithubContext } from './../context/github/GithubContext';

export const Search = () => {
    const [inputValue, setValue] = useState('');
    const {show, hide} = useContext(AlertContext);
    const github = useContext(GithubContext);

    const onSubmit = event => {
        if(event.key !== 'Enter') return;

        github.clearUsers()

        if(inputValue.trim()) {
            hide()
            github.searchUsers(inputValue.trim())
        } else {
            show('Введите данные пользователя', 'warning');
        }
    }


    return (
        <div className="form-group">
            <input 
                type="text"
                className="form-control"
                placeholder="Введите ник Пользователя"
                onKeyPress={onSubmit}
                value={inputValue }
                onChange={event => setValue(event.target.value)}
            />
        </div>
    )
}