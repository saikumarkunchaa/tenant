const reducer = (state = {}, action) => {
  switch (action.type) {
    case "DATA_LOADED":
      return { ...state, news: action, loading: false };
    case "CREATE_NEWS":
      const NewsData = action.payload;
      console.log("kiran" + NewsData);
      return { ...state, NewsData };
    default:
      return state;
  }
};
export default reducer;
