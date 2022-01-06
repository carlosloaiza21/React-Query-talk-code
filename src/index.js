import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TodoPage from './Pages/TodoPage';
import TodoRQPage from './Pages/TodoRQPage';
import {QueryClientProvider, QueryClient} from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools';

/*

    La app esta envuelta en React-router para poder mostrar los cambios de pantalla y asi
    probar funcionalidades como refetchOnMount y el potencial del Cache

    QueryClientProvider es el componente que envuelve nuestra app en React-Query, este componente
    necesita una prop llamada cliente que es el cliente que nos permite interactuar con todo el
    ecosistema de React-Query por lo cual se crea una instancia (new QueryClient() ) y se pasa como prop

    const client=new QueryClient();
    <QueryClientProvider client={client}></QueryClientProvider>

    <ReactQueryDevtools /> es un componente que nos permite tener la herramienta para inspeccionar
    las peticiones y realizar seguimiento del cache de RQ

*/

const client=new QueryClient();

ReactDOM.render(
    <QueryClientProvider client={client}>
    <Router>
        <Routes>
            <Route path='/' element={<App />}/>
            <Route path='/react' element={<TodoPage />}/>
            <Route path='/react-query' element={<TodoRQPage />}/>
        </Routes>
    </Router>
    <ReactQueryDevtools />
    </QueryClientProvider>


,
document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
