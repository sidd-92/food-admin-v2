import axios from "axios";

export const getRecipies = async () => {
	try {
		const result = await axios.get("https://food-blog-api-v2.onrender.com/api/recipies");
		return result.data;
	} catch (error) {
		throw error;
	}
};
