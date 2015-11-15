var {
  AppBar,
  RaisedButton,
  TextField,
  ListItem,
  ListDivider,
  List
} = MUI;

var { ThemeManager, LightRawTheme } = MUI.Styles;

Header = React.createClass({
  childContextTypes: {
        muiTheme: React.PropTypes.object
    },

  getChildContext() {
      return {
          muiTheme: ThemeManager.getMuiTheme(LightRawTheme)
      };
  },

  onClick () {
    alert('clicked Login Button.');
  },
  render() {
    return (
      <div>
        <AppBar title="Protyp"
          iconElementRight={
            <div>
              <TextField hintText="Your Email" type="email" floatingLabelText="Your email" />&nbsp;
              <TextField hintText="Password" type="password" floatingLabelText="Password"/>&nbsp;
              <RaisedButton label="Login" onClick={this.onClick} secondary={true} />&nbsp;
              <RaisedButton label="Register" secondary={true}/>
            </div>
          } />
      </div>
    );
  }
});
