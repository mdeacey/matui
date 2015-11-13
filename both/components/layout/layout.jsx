MainLayout = React.createClass({
  render() {
    return (
      <div>
        <Header />
        <main className="main-area">{this.props.content}</main>
      </div>
    );
  }
});
