class DynamicContentPopup extends FormPopup {
	constructor (text, url) {
		super(text);
		this.url = url;
	}
	build () {
		super.build();
		fetch(this.url)
		.then(response => response.text())
		.then(html => {
			$('#popup').append($(html));
		})
	} 
}