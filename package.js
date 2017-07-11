Package.describe({
    name: 'tecsinapse:framework7',
    version: '1.0.0',
    summary: 'Framework7 (v1.6.4) exporting file for Meteor',
    git: 'https://github.com/tecsinapse/meteor-framework7'
});

Package.onUse(function(api) {

    api.addFiles('Framework7/dist/js/framework7.min.js', 'client');

    api.addAssets([
        'Framework7/dist/css/framework7.ios.colors.min.css',
        'Framework7/dist/css/framework7.ios.min.css',
        'Framework7/dist/css/framework7.ios.rtl.min.css',
        'Framework7/dist/css/framework7.material.colors.min.css',
        'Framework7/dist/css/framework7.material.min.css',
        'Framework7/dist/css/framework7.material.rtl.min.css'
    ], 'client');

    api.addAssets([
        'Framework7/dist/img/i-f7-ios.png',
        'Framework7/dist/img/i-f7-material.png',
    ], 'client');

});

