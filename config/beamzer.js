'use strict'

const Env = use('Env')

module.exports = {
    apiKey: Env.get('BEAMZER_PUBLIC_KEY', 'xxxxx'),
    
    secretKey: Env.get('BEAMZER_SECRET_KEY', 'xxxxxx'),
    
    targetsSettingFilePath: Env.get('BEAMZER_SETTINGS_JSON_FILE_PATH', __dirname + '../../../beamzer-config.json'),
    
    beamzerMercureHubUrl: Env.get('BEAMZER_HUB_URL', 'https://app.beamzer.co/hub')
};
