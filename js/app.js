"use strict";

var projects = [{ name: "Camper News", link: "http://codepen.io/mtaz/pen/PPQgav#0", img: "http://i68.tinypic.com/125jm07.jpg", uses: "Angular", desc: "Pulls a list of recent news articles and shows the user who posted it. Uses AJAX and Angular." }, { name: "Random Quote", link: "http://codepen.io/mtaz/pen/rONQpb", img: "http://i65.tinypic.com/2q8njiu.jpg", uses: "HTML", desc: "Allows user to request new Random Quotes from an API. Uses AJAX." }, { name: "Simon", link: "http://codepen.io/mtaz/pen/PZoBqB", img: "http://i68.tinypic.com/2mqrno0.jpg", uses: "HTML", desc: "Play a game of Simon on Easy or Hard mode. Uses SVG and JavaScript." }, { name: "Calculator", link: "http://codepen.io/mtaz/pen/bVrXNB", img: "http://i68.tinypic.com/23jitlf.jpg", uses: "HTML", desc: "Working calculator. Uses JavaScript and SVG." }, { name: "Wikipedia Viewer", link: "http://codepen.io/mtaz/pen/rOqNQp", img: "http://i67.tinypic.com/oqyebt.jpg", uses: "Angular", desc: "Search for articles on Widipedia using their API. Uses AJAX and Angular" }, { name: "Tic Tac Toe", link: "http://codepen.io/mtaz/pen/YyMdmv", img: "http://i64.tinypic.com/24x0yo4.jpg", uses: "HTML", desc: "Try to beat the computer at Tic Tac Toe. Uses JavaScript" }, { name: "D3 World Map Plot", link: "http://codepen.io/mtaz/pen/EyxPNX", img: "http://i65.tinypic.com/fcpgu9.jpg", uses: "D3", desc: "Visualization using historic meteor strike data. Uses D3." }, { name: "D3 Scatterplot", link: "http://codepen.io/mtaz/pen/grQOEj", img: "http://i66.tinypic.com/k1wc2c.jpg", uses: "D3", desc: "Scatterplot visualization using professional cycling data. Uses D3." }, { name: "React Markup Previewer", link: "http://codepen.io/mtaz/full/KMpdwy/", img: "http://i67.tinypic.com/24b23c9.jpg", uses: "React", desc: "Type in markup and previewer displays marked up text. Uses MarkedJS and React." }, { name: "React Leaderboard", link: "http://codepen.io/mtaz/pen/xOGMNa", img: "http://i67.tinypic.com/35k2vyf.jpg", uses: "React", desc: "Pull leader data from FCC API and display in sortable table. Uses React and AJAX." }, { name: "TwitchTV API", link: "http://codepen.io/mtaz/pen/pyezbz", img: "http://i64.tinypic.com/35k1qig.jpg", uses: "Angular", desc: "Contact TwitchTV API to get info on a list of members, link to members' pages. Uses AJAX and Angular." }, { name: "Pomodoro Timer", link: "http://codepen.io/mtaz/pen/gaPxKW", img: "http://i64.tinypic.com/xfpao8.jpg", uses: "HTML", desc: "Set a session and break timer to increase productivity. Uses SVG and JavaScript." }, { name: "D3 Force Directed Graph", link: "http://codepen.io/mtaz/pen/vKYmBw", img: "http://i64.tinypic.com/28mk075.jpg", uses: "D3", desc: "Force directed visualization of countries and their shared borders. Uses D3." }, { name: "D3 Heatmap", link: "http://codepen.io/mtaz/pen/eZQdoG", img: "http://i63.tinypic.com/2wom7x1.jpg", uses: "D3", desc: "Choropleth chart of temperature variance over time. Uses D3." }, { name: "D3 Bar Chart", link: "http://codepen.io/mtaz/pen/aNWZPj", img: "http://i63.tinypic.com/16c001i.jpg", uses: "D3", desc: "Simple bar chart of GDP over last 70 Years. Uses D3." }];

var Portfolio = React.createClass({
  displayName: "Portfolio",

  render: function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(Titlebar, null),
      React.createElement(Navbar, null),
      React.createElement(About, null),
      React.createElement(Projects, { projectList: this.props.projects }),
      React.createElement(SocialButtons, null)
    );
  }
});

var Titlebar = React.createClass({
  displayName: "Titlebar",

  render: function render() {
    return React.createElement(
      "section",
      { className: "homeContainer container", id: "home" },
      React.createElement(
        "div",
        { className: "home" },
        React.createElement(
          "div",
          { className: "home-overlay" },
          React.createElement(
            "span",
            { className: "home-title" },
            "MICHAEL TAFRO"
          ),
          React.createElement("br", null),
          React.createElement(
            "span",
            { className: "home-subtitle" },
            "WEB DEVELOPER"
          )
        )
      )
    );
  }
});

