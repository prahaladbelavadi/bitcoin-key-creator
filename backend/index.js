const express = require("express");
const app = new express();
const bitcoin = require("bitcoinjs-lib");

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





const port = 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
