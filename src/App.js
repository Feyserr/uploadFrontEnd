import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Menu from './components/Menu/Menu';
import editarFuncionarios from './pages/EditarFuncionarios/editarFuncionarios';
import Home from './pages/Home/index';
import listaFuncionarios from './pages/ListaFuncionarios/listaFuncionarios';
import './App.css';


export default function App(){
  return (
    <BrowserRouter >
      <Menu/>
      <Switch>
      <Route exacth path="/" component={Home} />
      <Route render={() => <Redirect to="/" />} />
      <Route  path="/ListarFuncionarios" component={listaFuncionarios} />
      <Route  path="/EditarFuncionarios" component={editarFuncionarios} />
      
      </Switch>
    
    
    </BrowserRouter>


  )

}