class Update {
	constructor () {
	}

	initPage () {
		$.get("api/playlist", function(playlists) {
			$('main').empty()
			console.log(playlists.data)
			$.each(playlists.data, function(index, value) {
				var playlist = new Playlist(value);
				playlist.build();
				playlist.registerPlaying();
			});
		});
	}
}