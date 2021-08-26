const express = require('express');
const router = express.Router();
const db = require('../config/database/mysql');
const controllers = require('../controllers/index');

router.get('/', controllers.pegawaiControllers.getAll);
router.get('/cari', controllers.pegawaiControllers.getSearch);
router.get('/:nip', controllers.pegawaiControllers.getOne);
router.post('/', controllers.pegawaiControllers.post);
router.put('/:nip', controllers.pegawaiControllers.put);
router.delete('/:nip', controllers.pegawaiControllers.delete);

// router.get('/',(req,res,next)=>{
//    let sql = "SELECT * FROM pegawai";
//    db.query(sql,(err,result)=>{
//        if (err) throw err;
//        res.status(200).json({
//         message: "Get method mhasiswa",
//         data: result
//        })
//    })
// })

//reqest inseert json file
// router.post('/', (req, res, next) => {
//   const nip = req.body.nip;
//   const nama = req.body.nama;
//   const gol = req.body.gol;
//   const jml_absen = req.body.jml_absen;
//   let sql = "INSERT INTO pegawai (nip,nama,gol,jml_absen) VALUES ('" + nip + "','" + nama + "','" + gol + "','" + jml_absen + "')";
//   db.query(sql, (err, result) => {
//     if (err) throw err;
//     res.status(200).json({
//       message: 'Berhasil ditambahkan ',
//     });
//   });
// });

// router.get('/search', (req, res, next) => {
//   const nip = req.query.nip;
//   let sql = 'SELECT * FROM pegawai WHERE nip LIKE=' + nip;
//   db.query(sql, (err, result) => {
//     if (err) throw err;

//     if (result.length) {
//       res.status(200).json({
//         message: 'Nip Pegawai Ditemukan',
//         data: result,
//       });
//     } else {
//       res.status(200).json({
//         message: 'Nim Pegawai Tidak Ditemukan',
//         data: result,
//       });
//     }
//   });
// });

// router.put('/', (req, res, next) => {
//   const nip = req.body.nim;
//   const nama = req.body.nama;
//   const gol = req.body.gol;
//   const jml_absen = req.body.jml_absen;
//   let sql = "UPDATE pegwai SET nama = '" + nama + "',gol = '" + gol + "',jml_absen = '" + jml_absen + "' WHERE nip =" + nip;

//   db.query(sql, (err, result) => {
//     if (err) throw err;
//     res.status(200).json({
//       message: 'Update data pegawai berhasil',
//     });
//   });
// });

// router.delete('/:nim', (req, res, next) => {
//   const nim = req.params.nim;
//   let sql = 'DELETE FROM  pegwai WHERE nim =' + nim;

//   db.query(sql, (err, result) => {
//     if (err) throw err;
//     res.status(200).json({
//       message: 'Delete data pegawai berhasil',
//     });
//   });
// });

module.exports = router;
