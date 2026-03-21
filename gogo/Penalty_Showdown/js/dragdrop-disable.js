window.addEventListener("load", function () {
	this.document.body.ondragstart = function () {
		return false
	}
	this.document.body.onselectstart = function () {
		return false
	}
})
