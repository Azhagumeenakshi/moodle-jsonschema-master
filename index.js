import mysql from 'mysql-json-schema';
mysql.ExportSchemaToFile({
    user: 'root',
    password: '',
    host: '127.0.0.1',
    database: 'moodle',
    outputFolder: './output'
});
