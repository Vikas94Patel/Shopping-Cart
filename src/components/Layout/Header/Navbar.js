const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
  <a className="navbar-brand" href="/"> </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav m-auto font-weight-bold">
      <a className="nav-item nav-link text-dark" href="/">PRODUCT</a>
      <a className="nav-item nav-link text-dark" href="/">STORIES</a>
      <a className="nav-item nav-link text-dark" href="/">SKIN ASSESSMENT</a>
      <a className="nav-item nav-link text-dark" href="/">INGREDIENTS</a>
      <a className="nav-item nav-link text-dark" href="/">BLOGS</a>
      
    </div>
  </div>
</nav>
    );

};

export default Navbar;