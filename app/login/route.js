import Route from '@ember/routing/route';
import Ember from 'ember';

const {
  inject
} = Ember;

export default Route.extend({
  session: inject.service('session'),

  actions: {
    logIn() {
      return this.get('session')
        .authenticate('authenticator:saml');
    }
  }
});
