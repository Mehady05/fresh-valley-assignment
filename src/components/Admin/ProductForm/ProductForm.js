import axios from "axios";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const ProductForm = () => {
  const handleImageUpload = (event) => {
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "b40dd3bfad3ccaffc09285b51f2dd2e4");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageUrl(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const[imageUrl, setImageUrl] = useState(null)

  const onSubmit = (data) => {
    const productData = {
      name: data,
      imageURL: imageUrl,
    };
    console.log(productData);

    fetch('http://localhost:5000/addProduct',{
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(productData)
    })
    .then(res => res.json())
    .then(data => console.log(data))

  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        name="name"
        placeholder="Product Name"
        {...register("name", { required: true })}
      />
      <br />

      <input
        name="price"
        placeholder="Price"
        {...register("price", { required: true })}
      />
      <br />
      <input
        name="weight"
        placeholder="weight"
        {...register("weight", { required: true })}
      />
      <br />

      <input type="file" onChange={handleImageUpload} />
      <br />
      <br />

      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
};

export default ProductForm;
