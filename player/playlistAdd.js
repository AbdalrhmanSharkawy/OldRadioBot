module.exports = (client, message, queue, playlist) => {
    message.lineReply(`${playlist.title} Playlist Added (**${playlist.tracks.length}** Songs)`);
};