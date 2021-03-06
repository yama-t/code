javascript:(function() {
	document.querySelectorAll('.toc').forEach(function(node) {
		node.parentNode.removeChild(node);
	});
	var e = (function() { /*.toc{border: 1px solid #aaa;padding: 4px 12px;margin-bottom: 12px;position: relative;padding-top: 30px;}.toc-title{display: inline-block;width: auto;background-color: #ccc;position: absolute;left: 0px;top: 0px;font-size: 8pt;padding: 2px 4px;padding-right: 8px;color: #666;}.toc-h{font-size: 11pt;}.toc-h1{}.toc-h2{margin-left: 20px;}.toc-h3{margin-left: 40px;}*/ }).toString().match(/[^]*\/\*([^]*)\*\/\}$/)[1];
	var f = document.createElement('style');
	f.classList.add("toc-style");
	f.innerHTML = '\n' + e + '\n';
	document.head.appendChild(f);
	var g = document.createElement('div');
	g.classList.add('toc');
	var i = document.createElement('div');
	i.classList.add('toc-title');
	i.innerHTML = 'TOC';
	g.appendChild(i);
	var j = document.querySelectorAll('.markdown-body')[0];
	j.insertBefore(g, j.firstChild);
	document.querySelectorAll('.markdown-body h1, .markdown-body h2, .markdown-body h3').forEach(function(a) {
		var b = a.tagName.toLowerCase();
		var c = document.createElement("div");
		c.classList.add("toc-h");
		c.classList.add("toc-" + b);
		var d = document.createElement("a");
		c.appendChild(d);
		d.innerHTML = "- " + a.textContent;
		d.href = a.querySelectorAll('a')[0].href;
		g.appendChild(c)
	})
})();
