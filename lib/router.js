Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/starter', {name: 'starter'});
Router.route('/theme', {name: 'theme'});
Router.route('/grid', {name: 'grid'});
Router.route('/', {name: 'main'});