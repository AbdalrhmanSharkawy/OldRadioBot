module.exports = (client, message, queue) => {
    message.lineReply(`The songs have been Stopped because there are no songs in the queue`);
};