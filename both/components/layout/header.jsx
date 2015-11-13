var {AppCanvas, AppBar, RaisedButton} = MUI;

Header = React.createClass({
  render() {
    return (
      <AppCanvas>
        <AppBar title="Protyp"
          iconElementRight={
            <div>
              <RaisedButton linkButton={true} label="Log In" href="/login" secondary={true} />
            </div>
          }
        />
      </AppCanvas>
    );
  }
});
