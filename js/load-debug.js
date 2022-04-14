requirejs.config({
    baseUrl: 'js/lib',
    paths: {
        app: '../app',
        jquery: '//ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min',
        githubAPI: "//cdn.skypack.dev/octokit"
    },
    waitSeconds: 3
});
requirejs(['github', 'app/debug']);
