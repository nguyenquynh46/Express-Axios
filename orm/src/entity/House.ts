import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
@Entity()
export class House {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: 'varchar', length: 255})
    name: string;
    @Column()
    age: number;
    @Column({type: 'int'})
    score: number;

}
