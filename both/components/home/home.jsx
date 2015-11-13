var {
  TextField,
  RaisedButton,
  ListItem,
  ListDivider,
  List
} = MUI;

var { ThemeManager, LightRawTheme } = MUI.Styles;

Home = React.createClass({
mixin:[MaterialUIMixin],
  render: function() {
    return (
      <div>
        <div className="container">
          <div className="well col-md-4 col-md-offset-4">
            This is a Main Page.
            <div className="col-md-offset-2">
              <RaisedButton linkButton={true} secondary={true} href="/register" label="Register" />&nbsp;
              <RaisedButton linkButton={true} secondary={true} href="/login" label="Cancel" />
            </div>
          </div>
        </div>
      </div>
    );
  }
});
