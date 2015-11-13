var {
  RaisedButton,
  ListItem,
  ListDivider,
  List
} = MUI;

var { ThemeManager, LightRawTheme } = MUI.Styles;

Shoes = React.createClass({
  mixin:[MaterialUIMixin],
  render: function() {
    return (
      <div>
        <div className="container">
          <div className="well">
            <h1>This is the page for Shoes!</h1>
          </div>
          <div className="col-md-6 col-md-offset-3">
            <List>
              <ListItem primaryText="Inbox"  />
            </List>
          </div>
        </div>
      </div>
    );
  }
});
