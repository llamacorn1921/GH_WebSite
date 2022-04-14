requirejs.config({
    baseUrl: 'js/lib',
    paths: {
        app: '../app',
        jquery: '//ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min',
        githubAPI: "//cdn.skypack.dev/pin/octokit@v1.7.1-1PoRQSXdCDkLMTIDPwfX/mode=imports,min/optimized/octokit.js"
    },
    waitSeconds: 3
});
requirejs(['github', 'app/debug']);
