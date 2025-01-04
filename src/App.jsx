import { useState, useEffect } from 'react'
import Axios from "axios";
import './App.css'

function App() {
	const [search, setSearch] = useState("");
	const [characters, setCharacters] = useState([]);

	useEffect(() => {
		Axios.get("https://rickandmortyapi.com/api/character").then((res) => {
			setCharacters(res.data.results);
		});
	}, []);

console.log(characters)
  return (
    <div>
		<nav className="navBar">
			<h3>Seker</h3>
			<ul className="navlist">
				<li>Images</li>
				<li>Videos</li>
				<li>Maps</li>
				<li>News</li>
				<li>Product</li>
			</ul>
			<h4>Sing in <i class="fa-solid fa-caret-down"></i></h4>
		</nav>
		
		<div className="main-container">
			
			<div className="input-container"> 
				<i class="fa-solid fa-magnifying-glass"></i>
				<input className="inputfield"
					type="text" 
					placeholder="Search for character" 
					value={search} 
					onChange={(e) => setSearch(e.target.value)}
				/>
			</div>
			<div>
			{characters.filter((item) => {
				return search.toLowerCase() === "" ? "" : item.name.toLowerCase().includes(search)
			}).map((character, id) =>(
				<ul key={id}>
					<div className="searchCard">
						<img className="cardImg" src={character.image}></img>
						<div className="cardText">
							<li>Name: {character.name}</li>
							<li>Status: {character.status} / Species: {character.species}</li>
						</div>
					</div>
				</ul>
			))}</div>
		</div>
    </div>
	);
}

export default App;
