injectTapEventPlugin();

let {
  FormsyText
} = FMUI;

var {
  AppBar,
  RaisedButton
} = MUI;

var {
  ThemeManager,
  LightRawTheme
} = MUI.Styles;


Header = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext(){
    return {
      muiTheme: Styles.ThemeManager.getMuiTheme(Styles.LightRawTheme)
    }
  },

  getInitialState: function () {
    return {
      canSumbit: false
    };
  },

  errorMessages: {
    wordsError: "Your password is incorrect",
    urlError: "Please provide a valid email"
  },

  styles: {
    paperStyle: {
      width: 300,
      margin: 20,
      padding: 20
    },
    switchStyle: {
      marginBottom:16
    }
  },


  enableButton: function () {
    this.setState({
      canSubmit: true
    });
  },

  disableButton: function () {
    this.setState({
      canSubmit: false
    });
  },

  submitForm: function (data) {
    alert(JSON.stringify(data, null, 4));
  },

  notifyFormError: function (data) {
    console.error('Form error:', data);
  },

  render: function () {
    let {paperStyle, switchStyle, submitStyle } = this.styles;
    let { wordsError, urlError } = this.errorMessages;


    return (
      <div>
        <AppBar title="Protyp"
          iconElementRight={
            <div>

              <Formsy.Form
                onValid={this.enableButton}
                onInvalid={this.disableButton}
                onValidSubmit={this.submitForm}
                onInvalidSubmit={this.notifyFormError} >

                <FormsyText
                  name='url'
                  validations='isUrl'
                  validationError={urlError}
                  required
                  defaultValue="http://"
                  hintText="user@email.com"
                  floatingLabelText="Email" />

                <FormsyText
                    name='name'
                    validations='isWords'
                    validationError={wordsError}
                    required
                    hintText="What is your password?"
                    floatingLabelText="Password" />

                    <RaisedButton
                        linkButton={true}
                        primary={true}
                        href="/login"
                        label="Login" />

                    </Formsy.Form>

                    </div>
          } />
      </div>
    );
  }
});
