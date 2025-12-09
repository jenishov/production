import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileForm } from 'entities/Profile';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

describe('getProfileForm.test', () => {
    test('should return error', () => {
        const data = {
            username: 'admin',
            age: 23,
            country: Country.Kazakhstan,
            lastname: 'jenishov',
            first: 'asd',
            city: 'bish',
            currency: Currency.USD,
        };
        const state:DeepPartial<StateSchema> = {
            profile: {
                form: data,
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(data);
    });

    test('should work with empty state', () => {
        const state:DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
