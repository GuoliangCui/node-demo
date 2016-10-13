/**
 * Created by Administrator on 2016/10/13.
 */
var express = require('express')
var app = express()

app.get('/', function (req, res) {
    res.send('Hello World')
})
app.get('/test', function (req, res) {
    res.send('test page')
})
app.listen(80);