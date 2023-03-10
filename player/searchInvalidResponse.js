module.exports = (client, message, query, tracks, content, collector) => {
    if (content === 'cancel') {
        collector.stop();
        return message.lineReply(` Selected has been cancelled `);
    } else message.lineReply(` You Must send a valid number between **1** and **${tracks.length}**`);
};