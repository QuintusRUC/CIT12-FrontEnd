const fetchData = async (url) => {
  try {
    const port = process.env.REACT_APP_BACKEND_PORT || 5221;
    const fullUrl = `http://localhost:${port}/${url}`;

    const response = await fetch(fullUrl);

    if (!response.ok) {
        console.log("response", response);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error; // re-throw to allow caller to handle
  }
};

export default fetchData;
