module.exports = (client, message, query, tracks) => {
    message.lineReply({
        embed: {
                    color: '#c52e2e',
            author: { name: `Search Results  ${query}` },
                    footer: { text: `${message.author.tag}` },
            timestamp: new Date(),
            description: `${tracks.map((t, i) => `**${i + 1}** - ${t.title}`).join('\n')}`,
        },
    });
};