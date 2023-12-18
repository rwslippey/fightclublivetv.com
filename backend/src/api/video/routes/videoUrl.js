module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/videourl',
            handler: 'video.videoUrl',
            config:{
                auth: false,
            }
        }
    ]
}