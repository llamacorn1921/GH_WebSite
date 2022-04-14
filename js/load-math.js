requirejs.config({
    baseUrl: 'js/lib',
    paths: {
        app: '../app',
        jquery: '//ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min'
    },
    waitSeconds: 5
});
requirejs(['MathJax','app/math']);
