// hooks/useCategory.js
import { useEffect, useState } from "react";
import { getCategory } from "../services/blogservice";

export const useCategory = () => {
  const [categoryData, setCategoryData] = useState([]);

  const fetchCategory = async () => {
    const res = await getCategory();
    setCategoryData(res.data);
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  return { categoryData, fetchCategory };
};