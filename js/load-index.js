requirejs.config({
    baseUrl: 'lib',
    paths: {
        app: '../app',
        jquery: '//ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min'
    },
    waitSeconds: 3
});
requirejs(['app/index']);
