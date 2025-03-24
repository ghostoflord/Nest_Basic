import { IsEmpty, IsNotEmpty } from 'class-validator';
export class CreateUserDto {
    @IsNotEmpty({ message: ("user not null") })
    name: string;
    email: string;
    password: string;
    phone: string;
    address: string;
    image: string;

}