var Navbar = React.createClass({
  displayName: "Navbar",

  render: function render() {
    return React.createElement(
      "header",
      { className: "header", id: "sticky" },
      React.createElement(
        "nav",
        { className: "navbar navbar-custom", role: "navigation" },
        React.createElement(
          "div",
          { className: "container" },
          React.createElement(
            "div",
            { className: "navbar-header" },
            React.createElement(
              "button",
              { type: "button", className: "navbar-toggle", "data-toggle": "collapse", "data-target": "#custom-collapse" },
              React.createElement(
                "span",
                { className: "sr-only" },
                "Toggle navigation"
              ),
              React.createElement("span", { className: "icon-bar" }),
              React.createElement("span", { className: "icon-bar" }),
              React.createElement("span", { className: "icon-bar" })
            ),
            React.createElement(
              "a",
              { className: "navbar-brand", href: "index.html" },
              "Michael Tafro"
            )
          ),
          React.createElement(
            "div",
            { className: "collapse navbar-collapse", id: "custom-collapse" },
            React.createElement(
              "ul",
              { className: "nav navbar-nav navbar-right" },
              React.createElement(
                "li",
                null,
                React.createElement(
                  "a",
                  { href: "#home" },
                  "Home"
                )
              ),
              React.createElement(
                "li",
                null,
                React.createElement(
                  "a",
                  { href: "#about" },
                  "About"
                )
              ),
              React.createElement(
                "li",
                null,
                React.createElement(
                  "a",
                  { href: "#work" },
                  "Work"
                )
              ),
              React.createElement(
                "li",
                null,
                React.createElement(
                  "a",
                  { href: "#contact" },
                  "Contact"
                )
              )
            )
          )
        )
      )
    );
  }
});

var About = React.createClass({
  displayName: "About",

  render: function render() {
    return React.createElement(
      "div",
      { className: "about-container", id: "about" },
      React.createElement(
        "div",
        { className: "text-center" },
        React.createElement(
          "h2",
          null,
          React.createElement(
            "span",
            { className: "about-title" },
            "About Me"
          )
        )
      ),
      React.createElement(
        "p",
        { className: "about-text" },
        "I have been pursuing a self study course of web development for more than 1 year with Free Code Camp and other resources. I have earned the Front End Development Certification from Free Code Camp. My courses have included HTML5, CSS3, JavaScript, React, Angular, D3JS, JQuery, SASS. I also have some experience using NodeJS, Express, and MongoDB."
      )
    );
  }
});

var Projects = React.createClass({
  displayName: "Projects",

  getInitialState: function getInitialState() {
    return { selected: "none" };
  },

  changeSelection: function changeSelection(selection) {
    //console.log(clicked);
    this.setState({ selected: selection });
  },

  render: function render() {
    return React.createElement(
      "div",
      { className: "work-container", id: "work" },
      React.createElement(SelectButtons, { onUserSelect: this.changeSelection }),
      React.createElement(SelectedProjects, { selected: this.state.selected, projects: this.props.projectList })
    );
  }
});

var AllProjects = React.createClass({
  displayName: "AllProjects",

  render: function render() {
    var projectList = this.props.projects.map(function (project) {
      return React.createElement(
        "div",
        { className: "project " },
        React.createElement(
          "a",
          { href: project.link, target: "_blank" },
          React.createElement("img", {
            src: project.img,
            width: "300px",
            height: "150px",
            alt: project.name,
            "data-link": project.link
          }),
          React.createElement(
            "div",
            { className: "project-overlay" },
            project.name,
            React.createElement("br", null),
            project.desc
          )
        )
      );
    });

    return React.createElement(
      "div",
      { className: "projects-container" },
      projectList
    );
  }
});

var SelectedProjects = React.createClass({
  displayName: "SelectedProjects",

  render: function render() {
    var selected = this.props.selected;
    if (selected === "none") {
      return React.createElement(
        "div",
        null,
        React.createElement(AllProjects, { projects: this.props.projects })
      );
    };
    var filteredProjectList = this.props.projects.filter(function (project) {
      return project.uses === selected;
    });
    //console.log(filteredProjectList);
    return React.createElement(
      "div",
      null,
      React.createElement(AllProjects, { projects: filteredProjectList })
    );
  }
});

