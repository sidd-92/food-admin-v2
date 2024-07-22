import axios from "axios";

export const getRecipies = async () => {
	try {
		const result = await axios.get("http://localhost:3001/api/recipies");
		return result.data;
	} catch (error) {
		throw error;
	}
};
