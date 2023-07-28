// Implementation heavily relies on
// https://github.com/Vestorly/torii/blob/master/addon/mixins/ui-service-mixin.js
import RSVP from 'rsvp';
import ToriiPopupService from 'torii/services/popup';

export default ToriiPopupService.extend({
  pollRemote() {
    this.remote.postMessage('requestCredentials', '*');
  },

  open(url, keys, options) {
    let lastRemote = this.remote;

    return new RSVP.Promise((resolve) => {
      if (lastRemote) {
        this.close();
      }
      this.openRemote(url, '__torii_request', options);
      this.schedulePolling();

      window.addEventListener('message', function(event) {
        let {
          data
        } = event;
        if (data.auth_token) {
          resolve(data);
        }
      });
    });
  }
});
