const notFound = (req, res) => res.status(404).send('Route does not exit');

module.exports = notFound;