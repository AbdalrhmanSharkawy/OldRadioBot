module.exports = (client, message, queue, track) => {
    message.lineReply(`${track.title} Added to the queue`);
};