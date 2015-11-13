var {
  TextField,
  RaisedButton,
  ListItem,
  ListDivider,
  List
} = MUI;

var { ThemeManager, LightRawTheme } = MUI.Styles;

Login = React.createClass({
  mixin:[MaterialUIMixin],
  doLogin (e) {
    alert('This is logging in the site now.')
  },
  render: function() {
    return (
      <div>
        <div className="container">
          <div className="well col-md-4 col-md-offset-4">
            <TextField hintText="Email address" floatingLabelText="Email address" /> <br/>
            <TextField hintText="Password" type="password" floatingLabelText="Password" /> <br/><br/>
            <div className="col-md-offset-2">
              <RaisedButton linkButton={true} secondary={true} onClick={this.doLogin} label="Log in" />&nbsp;
              <RaisedButton linkButton={true} secondary={true} href="/register" label="Register" />
            </div>
          </div>
        </div>
      </div>
    );
  }
});
