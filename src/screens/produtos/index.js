import React,{useState} from 'react';
import { View, Button, Text, TextInput, ScrollView} from 'react-native';




function ProdutoCadastro() {
    const [nomeProduto, setNomeProduto] = useState();
      const [categoria, setCategoria] = useState();
      const [preco, setPreco] = useState();
  return (
    <ScrollView>
      <TextInput
        placeholder="Nome produto"
        onChangeText={produto => {
        setNomeProduto(produto)
          
        }}></TextInput>
      <TextInput
        placeholder="Categoria"
        onChangeText={nCategoria => {
          setCategoria(nCategoria);
        }}></TextInput>
      <TextInput
        placeholder="Preço"
        onChangeText={nPreco => {
          setPreco(nPreco);
        }}></TextInput>
      <Button
        title="Cadastrar produto"
        onPress={() => {
          setNomeProduto();
        }}
      />
      <View>
        <Text>{nomeProduto}</Text>
        <Text>{categoria}</Text>
        <Text>{preco}</Text>
      </View>
    </ScrollView>
  );
}
export default ProdutoCadastro;