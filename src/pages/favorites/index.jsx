import { useContext } from "react";
import { GLobalContext } from "../../context";
import RecipeItem from "../../components/recipe-item";

export default function Favorites() {
	const { favoritesList } = useContext(GLobalContext);

	return (
		<div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
			{favoritesList && favoritesList.length > 0 ? (
				favoritesList.map((item) => <RecipeItem key={item.id} item={item} />)
			) : (
				<p className="lg:text-4xl text-xl text-center text-black font-extrabold">
					Nothing to show. Please add a favorite recipe!
				</p>
			)}
		</div>
	);
}
