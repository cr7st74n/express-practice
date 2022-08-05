const { DataTypes, Model } = require('sequelize');

class Student extends Model {}

Student.init({
  // Model attributes are defined here
  student_name: {
    type: DataTypes.STRING,
    allowNull: false,
    // validate: {min:3,max:250},
  }
}, {
  // Other model options go here
  sequelize: require("../db/connection"), // We need to pass the connection instance
  modelName: 'Student' // We need to choose the model name
});

module.exports = Student;

  



//Reference for the polling of the objects === same as Python .CG 
// const obj = {
//     name: "Cris",
//     age: 23
// };

// const {name,age} = obj;