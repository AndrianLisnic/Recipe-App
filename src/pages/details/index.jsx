import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GLobalContext } from "../../context";

export default function Details() {
	const { id } = useParams();
	const {
		recipeDetailsData,
		setRecipeDetailsData,
		handleAddToFavorite,
		favoritesList,
	} = useContext(GLobalContext);

	useEffect(() => {
		async function getRecipeDetails() {
			const response = await fetch(
				`https://forkify-api.herokuapp.com/api/v2/recipes/${id.replace(
					":",
					""
				)}`
			);
			const data = await response.json();
			if (data?.data) {
				setRecipeDetailsData(data?.data);
			}
		}

		getRecipeDetails();
	}, []);

	return (
		<div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
			<div className="row-start-2 lg:row-start-auto">
				<div className="h-96 overflow-hidden rounded-xl group">
					<img
						className="w-full h-full object-cover block group-hover:scale-105 duration-300"
						src={recipeDetailsData?.recipe?.image_url}
						alt="recipe image"
					/>
				</div>
			</div>
			<div className="flex flex-col gap-3">
				<div className="text-sm text-cyan-700 font-medium">
					{recipeDetailsData?.recipe?.publisher}
				</div>
				<h3 className="font-bold text-2xl truncate text-black">
					{recipeDetailsData?.recipe?.title}
				</h3>
				<div>
					<button
						onClick={() => handleAddToFavorite(recipeDetailsData?.recipe)}
						className="p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider mt-3 inline-block shadow-md bg-black text-white"
					>
						{favoritesList.findIndex(
							(item) => item.id === recipeDetailsData?.recipe?.id
						) === -1
							? "Save as favorites"
							: "Remove from favorites"}
					</button>
				</div>
				<div className="text-2xl font-semibold text-black">Ingredients:</div>
				<ul>
					{recipeDetailsData?.recipe?.ingredients.map((ingredient, index) => (
						<li key={index}>
							<span>
								{ingredient.quantity} {ingredient.unit}
							</span>{" "}
							<span>{ingredient.description}</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
