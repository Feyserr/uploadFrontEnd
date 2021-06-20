import React, { useState } from "react";
import axios from "axios";
import { StyleForm, InputText, Title } from "../../styles";
import {Button} from '../../components/Button/index'


function Home() {
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
    submitFuncionario();
  }

  const submitFuncionario = async () => {
    try {
      await axios.post("https://uploadbackendfuncionarios.herokuapp.com/novoFuncionarios",
        { nome, cpf, funcao, regime, email, telefone1, telefone2, cnpj });
      alert('Funcionario adicionado com sucesso !');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    
    <div>
      <Title>Cadastro de Funcionários</Title>

      <div>
        <StyleForm onSubmit={handleSubmit}>
          <InputText type="text" placeholder="Digite um nome " name="nome" onChange={(e) => {
            setNome(e.target.value)
          }} />
          <InputText type="text" placeholder="Digite o cpf" name="cpf" onChange={(e) => {
            setCpf(e.target.value)
          }} />
          <InputText type="text" placeholder="Digite a função" name="funcao" onChange={(e) => {
            setFuncao(e.target.value)
          }} />
          <InputText type="text" placeholder="Digite o regime" name="regime" onChange={(e) => {
            setRegime(e.target.value)
          }} />
          <InputText type="text" placeholder="Digite o email" name="email" onChange={(e) => {
            setEmail(e.target.value)
          }} />
          <InputText type="text" placeholder="Digite o telefone1" name="telefone1" onChange={(e) => {
            setTelefone1(e.target.value)
          }} />
          <InputText type="text" placeholder="Digite o telefone2" name="telefone2" onChange={(e) => {
            setTelefone2(e.target.value)
          }} />
          <InputText type="text" placeholder="Digite o cnpj" name="cnpj" onChange={(e) => {
            setCnpj(e.target.value)
          }} />

          <Button label={"Cadastrar"} type="submit"></Button>
        </StyleForm>
      </div>
    </div>
  );
}

export default Home;