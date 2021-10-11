const axios = require('axios');
const { config } = require('../utils/slack.helper');

exports.requestService = async (req, res) => {
    try {
        
        const { timeTaken, endpoint } = req.body;
        const slackData = {
            mkdwn: true,
            attachments: [
                {
                    type: "mrkdwn",
                    fallback: "Query to zc_core that took about 10s",
                    color: "#FF6347",
                    pretext: `Query Performance Service: request took too long to process - <!Devvyhac>`,
                    author_name: "Requested Endpoint:",
                    // author_link: "https://api.zuri.chat/",
                    // author_icon: "https://zuri.chat/b73fbbfa9db45fc3c22e.svg",
                    title: `${endpoint}`,
                    title_link: `${endpoint}`,
                    fields: [
                        {
                            title: "Time Taken:",
                            value: `${timeTaken}-seconds`,
                            short: true
                        }
                    ],
                    image_url: "http://my-website.com/path/to/image.jpg",
                    thumb_url: "http://example.com/path/to/thumb.png",
                    footer: "Zuri Chat API",
                    footer_icon: "https://platform.slack-edge.com/img/default_application_icon.png",
                    ts: new Date()
                }
            ]
            // text: `*Name: * ${pluginName}\n*TimeTaken: *${timeTaken}\n*Endpoint: *${endpoint}`
        }

        const response = await axios.post(`${config.url}${config.webhook}`, JSON.stringify(slackData))
        res.send( "success" )

    } catch (error) {

        res.send("error")

    }
}