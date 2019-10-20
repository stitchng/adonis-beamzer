'use strict'

const Base = require('./Fetcher/Base.js')
const INVALID_SETTING_PARAM_MESSAGE = "invalid value for \"--setting\" flag: value is either 'targets' or 'heartbeat'"

class BeamzerFetch extends Base {
  /**
   * The command signature
   *
   * @method signature
   *
   * @return {String}
   */
  static get signature () {
    return `
    beamzer:fetch 
    { name: Name of the job to be queued }
    { --setting=@value: Specify setting type to be used for beamzer }
    `
  }

  /**
   * The command description
   *
   * @method description
   *
   * @return {String}
   */
  static get description () {
    return 'Fetch Beamzer setting (securely) from user dashboard account'
  }

  /**
   * Handle method executed by ace
   *
   * @method handle
   *
   * @param  {String} name < Destructure Args >
   * @param  {Object} options
   *
   * @return {void}
   */
  async handle ({ name }, options) {
  
  }
}

exports = module.exports = BeamzerFetch
exports.INVALID_SETTING_PARAM_MESSAGE = INVALID_SETTING_PARAM_MESSAGE
