const axios = require('axios');
const userUrl = 'https://api.zuri.chat/users/';

/**
 * @param {string} org The organization ID
 * @param {string} user The user ID
 * @param {string} token The authorization token to validate
 * @return {boolean} A boolean to indicate whether the user is logged in and a member of the organization
 */
const validator = async (org, user, token) => {
    try {
        /**
         * Axios calls zc_core to GET that user and uses the provided token
         */
        const response = await axios.get(`${userUrl}${user}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        /**
         * The list of organizations the user belongs to is extracted from the response, if the user exists
         */
        const { Organizations } = response.data.data;

        /**
         * If the user is not part of the organization, the validator returns false
         */
        if (Organizations.indexOf(org) == -1) {
            return false;
        }

        return true;
    } catch (error) {

        /**
         * Any errors found returns false with no descriptive messages, since it is a simple validator
         */
        return false;
    }
}

module.exports = validator;