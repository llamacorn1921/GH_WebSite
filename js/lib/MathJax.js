define(["jquery", "formulas"], function ($, f) {
	let boolReady = false;
	let boolPage = false;
	window.MathJax = {
		startup: {
			elements: null, // elements to typeset
			typeset: true,
			document: document, // The document (or fragment or string) to work in
			invalidOption: "warn", // Are invalid options fatal or produce an error?
			// optionError: OPTIONS.optionError,  // Function used to report invalid options
			ready: () => {
				// Called when components are loaded
				MathJax.startup.defaultReady();
				MathJax.startup.promise.then(() => {
					console.log("[MathJax] ready > completed");
					document.getElementById("mathjax-ready").innerHTML = true;
					f.loadTex(() => {
						MathJax.typeset();
					});
					$("#SI-button").attr("disabled", false);
					$("#SI-button").click((e) => {
						e.preventDefault();
						f.calculate(() => {
							MathJax.typeset();
						});
					});
				});
			},
			pageReady: () => {
				// Called when MathJax and page are ready
				return MathJax.startup.defaultPageReady().then(() => {
					console.log("[MathJax] pageReady > completed");
					document.getElementById(
						"mathjax-pageReady"
					).innerHTML = true;
					$("#SI-formula").text(
						"$$\\displaystyle{\\displaylines{I=P*R*T}}$$"
					);
				});
			},
		},
		options: {
			skipHtmlTags: { "[+]": ["li"] },
			includeHtmlTags: { br: "n", wbr: "", "#comment": "" },
			ignoreHtmlClass: "ignore_math",
			processHtmlClass: "process_math",
			compileError: function (doc, math, err) {
				doc.compileError(math, err);
			},
			typesetError: function (doc, math, err) {
				doc.typesetError(math, err);
			},
		},
		loader: { load: ["input/tex", "[tex]/color"] },
		tex: {
			packages: {
				"[+]": ["color"],
			},
			inlineMath: [
				// start/end delimiter pairs for in-line math
				["\\(", "\\)"],
			],
			displayMath: [
				// start/end delimiter pairs for display math
				["$$", "$$"],
				["\\[", "\\]"],
			],
		},
		svg: {
			fontCache: "global",
		},
	};
	(function () {
		let script = document.createElement("script");
		script.id = "MathJaxScriptSource";
		script.src =
			"https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js";
		script.async = true;
		document.head.appendChild(script);
	})();
});
