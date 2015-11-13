var {
  TextField,
  RaisedButton,
  ListItem,
  ListDivider,
  List
} = MUI;

var { ThemeManager, LightRawTheme } = MUI.Styles;

Register = React.createClass({
  mixin: [MaterialUIMixin],
render: function() {
    return (
      <div>
        <div className="container">
          <div className="well col-md-4 col-md-offset-4">
            <TextField hintText="Your Name" floatingLabelText="Your Name" /> <br/>
            <TextField hintText="Email address" floatingLabelText="Email address" /> <br/>
            <TextField hintText="Password" type="password" floatingLabelText="Password" /> <br/>
            <TextField hintText="Retype" type="password" floatingLabelText="Retype Password" /> <br/><br/>
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
