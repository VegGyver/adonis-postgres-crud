import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Customer from "App/Models/Customer";

export default class extends BaseSeeder {
  public async run () {
    await Customer.createMany([
      {
        vat: 123456789,
        email: 'gigi@gmail.com',
      },
      {
        vat: 123456798,
        email: 'sullivan@gmail.com',
      },
      {
        vat: 123456987,
        email: 'anna@gmail.com',
      },
    ])
  }
}
