const link = `
<a class="navbar-item">
    Home
</a>
`;

const brandLogo = `
<a class="navbar-item">
  <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="Bulma">
</a>
`;

const parent = `
<div class="navbar-item has-dropdown">
  <a class="navbar-link">
    Docs
  </a>

  <div class="navbar-dropdown">
    <!-- Other navbar items -->
  </div>
</div>
`;

const dropdown = `
<div class="navbar-dropdown">
  <a class="navbar-item">
    Overview
  </a>
</div>
`;

const anything = `
<div class="navbar-item">
  <div class="field is-grouped">
    <p class="control">
      <a class="button">
        <span class="icon">
          <i class="fas fa-twitter" aria-hidden="true"></i>
        </span>
        <span>Tweet</span>
      </a>
    </p>
    <p class="control">
      <a class="button is-primary">
        <span class="icon">
          <i class="fas fa-download" aria-hidden="true"></i>
        </span>
        <span>Download</span>
      </a>
    </p>
  </div>
</div>
`;

export {
    link,
    brandLogo,
    parent,
    dropdown,
    anything
};
