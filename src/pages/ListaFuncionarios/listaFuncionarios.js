import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Button} from '../../components/Button/index'
import {FlexWrapper} from '../ListaFuncionarios/style';
import '../ListaFuncionarios/listaFuncionarios.css';
import { useHistory } from 'react-router-dom';
import {StyleForm} from '../../styles';



 function ListaFuncionarios() {
    
   const [funcionarioList, setFuncionariosList] = useState([]);
   const [loading, setLoading] =  useState(true);
   const[cpf, setCpf] =useState("") ;

   function getFuncionarios(){ 
    axios.get("http://uploadbackendfuncionarios.herokuapp.com/funcionarios").then((response)=>{
      setFuncionariosList(response.data.rows);
      console.log(response.data.rows);
      setLoading(false);
      })
      .catch((error) => {
      console.log(error);
      setLoading(false);
  })
   
}

function getFuncionariosCpf(){
    setLoading(true)
      axios.get(`http://uploadbackendfuncionarios.herokuapp.com/funcionarios/cpf/${cpf}`).then((response)=>{
        setFuncionariosList(response.data.rows);
        setLoading(false)
  })
  .catch((error) => {
    console.log(error);
    setLoading(false);
  })

}

  function funcaoDeletar(id){
    axios.delete(`http://uploadbackendfuncionarios.herokuapp.com/funcionarios?id=${id}`).then(()=>{
      alert("Funcionário Deletado com Sucesso !")
    })

  }

  const handleSubmit = (event) => {
    event.preventDefault();
    getFuncionariosCpf();
  }

  const history = useHistory();

  function funcaoEditar(id){
    history.push((`/EditarFuncionarios/${id}`));
  }

  
  
  useEffect(()=>{
      getFuncionarios();
    }, [])
   
   

    if(loading) {
        return (
          <div>Carregando...</div>
        );
      }

      if (!funcionarioList.length) {
        
      return( 
    <div>
      <p>Erro inesperado</p>
      <Button label={"Tentar novamente"} onClick={getFuncionarios} />
    </div>
      )}
      
        
      return(
            <div> 
              <StyleForm onSubmit={handleSubmit}>
                    <input className="styleInput"type="text" placeholder="Digite um CPF" onChange={(e) => {
                            setCpf(e.target.value);}}/>
                    <Button label={"Buscar"} type="submit"></Button>
              </StyleForm>
            
              {funcionarioList.map((val,index)=>{
                  return (
                  
                    <div key={index}>
                   
                      <FlexWrapper>
                    
                        <div className="separacao">
                          <p className="styleCampo">Nome</p>
                          <p>{val.nome}</p>
                        </div>

                        <div className="separacao">
                          <p className="styleCampo">CPF</p>
                          <p>{val.cpf}</p>
                        </div>

                        <div className="separacao">
                          <p className="styleCampo">Função</p>
                          <p>{val.funcao}</p>
                        </div>

                        <div className="separacao">
                          <p className="styleCampo">Regime</p>
                          <p>{val.regime}</p>
                        </div>
                  
                        <div className="separacao">
                          <p className="styleCampo">email</p>
                          <p>{val.email}</p>
                        </div>
                  
                        <div className="separacao">
                          <p className="styleCampo">Telefone 1</p>
                          <p>{val.telefone1}</p>
                        </div>
                  
                        <div className="separacao">
                          <p className="styleCampo">Telefone 2</p>
                          <p>{val.telefone2}</p>
                        </div>
                  
                        <div className="separacao">
                          <p className="styleCampo">CNPJ</p>
                          <p>{val.cnpj}</p>
                        </div>
                      </FlexWrapper>
                    
                  
                      <div className="ButtonStyle">
                        <Button label={"Editar"} onClick={() => funcaoEditar(val.id)}></Button>
                        <Button label={"Deletar"} onClick={() => funcaoDeletar(val.id)}></Button>
                      </div>
                    </div>
                )

            })}
        </div>
    )

}

export default ListaFuncionarios;