import React,{useState , useEffect} from 'react';
import Header from "./Header.js"
import Axios from 'axios'
import './App.css';
import Recipe from './Food.js'
import Footer from './Footer.js'


const App = () => {
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);


  const App_id = "Your Api id from edamam.com;
  const App_key = "Your Api key from edamam.com";

  useEffect(() => {
    getRecipe();
  },[]);

  const getRecipe = async () =>{
    const res = await Axios.get(`https://api.edamam.com/search?q=${search}&app_id=${App_id}&app_key=${App_key}`);
    setRecipes(res.data.hits);
    console.log(res);
  }
  const inputSearch = (e) =>{
    setSearch(e.target.value);
    
  }

  const onSearch = () =>{
    getRecipe();
    setSearch("");
  }
  return (
    <>
      <Header search={search} inputSearch={inputSearch} onSearch={onSearch}/>
      <Recipe recipes={recipes} />
      <Footer/>
    </>
  );
}

export default App;
