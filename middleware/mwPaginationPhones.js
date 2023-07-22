module.exports.mwPhones = (req, res, next) => {
    const { page = 2, results = 3 } = req.query;
    req.pagination = {
        limit: results,
        offset: (page - 1) * results
    };
    next()
}