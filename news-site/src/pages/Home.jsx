import React, { useState, useEffect } from "react";
import TopHeader from "../components/TopHeader";
import CategoryNav from "../components/CategoryNav";
import HeroSection from "../components/HeroSection";

const Home = () => {
  const apiKey = "0491b0533f1c4b35ad4905ef0c2493f8";
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [url, setUrl] = useState("top-headlines?country=us");

 
  useEffect(() => {
    fetch(
        `https://newsapi.org/v2/${url}&apiKey=${apiKey}`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [url]);

  const handleCategoryClick = (category) => {
    console.log(`Category clicked: ${category}`);
    setUrl(`everything?q=${encodeURIComponent(category)}`);
  };

  return (
    <>
      <TopHeader />
      <CategoryNav onCategoryClick={handleCategoryClick}/>
      <HeroSection items={items} isLoaded={isLoaded} error={error}/>
    </>
  );
};

export default Home;
