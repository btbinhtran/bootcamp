Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/starter', {name: 'starter'});
Router.route('/theme', {name: 'theme'});
Router.route('/grid', {name: 'grid'});
Router.route('/jumbotron', {name: 'jumbotron'});
Router.route('/jumbotron-narrow', {name: 'jumbotronNarrow'});
Router.route('/navbar', {name: 'navbar'});
Router.route('/navbar-static-top', {name: 'navbarStaticTop'});
Router.route('/', {name: 'main'});