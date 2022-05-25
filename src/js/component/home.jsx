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
			{pokemones.map((item, index) => (
				<p key={index}>
					<div className="card" style={{ width: "18rem" }}>
						<img
							className="card-img-top"
							src="..."
							alt="Card image cap"
						/>
						<div className="card-body">
							<h5 className="card-title">{item.name}</h5>
							<p className="card-text">jugas jugas xd</p>
							<a href={item.url} class="btn btn-primary">
								URL de la vara
							</a>
						</div>
					</div>
				</p>
			))}
		</div>
	);
};

export default Home;
