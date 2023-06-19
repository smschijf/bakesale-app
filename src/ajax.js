const fetchInitialDeals = async () => {
  const apiHost = "https://bakesaleforgood.com";

  try {
    const response = await fetch(apiHost + '/api/deals');
    const json = await response.json();
    // console.log(json);
    setDeals(json);
    return json;
  } catch (error) {
    console.error(error);
  }
};

export default fetchInitialDeals;
