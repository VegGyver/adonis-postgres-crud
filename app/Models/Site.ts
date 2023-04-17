import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Site extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public lat: Number

  @column()
  public long: Number

  @column()
  public address: String

  @column()
  public post_code: Number

  @column()
  public customer_id: Number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
