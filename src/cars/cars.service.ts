import { Injectable } from '@nestjs/common';

@Injectable()
export class CarsService {
    private cars = [
        {
            id: 1,
            breand: 'Toyota',
            model: 'Corolla'
        },
        {
            id: 2,
            breand: 'Honda',
            model: 'Civic'
        },
        {
            id: 3,
            breand: 'Jeep',
            model: 'Cheroke'
        }
}
