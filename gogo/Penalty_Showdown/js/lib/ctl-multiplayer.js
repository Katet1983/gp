var CCTLMultiplayerGui = function () {
	this._cssClassDomain = "ctl-multiplayer-"
	this._idCurDialog
	this._idLoadingDialog

	// Use GameSnacks storage if available, otherwise fall back to localStorage
	const getNickname = async () => {
		if (typeof GameSnacks !== "undefined" && GameSnacks.storage) {
			try {
				const nickname = await GameSnacks.storage.getItem("nickname")
				return nickname || ""
			} catch (error) {
				console.warn("GameSnacks storage error:", error)
				return ""
			}
		} else {
			return localStorage.getItem("nickname") || ""
		}
	}

	// Initialize nickname
	getNickname().then((nickname) => {
		this._szNickName = nickname || "Player" + Math.floor(Math.random() * 1000)

		// Store the nickname if it wasn't set before
		if (!nickname) {
			this.setNickName(this._szNickName)
		}
	})

	jQuery(document).on(
		"click",
		"." + this._cssClassDomain + "room-list li",
		function () {
			//buildRoomList
			g_oCTLMultiplayer.closeCurrentDialog()

			var szRoomName = jQuery(this).text()

			if (jQuery(this).attr("data-private") === "true") {
				g_oCTLMultiplayer.showTypeRoomPassword(szRoomName)
			} else {
				g_oCTLMultiplayer.showLoading("connecting")
				on_ctl_multiplayer_join_room(szRoomName)
			}
		},
	)
}

CCTLMultiplayerGui.prototype.refreshRoomList = function (aRoomList) {
	var html = ""

	for (var i = 0; i < aRoomList.length; i++) {
		html += '<li data-private="' + aRoomList[i].private + '">'

		html += "<span>"
		html += aRoomList[i].name
		html += "</span>"

		if (aRoomList[i].private === true) {
			html += '<i class="' + this._cssClassDomain + 'icons-lock"></i>'
		}

		html += "</li>"
	}

	jQuery("." + this._cssClassDomain + "room-list").html(html)
}

CCTLMultiplayerGui.prototype.showRoomList = function (aRoomList) {
	var html = ""

	html += '<ul class="' + this._cssClassDomain + 'room-list">'
	html += "</ul>"
	html +=
		'<button onclick="on_ctl_multiplayer_refresh_room_list()" type="button" class="' +
		this._cssClassDomain +
		"update " +
		this._cssClassDomain +
		'btn-gray">'
	html += '<i class="' + this._cssClassDomain + 'icons-arrows-cw"></i>'
	html += "<span>update</span>"
	html += "</button>"

	this._idCurDialog = this.showDialog("Match list", html, [
		{
			txt: "quick match",
			cb: "on_ctl_multiplayer_join_quick_match",
			classes: "",
		},

		{
			txt: "create match",
			cb: "on_ctl_multiplayer_show_create_match",
			classes: "",
		},

		{ txt: "back", cb: "g_oCTLMultiplayer.closeCurrentDialog", classes: "" },
	])

	this.refreshRoomList(aRoomList)
}

CCTLMultiplayerGui.prototype.showTypeRoomPassword = function (szRoomName) {
	var html = ""

	html += '<div class="' + this._cssClassDomain + 'form-group">'
	html += "<label>Type Room Password</label>"
	html +=
		'<input type="password" name="password" data-room-name="' +
		szRoomName +
		'">'
	html += "</div>"

	this._idCurDialog = this.showDialog("Type Room Password", html, [
		{ txt: "ok", cb: "on_ctl_multiplayer_send_password", classes: "" },
		{
			txt: "back",
			cb: "on_ctl_multiplayer_close_type_room_password",
			classes: "",
		},
	])
}

CCTLMultiplayerGui.prototype.showCreateRoom = function () {
	var html = ""

	html += '<div class="' + this._cssClassDomain + 'form-group">'
	html += "<label>Name Room</label>"
	html +=
		'<input type="text" name="roomname" value="' +
		this._szNickName +
		"'s room\">"
	html += "</div>"

	html += '<div class="' + this._cssClassDomain + 'form-group">'
	html += "<label>Password</label>"
	html += '<input type="password" name="password">'
	html += "<p>If you don't set a password this room will be public.</p>"
	html += "</div>"

	this._idCurDialog = this.showDialog("Create room", html, [
		{ txt: "create", cb: "on_ctl_multiplayer_create_room", classes: "" },
		{ txt: "back", cb: "on_ctl_multiplayer_close_create_room", classes: "" },
	])
}

CCTLMultiplayerGui.prototype.showChooseNickName = function () {
	var html =
		'<input type="text" name="nickname" maxlength="20" value="' +
		this._szNickName +
		'">'
	this._idCurDialog = this.showDialog("Choose nickname", html, [
		{ txt: "ok", cb: "on_ctl_multiplayer_send_nickname", classes: "" },
		{ txt: "close", cb: "g_oCTLMultiplayer.closeCurrentDialog", classes: "" },
	])
}

CCTLMultiplayerGui.prototype.showGeneralDialog = function (szText, szCallback) {
	//var html = '<input type="text" name="nickname" value="'+ this._szNickName +'">';
	this._idCurDialog = this.showDialog(szText, "", [
		{ txt: "back", cb: szCallback, classes: "" },
	])
}

