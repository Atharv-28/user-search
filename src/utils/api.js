const API_URL = 'https://jsonplaceholder.typicode.com/posts'; //storing url in variable, can be done directly using .fetch() but I prefer this method.

export const fetchData = async () => {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error("Something went wrong !, Please try again later.");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};
