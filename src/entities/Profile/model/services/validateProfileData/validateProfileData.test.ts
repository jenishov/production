import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { validateProfileData } from 'entities/Profile/model/services/validateProfileData/validateProfileData';
import { ValidateProofileError } from 'entities/Profile';

const data = {
    username: 'admin',
    age: 23,
    country: Country.Kazakhstan,
    lastname: 'jenishov',
    first: 'asd',
    city: 'bish',
    currency: Currency.USD,
};

describe('validateProfileData.test', () => {
    test('success', async () => {
        const result = validateProfileData(data);

        expect(result).toEqual([]);
    });

    test('without first and last name', async () => {
        const result = validateProfileData({ ...data, first: '', lastname: '' });

        expect(result).toEqual([
            ValidateProofileError.INCORRECT_USER_DATA,
        ]);
    });
    test('incorrect age', async () => {
        const result = validateProfileData({ ...data, age: undefined });

        expect(result).toEqual([
            ValidateProofileError.INCORRECT_AGE,
        ]);
    });
    test('incorrect country', async () => {
        const result = validateProfileData({ ...data, country: undefined });

        expect(result).toEqual([
            ValidateProofileError.INCORRECT_COUNTRY,
        ]);
    });
    test('incorrect all', async () => {
        const result = validateProfileData({});

        expect(result).toEqual([
            ValidateProofileError.INCORRECT_USER_DATA,
            ValidateProofileError.INCORRECT_AGE,
            ValidateProofileError.INCORRECT_COUNTRY,
        ]);
    });
});
