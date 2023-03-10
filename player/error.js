module.exports = (client, error, message, ...args) => {
    switch (error) {
        case 'NotPlaying':
            message.lineReply(`There Are No Music In The Queue`);
            break;
        case 'NotConnected':
            message.lineReply(` You Need To Be In VC`);
            break;
        case 'UnableToJoin':
            message.lineReply(` I can't enter your VC Please Check my permissions`);
            break;
        case 'VideoUnavailable':
            message.lineReply(` ${args[0].title} This Song  is not available in your country (Skipped)`);
            break;
        case 'MusicStarting':
            message.lineReply(`The songs are playing, please wait`);
            break;
        default:
            message.lineReply(`Something Went Wrong`);
    };
};
