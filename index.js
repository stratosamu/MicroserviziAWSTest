const express = require('express')
const app = express()
const port = 5000
const list = [
        {
            "username": "ClarkKent",
            "id": "a01",
            "email": "clarkent@gmail.com",
            "hashPassword": "fc5e038d38a57032085441e7fe7010b0"
        },
        {
            "username": "BruceWayne",
            "id": "b02",
            "email": "brucewayne@outlook.it",
            "hashPassword": "0a123b92f789055b946659e816834465"
        },
        {
            "firstName": "PeterParker",
            "id": "c03",
            "email": "peterparker@gmail.com",
            "hashPassword": "fc5e038d38a57032085441e7fe7010b0"
        },
        {
            "firstName": "DwayneJohnson",
            "id": "d03",
            "email": "therock4444@gmail.com",
            "hashPassword": "42e7862f4ad5225471866d2023fc4cca"
        }
    ]

app.get('/users', (req, res) => {
  res.json(list)
})

app.listen(port,"0.0.0.0", () => {
  console.log("Example app listening on port ${port}")
})
