import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import axios from "axios";

export default function HomeScreen() {
  const [products, setProducts] = useState<any[]>([]);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("");

  const [editingId, setEditingId] = useState<number | null>(null);

  const API = "http://localhost:8080/api/product"; 

  const fetchData = async () => {
    try {
      const response = await axios.get(`${API}/product`);
      setProducts(response.data);
    } catch (error) {
      console.log("Erro ao buscar produtos:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addProduct = async () => {
    try {
      await axios.post(`${API}/register`, {
        name,
        price,
        description,
        stock,
        category
      });
      resetForm();
      fetchData();
    } catch (error) {
      console.log("Erro ao adicionar produto:", error);
    }
  };

  const updateProduct = async () => {
    try {
      await axios.put(`${API}/update/${editingId}`, {
        name,
        price,
        description,
        stock,
        category
      });
      resetForm();
      fetchData();
    } catch (error) {
      console.log("Erro ao atualizar produto:", error);
    }
  };

  const deleteProduct = async (id: number) => {
    try {
      await axios.delete(`${API}/delete/${id}`);
      fetchData();
    } catch (error) {
      console.log("Erro ao deletar produto:", error);
    }
  };

  const editProduct = (product: any) => {
    setEditingId(product.id);
    setName(product.name);
    setPrice(product.price.toString());
    setDescription(product.description);
    setStock(product.stock.toString());
    setCategory(product.category);
  };

  const resetForm = () => {
    setEditingId(null);
    setName("");
    setPrice("");
    setDescription("");
    setStock("");
    setCategory("");
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.titulo}>Produtos</Text>

        <TextInput
          style={styles.input}
          placeholder="Nome"
          placeholderTextColor="#aaa"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Preço"
          placeholderTextColor="#aaa"
          value={price}
          onChangeText={setPrice}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Descrição"
          placeholderTextColor="#aaa"
          value={description}
          onChangeText={setDescription}
        />
        <TextInput
          style={styles.input}
          placeholder="Estoque"
          placeholderTextColor="#aaa"
          value={stock}
          onChangeText={setStock}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Categoria"
          placeholderTextColor="#aaa"
          value={category}
          onChangeText={setCategory}
        />

        {editingId ? (
          <TouchableOpacity style={styles.botao} onPress={updateProduct}>
            <Text style={styles.textoBotao}>Atualizar Produto</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.botao} onPress={addProduct}>
            <Text style={styles.textoBotao}>Cadastrar Produto</Text>
          </TouchableOpacity>
        )}
      </View>

      {products.map((product) => (
        <View key={product.id} style={styles.productCard}>
          <Text style={styles.productName}>{product.name}</Text>
          <Text>Preço: {product.price}</Text>
          <Text>Descrição: {product.description}</Text>
          <Text>Estoque: {product.stock}</Text>
          <Text>Categoria: {product.category}</Text>

          <View style={styles.buttons}>
            <TouchableOpacity
              style={styles.editButton}
              onPress={() => editProduct(product)}
            >
              <Text style={styles.textoBotao}>Editar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => deleteProduct(product.id)}
            >
              <Text style={styles.textoBotao}>Excluir</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAF4EC",
    padding: 20
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 25,
    padding: 25,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2E7D32",
    marginBottom: 20,
    textAlign: "center"
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 15,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#D9D9D9"
  },
  botao: {
    width: "100%",
    height: 50,
    backgroundColor: "#4CAF50",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
  },
  textoBotao: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold"
  },
  productCard: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 15,
    marginBottom: 15
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5
  },
  buttons: {
    flexDirection: "row",
    marginTop: 10,
    gap: 10
  },
  editButton: {
    flex: 1,
    backgroundColor: "#2196F3",
    padding: 10,
    borderRadius: 8,
    alignItems: "center"
  },
  deleteButton: {
    flex: 1,
    backgroundColor: "#F44336",
    padding: 10,
    borderRadius: 8,
    alignItems: "center"
  }
});