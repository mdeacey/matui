FlowRouter.route('/', {
  name: "home",
  action: function () {
    DocHead.setTitle("Protyp");
    ReactLayout.render(MainLayout);
  }
});

FlowRouter.route('/shoes', {
  name: "shoes",
  action: function(params) {
    DocHead.setTitle("Shoes");
    ReactLayout.render(MainLayout, {content: <Shoes />});
  }
});

FlowRouter.route('/login', {
  name: "login",
  action: function() {
    DocHead.setTitle("Login");
    ReactLayout.render(MainLayout, {content: <Login />});
  }
});

FlowRouter.route('/register', {
  name: "register",
  action: function() {
    DocHead.setTitle("Login");
    ReactLayout.render(MainLayout, {content: <Register />});
  }
});

FlowRouter.route('/home', {
  name: "home",
  action: function() {
    DocHead.setTitle("Protyp");
    ReactLayout.render(MainLayout, {content: <Home />});
  }
});
