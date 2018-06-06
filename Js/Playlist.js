class Playlist {
	constructor (data) {
		this.id = data.id;
		this.name = data.name;
		this.image = data.image;
		this.container = null;
	}
	getId () {return this.id;}

	build () {
		this.container = $('<section>', {class: "playlist", });
		var container = this.container;
		$('<h4>', {
			text: this.name,
			class: "playlist-name"
		}).appendTo(container)
		$('<img>', {
			src: this.image, 
			class: "playlist-image",
			// error: function (e) {
			// 	e.target.src = 'images/playlist.jpg'
			// 	// console.log($(this)[0].src);
			// 	// $(this).attr( "src", "images/playlist.jpg" );
			// }
		}).appendTo(container)
		$('<button>', {
			class: "playlist-play-btn btn btn-dark",
			text: "▷",
		}).appendTo(container)

		this.container.appendTo($('main'))
	}

	registerPlaying() {
		this.container.find('.playlist-play-btn').click(function(event) {
			event.preventDefault();
			var player = new Player(this.id, this.name, this.image);
		}.bind(this));
	}
}