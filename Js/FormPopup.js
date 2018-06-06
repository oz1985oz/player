console.log('popup')

class FormPopup {
	constructor (text) {
		this.text = text;
	}
	build () {
		const container = $('<div>', {
			id: "popup_container",
		}).click(function(e) {
			this.close()
		}.bind(this)); //close popup by background click

		const popup = $('<div>', {
			id: "popup", 
		}).click(function(e) {
			e.stopPropagation()
		}.bind(this)); //prevent close popup by popup click

		popup.appendTo(container)

		$('<h2>', {
			text: this.text, 
		}).appendTo(popup)

		$('<button>', {
			text: "🗙", 			
			class: "close-btn", 
			click: this.close.bind(this), 
		}).appendTo(popup)

		$('body').append(container);
	}
	close () {
		console.log(this)
		console.log('close')
		$('#popup_container').remove();
	}
}