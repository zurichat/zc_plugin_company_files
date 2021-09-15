const DatabaseConnection = require('../utils/database.helper');
const File = new DatabaseConnection('File');

exports.searchAllFiles = async (req, res) => {
    // check for the room id of the current search
    try{
        const {data} = await File.fetchAll();
        if(data.length === 0){
            return res.status(404).json('Sorry, there are no files in the database for this room');
        }
        res.status(200).json(data);
        return
    }catch(err){
        res.status(500).json(err)
    }
}

exports.searchAndFilterFiles = async (req, res) => {
    // In this route, we will search files and filter them
    try{
        const {filename, filetype } = req.query
        if(filename && filetype){
            const {data} = await File.fetchAll();
            if(data.length === 0){
                return res.status(404).json('Sorry, there are no files in the database for this room');
            }
            let respData = data.filter(nFile => {
                if(nFile.fileName === undefined){
                    return false;
                }else{
                    return nFile.fileName.toLowerCase().includes(filename.toLowerCase())
                }
            }).filter(nFile => {
                if(nFile.type === undefined){
                    return false;
                }else if(filetype === "all"){
                    return true
                }else{
                    return nFile.type.toLowerCase().includes(filetype.toLowerCase())
                }
            })
            if(respData.length === 0){
                return res.status(404).json('No such file exist');
            }
            res.status(200).json(respData);
            return
        }
        res.status(400).json('Invalid search parameters');
    }catch(err){
        res.status(500).json(err)
    }
}