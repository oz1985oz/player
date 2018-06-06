 fetch('api/playlist')
.then(response => response.json())
.then(playlists => {
	console.log(playlists.data);
	init(playlists.data)

	$('input[type=search]').keyup(function(event) {
		console.log($(event.target).val())
		init(
			playlists.data.filter(pl => pl.name.toLowerCase().includes($(event.target).val().toLowerCase()))
		)
	});
})

function init(playlists) {
	$('main').empty()
	playlists.forEach(playlistObj => {
		var playlist = new Playlist(playlistObj);
		playlist.build();
		playlist.registerPlaying();
	})
}

$('#add_btn').click(function() {
	const formPopup = new DynamicContentPopup('Add New Playlist', 'main_form.html');
	formPopup.build();
});

$("form").submit(function(e) {
	e.preventDefault();
	console.log($('#PlaylistName').val());
	const formPopup = new DynamicContentPopup('Add Playlist Songs', 'add_form.html');
	formPopup.build();
});
