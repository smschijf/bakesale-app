export const fetchInitialDeals = async () => {
  const apiHost = "https://bakesaleforgood.com";

  try {
    const response = await fetch(apiHost + "/api/deals");
    const json = await response.json();
    // console.log(json);
    return json;
  } catch (error) {
    console.error(error);
  }
};

export const fetchDealDetail = async (dealId) => {
  const apiHost = "https://bakesaleforgood.com";

  try {
    const response = await fetch(apiHost + "/api/deals/" + dealId);
    const json = await response.json();
    // console.log(json);
    return json;
  } catch (error) {
    console.error(error);
  }
};
