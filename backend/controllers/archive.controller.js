const { default: axios } = require('axios');

// const generateZip = require('../middlewares/archiver');

exports.archiveFile = async (req, res) => {
        const url = await axios.patch('https://api.zuri.chat');
        
        const obj = url.data;
        res.send(obj)
    };

