FlowRouter.route("/home", {
    name: 'homepage',
    action: function() {
        ReactLayout.render(Home, {
            content: 'Homepage'
        })
    }
});