CCTLMultiplayerGui.prototype.closeLoadingDialog = function () {
	this.closeDlg(this._idLoadingDialog)
}
CCTLMultiplayerGui.prototype.closeCurrentDialog = function () {
	this.closeDlg(this._idCurDialog)
}

/*framework starts here*/

CCTLMultiplayerGui.prototype.makeCode = function () {
	var code = ""
	var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
	for (var i = 0; i < 32; i++)
		code += chars.charAt(Math.floor(Math.random() * chars.length))
	return code
}

CCTLMultiplayerGui.prototype.showDialog = function (
	szTitle,
	szHtmlContent,
	aBtn,
	id,
) {
	var szHtml = ""

	if (!id) {
		id = this.makeCode()
	}

	szHtml +=
		"<div id='" + id + "' class='" + this._cssClassDomain + "dlg-wrapper'>"
	szHtml += "<div class='" + this._cssClassDomain + "dlg-block'></div>"
	szHtml += "<div class='" + this._cssClassDomain + "dlg-content'>"

	szHtml += "<div class='" + this._cssClassDomain + "dlg-header'>"
	szHtml += "<h1>" + szTitle + "</h1>"
	szHtml += "</div>"

	szHtml += "<div class='" + this._cssClassDomain + "dlg-content-body'>"
	szHtml += szHtmlContent
	szHtml += "</div>"

	if (aBtn && aBtn.length > 0) {
		szHtml += "<div class='" + this._cssClassDomain + "dlg-footer'>"
		for (var i = 0; i < aBtn.length; i++) {
			szHtml +=
				"<button type='button' onclick='" +
				aBtn[i].cb +
				'("' +
				id +
				"\");' class='" +
				this._cssClassDomain +
				"-mini" +
				" " +
				aBtn[i].classes +
				"'>" +
				aBtn[i].txt +
				"</button>"
		}

		szHtml += this.buildExtraFooter()

		szHtml += "</div>"
	}

	szHtml += "</div>"
	szHtml += "</div>"

	jQuery("body").append(szHtml)

	return id
}

CCTLMultiplayerGui.prototype.buildExtraFooter = function () {
	var szHtml = ""

	szHtml += '<div class="' + this._cssClassDomain + 'copyright">'
	szHtml +=
		'<a href="http://www.codethislab.com" target="_blank">www.codethislab.com</a>'
	szHtml += "</div>"

	return szHtml
}

CCTLMultiplayerGui.prototype.showLoading = function (szTitle, oBtnCallback) {
	var szHtml = ""
	this._idLoadingDialog = this.makeCode()

	if (!szTitle) {
		szTitle = "Loading..."
	}

	szHtml +=
		"<div id='" +
		this._idLoadingDialog +
		"' class='" +
		this._cssClassDomain +
		"dlg-wrapper " +
		this._cssClassDomain +
		"fixed'>"
	szHtml += "<div class='" + this._cssClassDomain + "dlg-block'></div>"
	szHtml += "<div class='" + this._cssClassDomain + "dlg-content'>"

	szHtml += "<div class='" + this._cssClassDomain + "dlg-header'>"
	szHtml += "<h1>" + szTitle + "</h1>"
	szHtml += "</div>"
	szHtml +=
		"<div class='" +
		this._cssClassDomain +
		"dlg-content-body " +
		this._cssClassDomain +
		"align-center'>"
	szHtml +=
		'<i class="' + this._cssClassDomain + 'icons-spin5 animate-spin"></i>'
	szHtml += "</div>"

	if (oBtnCallback) {
		szHtml +=
			"<div class='" +
			this._cssClassDomain +
			"dlg-footer " +
			this._cssClassDomain +
			"center'>"
		//for( var i=0; i < aBtn.length; i++){
		szHtml +=
			"<button type='button' onclick='" +
			oBtnCallback +
			'("' +
			this._idLoadingDialog +
			"\");' class='" +
			this._cssClassDomain +
			"-mini" +
			" " +
			"" +
			"'>" +
			"back" +
			"</button>"
		//}

		szHtml += this.buildExtraFooter()

		szHtml += "</div>"
	}

	szHtml += "</div>"
	szHtml += "</div>"

	jQuery("body").append(szHtml)
}

CCTLMultiplayerGui.prototype.closeDlg = function (idDlg) {
	jQuery("#" + idDlg).remove()
}

CCTLMultiplayerGui.prototype.closeAllDialog = function () {
	g_oCTLMultiplayer.closeLoadingDialog()
	g_oCTLMultiplayer.closeCurrentDialog()
}

CCTLMultiplayerGui.prototype.setNickName = function (szNickName) {
	this._szNickName = szNickName || ""

	if (typeof GameSnacks !== "undefined" && GameSnacks.storage) {
		GameSnacks.storage.setItem("nickname", this._szNickName)
	} else {
		localStorage.setItem("nickname", this._szNickName)
	}
	console.log("Here is our nickname =====>", this._szNickName)
}

CCTLMultiplayerGui.prototype.getNickname = function () {
	return this._szNickName
}

var g_oCTLMultiplayer = new CCTLMultiplayerGui()
