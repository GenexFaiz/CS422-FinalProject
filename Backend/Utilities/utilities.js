const path = require('path');
const fs = require('fs');
const directory = path.join(__dirname, "../image/");
const imageType = ["image/jpeg" ,"image/png"]

function checkForImage(mimeType) {
    const type = imageType.findIndex(item => item == mimeType)
    if (type == -1) return false
    return true
}

function novelMapper(object) {
    return {
        ...object,
        thumbnail: path.join(directory+( object.thumbnail || 'default.jpg'))
    }
}

module.exports = {
    checkForImage,
    novelMapper
}
