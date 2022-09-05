const Sequelize = require('sequelize');

const sequelize = new Sequelize('prueba', 'root', '', {
  host: 'localhost',
  dialect: 'mariadb' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });



class Cars extends Sequelize.Model {}
Cars.init({
  firstName: Sequelize.STRING,
  lastName:Sequelize.STRING
}, { sequelize, modelName: 'users' });

const Model = Sequelize.Model;
class User extends Model {}
User.init({
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING
  }
}, {
  sequelize,
  modelName: 'user'
});

/* crea usuario*/
sequelize.sync()
  .then(() => Cars.create({
    firstName: 'Raul',
    lastName: 'Estevez'
  }))
  .then(jane => {
    console.log(jane.toJSON());
  });


//actualiza registro
User.update({id: 2 }, {
  where: {
    firstName:'Juan',
    lastName: 'Pereyra' 
  }
}).then(() => {
  console.log("Done");
})

User.update({id: 3 }, {
    where: {
        firstName:'Pedro',
        lastName: 'Rodriguez Perez' 
    }
  }).then(() => {
    console.log("Done");
  })
