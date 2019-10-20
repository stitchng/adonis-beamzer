'use strict'

/**
 * adonis-beamzer
 *
 * @license MIT
 * @copyright Slynova - Romain Lanz <romain.lanz@slynova.ch>
 *
 * @extended Oparand - Ifeora Okechukwu <isocroft@gmail.com>
 */

const path = require('path')

module.exports = async function (cli) {
  try {
    await cli.makeConfig('beamzer.js', path.join(__dirname, './config/beamzer.js'))
    cli.command.completed('create', 'config/beamzer.js')
  } catch (error) {
    // ignore if beamzer.js file already exists
  }
}
