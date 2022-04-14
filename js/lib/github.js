define(['githubAPI'], function(api) {

	const github = new api.Octokit();

	(function () {
		alert(api);
		alert(github);
	})();
});