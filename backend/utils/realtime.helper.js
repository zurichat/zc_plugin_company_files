const axios = require('axios');
const { API_KEY, API_URL } = require('./realtime.config');

class RealTime {
    
    static publish = async (channel, data) => {

        try {
            
            await axios.post(
                API_URL,
                {
                    method: 'publish',
                    params: { channel, data },
                },
                {
                    headers: {
                        'Authorization': `apikey ${API_KEY}`,
                        'Content-Type': 'application/json'
                    }
                }

            )

            return { message:  `${channel} data has been successfully sent!`};

        } catch (error) {
            
            return { error }
            
        }
    }

    static sideBarPublish = async (organisation_id, user_id, data) => {
    let channel = `${organisation_id}_${user_id}_sidebar`;

    try {
      await axios.post(
        API_URL,
        {
          method: "publish",
          params: {
            channel,
            data,
          },
        },
        {
          headers: {
            Authorization: `apikey ${API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );
      return true;
    } catch (error) {
      throw new CustomError(`Unable to publish to ${channel}: ${error}`, "500");
    }
  }
}


module.exports = RealTime;
// centrifugo --config=config.json --admin