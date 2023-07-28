import Ember from 'ember';
import RSVP from 'rsvp';
import ToriiAuthenticator from 'ember-simple-auth/authenticators/torii';

const {
  inject
} = Ember;

export default ToriiAuthenticator.extend({
  torii: inject.service(),

  restore(data) {
    this._authenticateWithProvider(data.provider, data);
    return RSVP.resolve(data);
  },

  authenticate() {
    return this._super("saml").then((data) => {
      let apiAuth = {

        'Client': data.client_id,
        'Token-Type': 'Bearer',
        'Expiry': data.expiry,
        'uid': data.uid
      };
      return {
        apiAuth
      };
    });
  }
});
