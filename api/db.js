const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'mysql-db',         
  user: 'root',
  password: 'krmethax',       
  database: 'pet_sitter_app', 
  port: 3307              
});

module.exports = {
  query: async (sql, params) => {
    const [results] = await pool.execute(sql, params);
    return results;
  }
};
