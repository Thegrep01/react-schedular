import React from 'react';

import './App.scss';
import Header from '../header/header';
import Schedular from '../schedular/schedular';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';

const cache = new InMemoryCache();


const client = new ApolloClient({
    uri: 'http://localhost:8080/graphql',
    cache
});

const App: React.FC = () => {
    return (
        <ApolloProvider client={client}>
            <div className='app'>
                <Header />
                <div className='main'>
                    <Schedular />
                </div>
            </div>
        </ApolloProvider>
    );
};

export default App;
