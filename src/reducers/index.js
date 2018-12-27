const reducer = (state = {}, action) => {
  switch (action.type) {
    case "NEWS_RECIEVED":
      return { ...state, news: action.json, loading: false };
    case "CREATE_TENANT":
      const TenantData = action.payload;
      console.log("kiran" + TenantData);
      return { ...state, TenantData };
    default:
      return state;
  }
};
export default reducer;
