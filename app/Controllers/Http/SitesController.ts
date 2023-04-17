import Site from "App/Models/Site";

export default class SitesController {
  public async index () {
    const sites = await Site.all()
    return sites
  }

  public async show ({ params }) {
    const site = await Site.find( params.id )
    return site
  }

}
