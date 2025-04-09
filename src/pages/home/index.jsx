import { useContext } from "react";
import { GLobalContext } from "../../context";
import RecipeItem from "../../components/recipe-item";

export default function Home() {
	const { recipeList, loading } = useContext(GLobalContext);

	if (loading)
		return <div className="text-center">Loading... please wait!</div>;

	return (
		<div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
			{recipeList && recipeList.length > 0 ? (
				recipeList.map((item) => <RecipeItem key={item.id} item={item} />)
			) : (
				<p className="lg:text-4xl text-xl text-center text-black font-extrabold">
					Nothing to show. Please search something!
				</p>
			)}
		</div>
	);
}
