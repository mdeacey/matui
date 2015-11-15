injectTapEventPlugin();

var {
  RaisedButton,
  ListItem,
  ListDivider,
  List
} = MUI;

var { ThemeManager, LightRawTheme } = MUI.Styles;

MainLayout = React.createClass({
  childContextTypes: {
        muiTheme: React.PropTypes.object
    },

  getChildContext() {
      return {
          muiTheme: ThemeManager.getMuiTheme(LightRawTheme)
      };
  },

  render() {
    return (
      <div>
        <Header />
            <h1>Protyp</h1>
      </div>
    );
  }
});
