const reducer = (state = {}, action) => {
  switch (action.type) {
    case "DATA_LOADED":
      return { ...state, news: action, loading: false };
    case "CREATE_NEWS":
      const NewsData = action.payload;
      return { ...state, NewsData };
      case "LAZY_LOADED":
      const lifeCycleData = action.response;
      return { data: lifeCycleData.data,loading:false };
      case "NEWS_CREATED":
      return { Newsdata: action, status: 'success' };  
    default:
      return state;
  }
};
export default reducer;
