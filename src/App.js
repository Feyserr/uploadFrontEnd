import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Menu from './components/Menu/Menu';
import editarFuncionarios from './pages/EditarFuncionarios/editarFuncionarios';
import Home from './pages/Home/index';
import ListaFuncionarios from './pages/ListaFuncionarios/listaFuncionarios';
import './App.css';


export default function App(){
  return (
    <BrowserRouter >
      <Menu/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route  path="/ListarFuncionarios" component={ListaFuncionarios} />
        <Route  path="/EditarFuncionarios/:id" component={editarFuncionarios} />
        <Route render={() => <Redirect to="/" />} />
      
      </Switch>
    
    
    </BrowserRouter>


  )

}