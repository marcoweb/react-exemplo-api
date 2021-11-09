import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function Formulario() {
    /* Cria duas variáveis imutáveis sendo uma para armazenar um estado (cep) e outra guarda a
    função de manipulação do estado (onCangeCep) definindo o estado inicial como uma string
    vazia ('') */
    const [cep, onChangeCep] = useState('')
    /* Cria duas variáveis imutáveis sendo uma para armazenar um estado (cidade) e outra guarda
    a função de manipulação do estado (onCangeCidade) definindo o estado inicial como uma string 
    vazia ('') */
    const [cidade, onChangeCidade] = useState('')

    /* Define uma variável imutável com a função (arrow function) que será utilizada para
    manipular a consulta */
    const handleConsultar = () => {
        // Cria uma variável imutável (url) contatenando o valor do estado "cep" à url da API
        const url = "https://viacep.com.br/ws/" + cep + "/json/"
        fetch(url, {
            // Define o método HTTP à ser utilizado
            method: 'GET',
            // Define no cabeçalho da requisição que o valor de retorno será um arquivo json
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        // Quando um valor for retornado pela consulta, executa a função a seguir
        }).then(function(response) {
            // Converte o arquivo json recebido em um objeto javascript e processa
            response.json().then(function(data) {
                // Chame a função para alterar o valor do estado "cidade"
                onChangeCidade(data['localidade'])
            })
        })
    }

    // Constroi o componente na tela
    return (
        <View>
            <Text>Digite um CEP (somente números):</Text>
            <TextInput value={cep} onChangeText={onChangeCep} />
            <Button title="Consultar" onPress={handleConsultar} />
            <Text>{cidade}</Text>
        </View>    
    )
}


