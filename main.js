const Discord = require('discord.js');
const fetch = require('node-fetch');
const client = new Discord.Client();

let episodes = "";
let title = "";

function splitOnFirst(str, sep) {
    const index = str.indexOf(sep);
    return index < 0 ? [str] : [str.slice(0, index), str.slice(index + sep.length)];
}
client.on('message', message => {
    if (message.content.includes("kitsu.") == true || message.content.includes(".kitsu ") == true) {
        fetch('https://kitsu.io/api/edge/anime?filter[text]=' + splitOnFirst(message.content, " "))
            .then(response => response.json())
            .then(data => {
                if (data.data[0].attributes.episodeCount == null) {
                    episodes = "?";
                }
                if (data.data[0].attributes.episodeCount == 1 || data.data[0].attributes.episodeCount == "1") {
                    episodes = "movie";
                } else {
                    episodes = data.data[0].attributes.episodeCount + " ep"
                }
                if (data.data[0].attributes.titles.en != undefined && data.data[0].attributes.titles.en != null) {
                    title = data.data[0].attributes.titles.en
                }
                if (data.data[0].attributes.titles.en == undefined || data.data[0].attributes.titles.en != null) {
                    title = data.data[0].attributes.titles.en_jp
                }
                if (data.data[0].attributes.titles.en == undefined || data.data[0].attributes.titles.en != null && data.data[0].attributes.titles.en_jp == undefined || null) {
                    title = data.data[0].attributes.titles.ja_jp
                }
                return data
            }).then(data => {
                new Discord.Message(`${'<@590646724570251271>'}`);
                const embed = new Discord.MessageEmbed()
                    .setTitle(title)
                    .setImage(data.data[0].attributes.posterImage.large)
                    .addField("Status", data.data[0].attributes.status, true)
                    .addField("Views", "👁" + data.data[0].attributes.userCount, true)
                    .addField("Rank", "#" + data.data[0].attributes.popularityRank, true)
                    .addField("Rating", data.data[0].attributes.averageRating + "/100", true)
                    .addField("Episode Length", data.data[0].attributes.episodeLength + "min", true)
                    .addField("Age Rating", data.data[0].attributes.ageRating, true)
                    .setAuthor(data.data[0].attributes.createdAt.split('T').shift())
                    .setColor('blue')
                    .setDescription(data.data[0].attributes.description)
                    .setFooter(episodes)
                message.reply(embed);
            })


    }
    if (message.content.includes("kitsuMostWatched.") == true || message.content.includes(".kitsuMostWatched") == true) {
        fetch("https://kitsu.io/api/edge/anime?sort=-userCount")
            .then(response => response.json())
            .then(data => {
                if (data.data[0].attributes.episodeCount == null) {
                    episodes = "?";
                }
                if (data.data[0].attributes.episodeCount == 1 || data.data[0].attributes.episodeCount == "1") {
                    episodes = "movie";
                } else {
                    episodes = data.data[0].attributes.episodeCount + " ep"
                }
                if (data.data[0].attributes.titles.en != undefined && data.data[0].attributes.titles.en != null) {
                    title = data.data[0].attributes.titles.en
                }
                if (data.data[0].attributes.titles.en == undefined || data.data[0].attributes.titles.en != null) {
                    title = data.data[0].attributes.titles.en_jp
                }
                if (data.data[0].attributes.titles.en == undefined || data.data[0].attributes.titles.en != null && data.data[0].attributes.titles.en_jp == undefined || null) {
                    title = data.data[0].attributes.titles.ja_jp
                }
                return data
            }).then(data => {
                new Discord.Message(`${'<@590646724570251271>'}`);
                const embed = new Discord.MessageEmbed()
                    .setTitle(title)
                    .setImage(data.data[0].attributes.posterImage.large)
                    .addField("Status", data.data[0].attributes.status, true)
                    .addField("Views", "👁" + data.data[0].attributes.userCount, true)
                    .addField("Rank", "#" + data.data[0].attributes.popularityRank, true)
                    .addField("Rating", data.data[0].attributes.averageRating + "/100", true)
                    .addField("Episode Length", data.data[0].attributes.episodeLength + "min", true)
                    .addField("Age Rating", data.data[0].attributes.ageRating, true)
                    .setAuthor(data.data[0].attributes.createdAt.split('T').shift())
                    .setColor('blue')
                    .setDescription(data.data[0].attributes.description)
                    .setFooter(episodes)
                message.reply(embed);
            })


    }
    if (message.content.includes("kitsuBestRated.") == true || message.content.includes(".kitsuBestRated") == true) {
        fetch("https://kitsu.io/api/edge/anime?sort=-averageRating")
            .then(response => response.json())
            .then(data => {
                if (data.data[0].attributes.episodeCount == null) {
                    episodes = "?";
                }
                if (data.data[0].attributes.episodeCount == 1 || data.data[0].attributes.episodeCount == "1") {
                    episodes = "movie";
                } else {
                    episodes = data.data[0].attributes.episodeCount + " ep"
                }
                if (data.data[0].attributes.titles.en != undefined && data.data[0].attributes.titles.en != null) {
                    title = data.data[0].attributes.titles.en
                }
                if (data.data[0].attributes.titles.en == undefined || data.data[0].attributes.titles.en != null) {
                    title = data.data[0].attributes.titles.en_jp
                }
                if (data.data[0].attributes.titles.en == undefined || data.data[0].attributes.titles.en != null && data.data[0].attributes.titles.en_jp == undefined || null) {
                    title = data.data[0].attributes.titles.ja_jp
                }
                return data
            }).then(data => {
                new Discord.Message(`${'<@590646724570251271>'}`);
                const embed = new Discord.MessageEmbed()
                    .setTitle(title)
                    .setImage(data.data[0].attributes.posterImage.large)
                    .addField("Status", data.data[0].attributes.status, true)
                    .addField("Views", "👁" + data.data[0].attributes.userCount, true)
                    .addField("Rank", "#" + data.data[0].attributes.popularityRank, true)
                    .addField("Rating", data.data[0].attributes.averageRating + "/100", true)
                    .addField("Episode Length", data.data[0].attributes.episodeLength + "min", true)
                    .addField("nsfw", data.data[0].attributes.nsfw, true)
                    .setAuthor(data.data[0].attributes.createdAt.split('T').shift())
                    .setColor('blue')
                    .setDescription(data.data[0].attributes.description)
                    .setFooter(episodes)
                message.reply(embed);
            })


    }
});
client.login('');