var SelectButtons = React.createClass({
  displayName: "SelectButtons",

  handleClick: function handleClick(e) {
    //console.log("clicked ", e.currentTarget.id);
    this.props.onUserSelect(e.currentTarget.id);
  },

  render: function render() {
    return React.createElement(
      "div",
      { className: "text-center" },
      React.createElement(
        "h2",
        null,
        React.createElement(
          "span",
          { className: "work-title" },
          "See My Work"
        )
      ),
      React.createElement(
        "span",
        { className: "work-subtitle" },
        "Filter by:"
      ),
      React.createElement(
        "div",
        { className: "btn-group text-center", "data-toggle": "buttons" },
        React.createElement(
          "label",
          { className: "btn btn-secondary select-buttons active", id: "none", onClick: this.handleClick },
          React.createElement("input", { type: "radio", name: "options", autocomplete: "off", checked: true }),
          " All Projects"
        ),
        React.createElement(
          "label",
          { className: "btn btn-secondary select-buttons", id: "React", onClick: this.handleClick },
          React.createElement("input", { type: "radio", name: "options", autocomplete: "off" }),
          " React"
        ),
        React.createElement(
          "label",
          { className: "btn btn-secondary select-buttons", id: "Angular", onClick: this.handleClick },
          React.createElement("input", { type: "radio", name: "options", autocomplete: "off" }),
          " Angular"
        ),
        React.createElement(
          "label",
          { className: "btn btn-secondary select-buttons", id: "D3", onClick: this.handleClick },
          React.createElement("input", { type: "radio", name: "options", autocomplete: "off" }),
          " D3"
        ),
        React.createElement(
          "label",
          { className: "btn btn-secondary select-buttons", id: "HTML", onClick: this.handleClick },
          React.createElement("input", { type: "radio", name: "options", autocomplete: "off" }),
          " HTML/CSS/JavaScript"
        )
      )
    );
  }

});

var SocialButtons = React.createClass({
  displayName: "SocialButtons",

  render: function render() {
    return React.createElement(
      "div",
      { className: "social-buttons-div text-center", id: "contact" },
      React.createElement(
        "h2",
        null,
        "Contact Me"
      ),
      React.createElement(
        "div",
        { className: "row" },
        React.createElement(
          "div",
          { className: "col-md-8 col-md-offset-2" },
          React.createElement(
            "a",
            { className: "btn btn-default btn-lg socialButtons", href: "https://twitter.com/", target: "_blank" },
            React.createElement("i", { className: "fa fa-twitter" }),
            " Twitter "
          ),
          React.createElement(
            "a",
            { className: "btn btn-default btn-lg  socialButtons", href: "https://github.com/mtaz", target: "_blank" },
            React.createElement("i", { className: "fa fa-github" }),
            "  Github"
          ),
          React.createElement(
            "a",
            { className: "btn btn-default btn-lg socialButtons", href: "https://www.linkedin.com/", target: "_blank" },
            React.createElement("i", { className: "fa fa-linkedin" }),
            " LinkedIn"
          ),
          React.createElement(
            "a",
            { className: "btn btn-default btn-lg socialButtons", href: "http://www.freecodecamp.com/mtaz", target: "_blank" },
            React.createElement("i", { className: "fa fa-fire" }),
            " FreeCodeCamp"
          )
        )
      ),
      React.createElement(
        "div",
        null,
        React.createElement(
          "a",
          { href: "mailto:mtafro@gmail.com", className: "email-tag" },
          "MTAFRO@GMAIL.COM"
        )
      )
    );
  }
});

$(document).ready(function () {

  ReactDOM.render(React.createElement(Portfolio, { projects: projects }), document.getElementById('portfolio'));



  //solution from scrollTo js

  $("a[href^='#']").click(function (e) {
    e.preventDefault();
    //alert("clicked", this.hash);
    $(window).stop(true).scrollTo(this.hash, { duration: 1000, interrupt: false });

  });


  // solution from stack overflow

  // $('a[href*=#]').bind("click", function(e){
  //
  // 	var anchor = $(this);
  // 	$('html, body').stop().animate({
  // 		scrollTop: $(anchor.attr('href')).offset().top
  // 	}, 1000);
  // 	e.preventDefault();
  // });


  // solution for smooth scrolling from css tricks

  // $('a[href*="#"]:not([href="#"])').click(function() {
  //   if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
  //     var target = $(this.hash);
  //     //console.log($(this.hash));
  //     target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
  //     if (target.length) {
  //       $('html, body').animate({
  //         scrollTop: target.offset().top
  //       }, 1000);
  //       return false;
  //     }
  //   }
  // });

  $("#sticky").sticky({ topSpacing: 0 });

});
