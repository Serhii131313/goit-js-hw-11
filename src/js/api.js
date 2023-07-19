import axios from "axios";

export const fetchImages = async (inputValue, pageNr) => {
    try {
        const response = await axios.get(
            `https://pixabay.com/api/?key=37930046-394bc7b158c4cfc51204a831a&q=${inputValue}&orientation=horizontal&safesearch=true&image_type=photo&per_page=40&page=${pageNr}`
        );

        if (response.status === 200) {
            return response.data;
        } else {
            return [];
        }
    } catch (error) {
        console.error(error);
    }
};
