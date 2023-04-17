import Customer from "App/Models/Customer";
import Site from "App/Models/Site";

export default class CustomersController {
  public async index () {
    const customers = await Customer.all()
    return customers
  }

  public async show ({ params }) {
    // const customer = await Customer.find(params.id)
    const sites = await Site.query()
    .where('customer_id', params.id)
    .orWhereNull('customer_id')

    return sites
  }

}
