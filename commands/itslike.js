module.exports = {
  name: "itslike",
  description: "Its like command",
  execute(msg, args) {
    msg.channel.send("It's like" + msg.content.substr(5));
  },
};
