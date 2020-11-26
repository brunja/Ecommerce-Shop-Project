const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const port = 3000;
const authRouter = require('./routes/admin/auth');
const productsRouter = require('./routes/admin/products');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({
    keys: ['lkasdasdadasdas65dd67']
}));
app.use(authRouter);
app.use(productsRouter);


app.listen(port, () => {
    console.log('Listening');
});