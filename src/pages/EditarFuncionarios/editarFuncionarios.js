import React, { useEffect, useState } from "react";
import axios from "axios";
import { StyleForm, InputText, Title } from "../../styles";
import {Button} from '../../components/Button/index'
import { useParams } from "react-router-dom";


function EditarFuncionarios() {

  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [funcao, setFuncao] = useState("");
  const [regime, setRegime] = useState("");
  const [email, setEmail] = useState("");
  const [telefone1, setTelefone1] = useState("");
  const [telefone2, setTelefone2] = useState("");
  const [cnpj, setCnpj] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    editFuncionario();
  }
  const [loading, setLoading] =  useState(true);
  const { id } = useParams();

  const editFuncionario = async () => {
    try {
      await axios.put(`https://uploadbackendfuncionarios.herokuapp.com/funcionarios/${id}`, 
      { nome, cpf, funcao, regime, email, telefone1, telefone2, cnpj },  
        {headers:{  
            "Access-Control-Allow-Origin": "*"}},);
            alert('Funcionario editado com sucesso !');
      
    } catch (error) {
      console.log(error);
    }
  }

  function getFuncionariosId(){ 
    axios.get(`http://uploadbackendfuncionarios.herokuapp.com/funcionarios/${id}`, {headers:{"Access-Control-Allow-Origin": "*" }}).then((response)=>{
      
        if (response.data.rows.length){
            setNome(response.data.rows[0].nome);
            setCpf(response.data.rows[0].cpf);
            setFuncao(response.data.rows[0].funcao);
            setRegime(response.data.rows[0].regime);
            setEmail(response.data.rows[0].email);
            setTelefone1(response.data.rows[0].telefone1);
            setTelefone2(response.data.rows[0].telefone2);
            setCnpj(response.data.rows[0].cnpj);
          }

      setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
    })
}

    useEffect(()=>{
        getFuncionariosId()
    }, []);

  return (
    
    <div>
      
      <Title>Edição de Funcionários</Title>

      <div>
        <StyleForm onSubmit={handleSubmit}>
          <InputText value={nome} type="text" placeholder="Digite um nome " name="nome" onChange={(e) => {
            setNome(e.target.value)
          }} />
          <InputText value ={cpf}type="text" placeholder="Digite o cpf" name="cpf" onChange={(e) => {
            setCpf(e.target.value)
          }} />
          <InputText value ={funcao} type="text" placeholder="Digite a função" name="funcao" onChange={(e) => {
            setFuncao(e.target.value)
          }} />
          <InputText value ={regime} type="text" placeholder="Digite o regime" name="regime" onChange={(e) => {
            setRegime(e.target.value)
          }} />
          <InputText value ={email} type="text" placeholder="Digite o email" name="email" onChange={(e) => {
            setEmail(e.target.value)
          }} />
          <InputText value ={telefone1} type="text" placeholder="Digite o telefone1" name="telefone1" onChange={(e) => {
            setTelefone1(e.target.value)
          }} />
          <InputText value ={telefone2} type="text" placeholder="Digite o telefone2" name="telefone2" onChange={(e) => {
            setTelefone2(e.target.value)
          }} />
          <InputText value ={cnpj} type="text" placeholder="Digite o cnpj" name="cnpj" onChange={(e) => {
            setCnpj(e.target.value)
          }} />

          <Button label={"Editar"} type="submit"></Button>
        </StyleForm>
      </div>
    </div>
  );
}

export default EditarFuncionarios;