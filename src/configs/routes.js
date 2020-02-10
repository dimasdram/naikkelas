const routes = {
  HOME() {
    return `/`;
  },
  DETAILCLASS() {
    return `/detailclass`;
  },
  DEVELOPER(param) {
    return `/developer/${param}`;
  }
};

export default routes;
