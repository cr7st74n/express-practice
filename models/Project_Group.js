const { DataTypes, Model } = require('sequelize');
const Student = require("./Student");

class project_groups extends Model {}

project_groups.init({
  // Model attributes are defined here
  group_name: {
    type: DataTypes.STRING,
    allowNull: false,
    // validate: {min:3,max:250},
  },
  project_url:{
    type: DataTypes.STRING,
    defaultValue: null 
  },
  is_finishd:{
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
}, {
  // Other model options go here
  sequelize: require("../db/connection"), // We need to pass the connection instance
  modelName: 'project_groups' // We need to choose the model name
});

project_groups.hasMany(Student);
Student.belongsTo(project_groups);

module.exports = project_groups;

// CREATE TABLE project_groups(
//     group_id INT AUTO_INCREMENT PRIMARY KEY,
//     -- create our key value with auto increment
//     group_name VARCHAR(250) NOT NULL,
//     project_url VARCHAR(250) DEFAULT NULL,
//     is_finished BOOLEAN DEFAULT FALSE,
//     -- create text with  a limit words of 250
//     create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
// );


