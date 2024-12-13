const fetchData = async (url) => {
  try {
      const port = process.env.REACT_APP_BACKEND_PORT || 7182;
      const fullUrl = `https://localhost:${port}/${url}`;

      const response = await fetch(fullUrl);

      if (!response.ok) {
          console.log("response", response);
          throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Fetched data:", result); // Log the response to debug structure
      return result;
  } catch (error) {
      console.error("Fetch error:", error);
      throw error; // Re-throw to allow caller to handle
  }
};

export default fetchData;
