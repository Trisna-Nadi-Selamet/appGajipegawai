const model = require('../models/index');
const { Op } = require('sequelize');
const { QueryTypes } = require('sequelize');
const pegawaiControllers = {};
const db = require('../config/database/mysql');

pegawaiControllers.getAll = async function (req, res) {
  try {
    let pegawai = await model.pegawai.findAll({
      attributes: [
        ['nip', 'Nip'],
        ['nama', 'Nama'],
        ['gol', 'Golongan'],
        ['Jml_absen', 'Absen'],
      ],

      include: [
        {
          model: model.gaji,
          attributes: [
            ['gol', 'Golongan'],
            ['gapok', 'Gaji Pokok'],
            ['tunjangan', 'Tunjangan'],
            ['total_gaji', 'Total Gaji'],
          ],
        },
      ],
    }); //configurasion to sequelize
    // let data = JSON.parse(pegawai);
    console.log(req.userData);
    // console.log(JSON.stringify(pegawai, null, 2));

    //let pegawai = await db.query('SELECT nip AS Nip,nama AS Nama,gapok+tunjangan+(jml_absen*transport)as Gaji FROM pegawai inner join gaji on pegawai.gol=gaji.gol');
    // let pegawai = await db.query('SELECT pegawai.nip,pegawai.nama,pegawai.gol ,pegawai.jml_absen ,gaji.gol ,gaji.gapok ,gaji.tunjangan ,gaji.transport  FROM pegawai JOIN gaji ON pegawai.gol = gaji.gol ORDER BY pegawai.nip ASC');
    // let pegawai = await db.query('SELECT * FROM pegawai ');
    if (pegawai.length > 0) {
      res.status(200).json({
        message: 'Data Semua pegawai',
        data: pegawai,
      });
    } else {
      res.status(200).json({
        message: 'Data Tidak Di Temukan',
        data: [],
      });
    }
  } catch (error) {
    res.status(404).json({
      message: error,
    });
  }
};
pegawaiControllers.getOne = async function (req, res) {
  try {
    let pegawai = await model.pegawai.findAll({
      attributes: [
        ['nip', 'Nip'],
        ['nama', 'Nama'],
        ['gol', 'Golongan'],
        ['Jml_absen', 'Absen'],
      ],
      where: {
        nip: req.params.nip,
      },
    });
    // let pegawai = await db.query('SELECT nip FROM pegawai JOIN gaji WHERE nip =' + nip);
    if (pegawai.length > 0) {
      res.status(200).json({
        message: 'Data Semua Di Temukan',
        data: pegawai,
      });
    } else {
      res.status(200).json({
        message: 'Data Tidak Di Temukan',
        data: [],
      });
    }
  } catch (error) {
    res.status(404).json({
      message: error,
    });
  }
};
pegawaiControllers.getSearch = async function (req, res) {
  const search = req.query.keyword;
  try {
    let pegawai = await model.pegawai.findAll({
      attributes: [
        ['nip', 'Nip'],
        ['nama', 'Nama'],
        ['gol', 'Golongan'],
        ['Jml_absen', 'Absen'],
      ],

      where: {
        [Op.or]: [
          {
            nip: {
              [Op.like]: '%' + search + '%',
            },
          },
          {
            nama: {
              [Op.like]: '%' + search + '%',
            },
          },
        ],
      },
    });

    // let pegawai = await db.query('SELECT nip FROM pegawai JOIN gaji WHERE nip =' + nip);
    if (pegawai.length) {
      res.status(200).json({
        message: 'Data Semua Di Temukan',
        data: pegawai,
      });
    } else {
      res.status(200).json({
        message: 'Data Tidak Di Temukan',
        data: [],
      });
    }
  } catch (error) {
    res.status(404).json({
      message: error,
    });
  }
};

pegawaiControllers.post = async function (req, res) {
  try {
    let pegawai = await model.pegawai.create({
      nip: req.body.nip,
      nama: req.body.nama,
      gol: req.body.gol,
      jml_absen: req.body.jml_absen,
    });
    res.status(201).json({
      message: 'Berhasil Tambah Data Pegawai',
      data: pegawai,
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};
pegawaiControllers.put = async function (req, res) {
  try {
    let pegawai = await model.pegawai.update(
      {
        nama: req.body.nama,
        gol: req.body.gol,
        jml_absen: req.body.jml_absen,
      },
      {
        where: {
          nip: req.params.nip,
        },
      }
    );
    res.status(200).json({
      message: 'Berhasil Update Data Pegawai',
      data: pegawai,
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};
pegawaiControllers.delete = async function (req, res) {
  try {
    let pegawai = await model.pegawai.destroy({
      where: {
        nip: req.params.nip,
      },
    });
    res.status(200).json({
      message: 'Berhasil Menghapus Data Pegawai',
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};
module.exports = pegawaiControllers;
