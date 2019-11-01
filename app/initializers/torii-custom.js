import ToriiSamlProvider from '../torii/torii-saml-provider';
import ToriiPopup from '../torii/torii-popup';

export function initialize(app) {
  app.register('torii-service:popup', ToriiPopup);
  app.register('torii-provider:saml', ToriiSamlProvider);
}

export default {
  name: 'torii-custom',
  initialize
};
