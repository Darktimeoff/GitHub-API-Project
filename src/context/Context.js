import React from 'react';
import { AlertState } from './alert/AlertState';
import { GithubState } from './github/GithubState';

export const Context = ({children}) => (
    <GithubState>
        <AlertState>
            {children}
        </AlertState>
    </GithubState>
)