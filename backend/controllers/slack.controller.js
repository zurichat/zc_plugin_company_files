const axios = require("axios");
const { config } = require("../utils/slack.helper");

class Slack {
	static approximate(number) {
		const num = Number((Math.abs(number) * 100).toPrecision(15));
		return (Math.round(num) / 100) * Math.sign(number);
	}

	static async requestService(req, res) {
		let { timeTaken, endpoint } = req.body;
		timeTaken = Slack.approximate(Number(timeTaken));

		const slackData = {
			mkdwn: true,
			type: 'mrkdwn',
			attachments: [
				{
					fallback: 'Query to zc_core that took about 10s',
					color: '#FF6347',
					pretext: `Query Performance Service: request took too long to process.`,
					author_name: 'Requested Endpoint:',
					// author_link: "https://api.zuri.chat/",
					// author_icon: "https://zuri.chat/b73fbbfa9db45fc3c22e.svg",
					title: `${endpoint}`,
					title_link: `${endpoint}`,
					fields: [
						{
							title: 'Time Taken:',
							value: `${timeTaken} seconds`,
							short: true,
						},
					],
					image_url: 'http://my-website.com/path/to/image.jpg',
					thumb_url: 'http://example.com/path/to/thumb.png',
					footer: 'Zuri Chat API',
					footer_icon:
            'https://platform.slack-edge.com/img/default_application_icon.png',
					ts: new Date(),
				},
			],
			// text: `*Name: * ${pluginName}\n*TimeTaken: *${timeTaken}\n*Endpoint: *${endpoint}`
		}

		if (timeTaken >= 10) {
			await axios.post(`${config.url}${config.webhook}`, JSON.stringify(slackData));

			res.send({ message: 'success! message processed and sent.', reason: 'query time taken up to 10 seconds.' });
		} else {
			return res.send({ message: 'success! message processed but not sent.', reason: 'query time taken not up to 10 seconds.' });
		}
	}
}

module.exports = Slack;
