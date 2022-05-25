import React, { useState } from "react";

const Home = () => {
	const [pokemones, setPokemones] = useState([]);

	fetch("https://pokeapi.co/api/v2/pokemon")
		.then((resp) => resp.json())
		.then((response) => setPokemones(response.results)) //results es el nombre del arreglo donde estan los pokemones, en el API
		.catch();
	return (
		<div>
			<h1 className="text-center mt-5">Hello Rigo!</h1>
			<div className="card" style={{ width: "18rem" }}>
				<img className="card-img-top" src="..." alt="Card image cap" />
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						Some quick example text to build on the card title and
						make up the bulk of the card's content.
					</p>
					<a href="#" class="btn btn-primary">
						Go somewheree
					</a>
				</div>
			</div>
		</div>
	);
};

export default Home;
