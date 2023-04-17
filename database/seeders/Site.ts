import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Site from "App/Models/Site";

export default class extends BaseSeeder {
  public async run () {
    await Site.createMany([
      {
        lat: 41.12345,
        long: 12.12345,
        address: 'Via Pescheria 182',
        post_code: 47521,
        customer_id: 1
      },
      {
        lat: 41.12345,
        long: 12.12345,
        address: 'Piazza del Popolo 20',
        post_code: 47521,
        customer_id: 1
      },
      {
        lat: 41.12345,
        long: 12.12345,
        address: 'Via Andrea Costa 26',
        post_code: 47522,
        customer_id: 3
      },
      {
        lat: 41.12345,
        long: 12.12345,
        address: 'Via Giarabub 42',
        post_code: 47522,
        customer_id: 2
      },
    ])
  }
}
