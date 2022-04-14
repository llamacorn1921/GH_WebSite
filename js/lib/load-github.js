define(function() {

	(function () {
		let script = document.createElement("script");
		script.type = 'module';
		script.id = "OctoKit";
		script.src =
			"https://cdn.skypack.dev/octokit";
		script.async = true;
		document.head.appendChild(script);
	})();
});
