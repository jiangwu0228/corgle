

const getResults = async (type) => {
    setLoading(true);
    const response = await fetch(`${baseUrl}/images/q=macbook`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "google-search3.p.rapidapi.com",
        "x-rapidapi-key": "2a2b987a6bmsh276f5712854c62fp132404jsnaa3c34cb6c5a",
      },
    });
    const data = await response.json();
    setResults(data);
    setLoading(false);
  };