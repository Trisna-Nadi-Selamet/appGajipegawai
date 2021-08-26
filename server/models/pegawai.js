const Sequelize = require('sequelize');
const db = require('../config/database/mysql');
const gaji = require('./gaji');
let pegawai = db.define(
  'pegawai',
  {
    nip: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      validate: {
        notEmpty: {
          message: 'Nip tidak boleh kosong!',
        },
      },
    },
    nama: {
      type: Sequelize.STRING,
      validate: {
        notEmpty: {
          message: 'Nama tidak boleh kosong!',
        },
      },
    },
    gol: {
      type: Sequelize.INTEGER,
      validate: {
        notEmpty: {
          message: 'Golongan tidak boleh kosong!',
        },
      },
    },
    jml_absen: {
      type: Sequelize.INTEGER,
      validate: {
        notEmpty: {
          message: 'Jumlah absen tidak boleh kosong!',
        },
      },
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);
pegawai.hasOne(gaji, { foreignKey: 'gol', targetKey: 'gol' });
pegawai.belongsTo(gaji, { foreignKey: 'gol', targetKey: 'gol' });

pegawai.removeAttribute('id');
module.exports = pegawai;
