FlowRouter.route('/', {
  name: "home",
  action: function () {
    DocHead.setTitle("Top Shop");
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
