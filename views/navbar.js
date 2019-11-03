let navbar = {
  render: () => {
    let view = `
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarTogglerDemo03"
                    aria-controls="navbarTogglerDemo03"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <a class="navbar-brand" href="#">Project 51</a>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <div class="float-right">
                    <button class="btn btn-sm btn-primary my-2 my-sm-0" type="submit">
                        Login
                    </button>
                    </div>
                </div>
            </nav>
        `;
    return view;
  }
};

export default navbar;
