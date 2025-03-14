const fragmenter = require('@flybywiresim/fragmenter');
const fs = require('fs');

const execute = async () => {
    try {
        const result = await fragmenter.pack({
            packOptions: { splitFileSize: 102_760_448, keepCompleteModulesAfterSplit: false },
            version: require('./fragmenter_version').version,
            baseDir: './hues-a339x-mau/out/hues-livery-a339x-airmauritius-package',
            outDir: './hues-a339x-mau/out/build-modules',
            modules: [{
                name: 'MAU-NBU',
                sourceDir: './SimObjects/Airplanes/HWD-A339_MAU-NBU'
            },
            {
                name: 'MAU-NBV',
                sourceDir: './SimObjects/Airplanes/HWD-A339_MAU-NBV'
            }]
        });
        console.log(result);
        console.log(fs.readFileSync('./hues-a339x-mau/out/build-modules/modules.json').toString());
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
};

execute();
