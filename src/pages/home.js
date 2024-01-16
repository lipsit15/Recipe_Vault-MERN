// import React, { useEffect, useState } from "react";
// import { useGetUserID } from "../hooks/useGetUserID";
// import axios from "axios";
// import { Cookies } from "react-cookie";


// export const Home = () => {
//   const [recipes, setRecipes] = useState([]);
//   const [savedRecipes, setSavedRecipes] = useState([]);

//   const userID = useGetUserID();

//   useEffect(() => {
//     const fetchRecipes = async () => {
//       try {
//         const response = await axios.get("http://localhost:3001/recipes");
//         setRecipes(response.data);
//       } catch (err) {
//         console.log(err);
//       }
//     };

//     const fetchSavedRecipes = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:3001/recipes/savedRecipes/ids/${userID}`
//         );
//         setSavedRecipes(response.data.savedRecipes);
//       } catch (err) {
//         console.log(err);
//       }
//     };

//     fetchRecipes();
//     if(Cookies.access_token) fetchSavedRecipes();
//   }, []);

//   const saveRecipe = async (recipeID) => {
//     try {
//       const response = await axios.put("http://localhost:3001/recipes", {
//         recipeID,
//         userID,
//       });
//       setSavedRecipes(response.data.savedRecipes);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const isRecipeSaved = (id) => savedRecipes.includes(id);

//   return (
//     <div>
//       <h1>Recipes</h1>
//       <ul>
//         {recipes.map((recipe) => (
//           <li key={recipe._id}>
//             <div>
//               <h2>{recipe.name}</h2>
//               <button
//                 onClick={() => saveRecipe(recipe._id)}
//                 disabled={isRecipeSaved(recipe._id)}
//               >
//                 {isRecipeSaved(recipe._id) ? "Saved" : "Save"}
//               </button>
//             </div>
//             <div className="instructions">
//               <p>{recipe.instructions}</p>
//             </div>
//             <img src={recipe.imageUrl} alt={recipe.name} />
//             <p>Cooking Time: {recipe.cookingTime} minutes</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };
import React, { useEffect, useState } from "react";
import { useGetUserID } from "../hooks/useGetUserID";
import axios from "axios";
import { Cookies } from "react-cookie";

export const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [savedRecipes, setSavedRecipes] = useState([]);
  const userID = useGetUserID();

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get("http://localhost:3001/recipes");
        setRecipes(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    const fetchSavedRecipes = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/recipes/savedRecipes/ids/${userID}`
        );
        setSavedRecipes(response.data.savedRecipes);
      } catch (err) {
        console.log(err);
      }
    };

    fetchRecipes();
    if (Cookies.access_token) fetchSavedRecipes();
  }, []);

  const saveRecipe = async (recipeID) => {
    try {
      const response = await axios.put("http://localhost:3001/recipes", {
        recipeID,
        userID,
      });
      setSavedRecipes(response.data.savedRecipes);
    } catch (err) {
      console.log(err);
    }
  };

  const isRecipeSaved = (id) => savedRecipes.includes(id);

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">Recipes</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {recipes.map((recipe) => (
          <li key={recipe._id} className="border p-4 rounded-md">
            <div className="mb-2">
              <h2 className="text-xl font-bold mb-2">{recipe.name}</h2>
              <button
                onClick={() => saveRecipe(recipe._id)}
                disabled={isRecipeSaved(recipe._id)}
                className={`px-4 py-2 rounded ${
                  isRecipeSaved(recipe._id)
                    ? "bg-gray-400 text-gray-800"
                    : "bg-blue-500 text-white"
                }`}
              >
                {isRecipeSaved(recipe._id) ? "Saved" : "Save"}
              </button>
            </div>
            <div className="mb-2">
              <p className="text-gray-700">{recipe.instructions}</p>
            </div>
            <img
              src={recipe.imageUrl}
              alt={recipe.name}
              className="w-full h-auto mb-2"
            />
            <p className="text-gray-700">Cooking Time: {recipe.cookingTime} minutes</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
