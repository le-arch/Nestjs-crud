import { Table, Column, Model, DataType } from "sequelize-typescript";
@Table
export class Product extends Model {
  @Column({
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.DECIMAL,
    allowNull: false,
  })
  price: number;

  @Column
  description: string;

  @Column
  image: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0,
  })
  quantity: number;
}

