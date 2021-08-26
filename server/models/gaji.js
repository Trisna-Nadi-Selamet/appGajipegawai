const Sequelize = require('sequelize');
const db = require('../config/database/mysql');

let pegawai = db.define(
  'gaji',
  {
    gol: { type: Sequelize.INTEGER, primaryKey: true },
    gapok: Sequelize.BIGINT,
    tunjangan: Sequelize.BIGINT,
    transport: Sequelize.BIGINT,
    total_gaji: Sequelize.BIGINT,
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

pegawai.removeAttribute('id');
module.exports = pegawai;
