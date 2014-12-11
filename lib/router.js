Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/starter', {name: 'starter'});
Router.route('/theme', {name: 'theme'});
Router.route('/', {name: 'main'});