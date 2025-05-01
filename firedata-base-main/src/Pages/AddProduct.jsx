import { collection, addDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import { db } from '../Firebase';

const initialState = {
  title: "",
  image: "",
  description: "",
  category: "",
  price: ""
};

const AddProduct = () => {
  const [data, setData] = useState(initialState);
  const { title, image, description, category, price } = data;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const fbData = await addDoc(collection(db, "product"), data);
      console.log("Added to Firestore with ID:", fbData.id);

      // Reset form
      setData(initialState);
    } catch (error) {
      console.log("Submission Error:", error);
    }
  };

  return (
    <div style={{
      width: "30%", 
      margin: "auto", 
      textAlign: "center", 
      border: "1px solid black", 
      padding: "40px 20px", 
      borderRadius: "20px", 
      marginTop: "50px"
    }}>
      <form onSubmit={handleSubmit}>
        <h1 style={{ marginBottom: "20px" }}>Add Product here</h1>
        <input 
          type="text" 
          value={title} 
          name="title" 
          onChange={handleChange} 
          placeholder="Enter title here" 
          style={{ padding: "10px", width: "100%", marginBottom: "10px", borderRadius: "5px", border: "1px solid #ccc" }} 
        /> <br />
        <input 
          type="text" 
          value={image} 
          name="image" 
          onChange={handleChange} 
          placeholder="Put image URL here" 
          style={{ padding: "10px", width: "100%", marginBottom: "10px", borderRadius: "5px", border: "1px solid #ccc" }} 
        /> <br />
        <input 
          type="text" 
          value={description} 
          name="description" 
          onChange={handleChange} 
          placeholder="Enter description here" 
          style={{ padding: "10px", width: "100%", marginBottom: "10px", borderRadius: "5px", border: "1px solid #ccc" }} 
        /> <br />
        <select 
          name="category" 
          value={category} 
          onChange={handleChange} 
          style={{ padding: "10px", width: "100%", marginBottom: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
        >
          <option value="">Select Category</option>
          <option value="men's clothing">Men</option>
          <option value="women's clothing">Women</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelry</option>
        </select> <br />
        <input 
          type="number" 
          name="price" 
          value={price} 
          onChange={handleChange} 
          placeholder="Enter price here" 
          style={{ padding: "10px", width: "100%", marginBottom: "10px", borderRadius: "5px", border: "1px solid #ccc" }} 
        /> <br />
        <input 
          type="submit" 
          value="Submit" 
          style={{ padding: "10px", width: "100%", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }} 
        />
      </form>
    </div>
  );
};

export default AddProduct;
