import React, { useEffect, useState } from "react";
import axios from "axios";

export default function useCategory() {
  const [categories, setCategories] = useState([]);

  //     get catgories
  const getCategories = async () => {
    try {
      const { data } = await axios.get(
        "https://ecommerce-website-danj.onrender.com/api/v1/category/get-category"
      );
      setCategories(data?.category);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return categories;
}
