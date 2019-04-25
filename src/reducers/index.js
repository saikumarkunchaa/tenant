const reducer = (state = {}, action) => {
  switch (action.type) {
    case "DATA_LOADED":
      return { ...state, news: action, loading: false };
    case "CREATE_NEWS":
      const NewsData = action.payload;
      console.log("kiran" + NewsData);
      return { ...state, NewsData };
      case "LAZY_LOADED":
      const lifeCycleData = action.payload;
      console.log("Life Cycle" + lifeCycleData);
      return { ...state, data: lifeCycleData,loading:false };  
    default:
      return state;
  }
};
export default reducer;
