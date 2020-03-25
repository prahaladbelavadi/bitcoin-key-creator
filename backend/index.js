const express = require("express");
const app = new express();
const bitcoin = require("bitcoinjs-lib");

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello crypto World!");
});

app.get("/new", (req, res) => {
  // return Address and private key from new key pair

  const keyPair = bitcoin.ECPair.makeRandom();
  const { address } = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey });

  res.json({ private_key: keyPair.toWIF(), address });
});

app.get("/import", (req, res) => {
  if (req.query.wif) {
    const wif = req.query.wif;
    const keyPair = bitcoin.ECPair.fromWIF(wif);
    const { address } = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey });

    res.json({ address, private_key: wif });
  }
  res.status(401).send("Please supply WIF in query params");
  // res.json({ body: req.body, params: req.params, query: req.query });
});

const port = 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
