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
    object.thumbnail = path.join(directory+( object.thumbnail || 'default.jpg'))
    return object
}

function accountMapper(object) {
    object.avatar = path.join(directory+( object.avatar || 'default.jpg'))
    return object
}

module.exports = {
    checkForImage,
    novelMapper,
    accountMapper
}
