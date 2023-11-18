const notFound = (req,res) => {
    res.status(404).send('route your searching for is not there')
}

module.exports = notFound