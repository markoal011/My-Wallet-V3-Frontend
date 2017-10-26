/* eslint-disable semi */
angular
  .module('walletApp')
  .component('blockAlert', {
    bindings: {
      config: '<',
      showIcon: '<'
    },
    templateUrl: 'templates/block-alert.pug',
    controller: BlockAlertController
  })

function BlockAlertController (languages, blockAlert) {
  this.iconTypes = {
    'info': 'icon-success',
    'warning': 'icon-alert',
    'danger': 'icon-build'
  }
  if (blockAlert.isValidConfig(this.config)) {
    this.alert = blockAlert.localizeConfig(languages.get(), this.config)
    this.dismissible = this.alert.hideType != null
    this.collapsible = this.alert.hideType === 'collapse'
    this.dismiss = () => { this.dismissed = true }
  } else {
    console.warn('block-alert received invalid config:', this.config)
  }
}
