
const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 3000
const axios = require('axios')
const CircularJSON = require('circular-json')

/*
app.use(cors())
// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/api/options/:ticker', async(req, res) => {
    const ticker = req.params.ticker
    const data = await fetchOptionChain(ticker)
    res.send(`${data}`);
});
*/
const fetchOptionChain = async(ticker) => {
    const reqId = Math.floor(Math.random() * 10) + 1
    const url = `https://www.optionsprofitcalculator.com/ajax/getOptions?stock=${ticker}&reqId=${reqId}`
    const data = await axios.get(url)
    return CircularJSON.stringify(data)
}

async function main ( ){
    const ret = await fetchOptionChain("sfix")
    console.log(ret)
}

main()
