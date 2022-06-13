import { useEffect, useState } from "react";

function Popular() {
  const [random, setRandom] = useState([]);

  useEffect(() => {
    getRandomRecipe();
  }, []);

  const getRandomRecipe = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
    );
    const data = await api.json();
    setRandom(data.recipes);
  };

  return (
    <div>
      {random.map((recipe) => {
        return (
          <div key={recipe.id}>
            <p>{recipe.title}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Popular;
