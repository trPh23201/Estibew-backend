/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  const { faker } = require('@faker-js/faker');
  const _ = require('lodash');
  const bcrypt = require('bcrypt');

  await knex('user').del()
  for (let i = 1; i <= 20; i++) {
    const plain = "123456"; // faker.internet.password();
    const password = bcrypt.hashSync(plain, bcrypt.genSaltSync(10));
    const userName = faker.internet.userName();
    const email = faker.internet.email();
    const phone = faker.phone.number('+## ### ### ###');
    const birthday = faker.date.between(
      '1982-01-01T00:00:00.000Z',
      '2004-01-01T00:00:00.000Z'
    );

    await knex('user').insert({
      username: userName,
      email,
      isEmailVerified: true,
      gender: _.sample(['male', 'female']),
      phone,
      password,
      birthday,
      avatar: faker.image.avatar()
    });

    await knex('privacy').insert({
      userId: i
    });

    await knex('user_read').insert({
      userId: i
    });
    // console.log({
    //   username: userName,
    //   email,
    //   isEmailVerified: true,
    //   gender: _.sample(['male', 'female']),
    //   phone,
    //   password,
    //   birthday,
    // })
  }
};
