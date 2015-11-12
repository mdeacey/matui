Reaktor.init(
  <Router>
    <Route path="/" layout={Layout} triggersEnter={homePageLogger} />
    <Route path="/login" layout={Layout} content={Login}  />
    <Route path="/register" layout={Layout} content={Register}  />
  </Router>
);

function homePageLogger() {
  console.log("we are on the home route");
}
