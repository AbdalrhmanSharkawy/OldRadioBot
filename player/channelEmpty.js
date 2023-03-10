module.exports = (client, message, queue) => {
    message.lineReply(`Song Stopped because no one is listening`);
};