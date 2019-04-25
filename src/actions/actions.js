export const createNews = data => ({
  type: "CREATE_NEWS",
  payload: data
});

export const lazyLoading = data => ({
  type: "LAZY_LOAD",
  payload: data
});
