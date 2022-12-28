const logRequest = (req, res, next) => {
    console.log('terjadi req ke : ', req.method, req.url);
        next();
}

module.exports = logRequest;