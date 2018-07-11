class Playlist {
	constructor (data) {
		this.id = data.id;
		this.name = data.name;
		this.image = data.image;
		this.container = null;
	}
	getId () {return this.id;}

	build () {
		this.container = $('<section>', {class: "playlist", "data-p_id": this.id});
		var container = this.container;
		$('<h4>', {
			text: this.name,
			class: "playlist-name"
		}).appendTo(container)

		$('<img>', {
			src: this.image, 
			class: "playlist-image",
		}).appendTo(container)

		$(document).ready(function(){
			$(".playlist-image").bind("error",function(){
		  	$(this).attr("src","images/playlist.jpg");
		 	});
		});

		$('<button>', {
			class: "playlist-play-btn btn btn-dark",
			text: "▷",
		}).appendTo(container)

		var btnContainer = $('<div>', {
			class: "playlist-btns",
		}).appendTo(container)

		$('<button>', {
			class: "playlist-x-btn btn btn-dark btn-sm",
			text: "✕",
			'data-playlist_id': this.id,
			click: this.removePlaylist
		}).appendTo(btnContainer)

		$('<button>', {
			class: "playlist-edit-btn btn btn-dark btn-sm",
			text: "✎",
			'data-playlist_id': this.id,
			click: this.editPlaylistform
		}).appendTo(btnContainer)

		this.container.appendTo($('main'))
	}

	registerPlaying () {
		this.container.find('.playlist-play-btn').click(function(event) {
			event.preventDefault();
			var player = new Player(this.id, this.name, this.image);
		}.bind(this));
	}

	removePlaylist (e) {
		var id = e.target.dataset.playlist_id;
		var approve = new FormPopup('Are you sure you want to delete this playlist?');
		approve.build();
		var forBtnsContainer = $('<div>', {id: "say_yes"}).appendTo('#popup');

		var yes = $('<button>', {
			text: "Yes, please",
			class: "btn btn-primary mr-2 yes-btn"
		}).appendTo(forBtnsContainer);

		var no = $('<button>', {
			text: "No, Thank You",
			class: "btn btn-secondery ml-2 no-btn"
		}).appendTo(forBtnsContainer);

		no.click(function(e) {
			approve.close();
		});
		yes.click(function() {
			$.ajax({
				url: 'api/playlist/' + id,
				type: 'DELETE',
				success: function(result) {
				}
			})
			.then(function() {
				var update = new Update()
				update.initPage()
			})
			approve.close();
		});
	}

	editPlaylistform (e){
		var id = e.target.dataset.playlist_id;
		const formPopup = new DynamicContentPopup('Edit Playlist', 'edit_playlist_form.html', id);
		formPopup.build();
	}

	UpdatePlaylist (updateData) {
		delete updateData["id"];
		var updateObj = JSON.stringify(updateData);
		console.log(updateObj);
		return new Promise(function (res,rej) {
			$.post('api/playlist/' + this.id, updateObj, function (data) {
				res()
			});
		}.bind(this))
	}

	
}