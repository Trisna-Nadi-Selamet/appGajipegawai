const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const gjiPegawaiRoutes = require('./routes/gajiPegawai');
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/pegawai', gjiPegawaiRoutes);

app.use((req, res, next) => {
  //handle url error atau tidak terdaftar pada routes
  const error = new Error('Tidak Ditemukan');
  error.status = 404;
  next(error);
});

// app.use((req,res,next)=>{
//     res.status(200).json({
//         code: "01",
//         message: "Restfull API nodeJS dan Express"
//     })
// })

app.use((error, req, res, next) => {
  //handle error
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
