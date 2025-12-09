import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileValidateErrors, ValidateProofileError } from 'entities/Profile';

describe('getProfileValidateErrors.test', () => {
    test('should work with  filled state', () => {
        const state:DeepPartial<StateSchema> = {
            profile: {
                validateErrors: [
                    ValidateProofileError.SERVER_ERROR,
                    ValidateProofileError.INCORRECT_AGE,
                ],
            },
        };
        expect(getProfileValidateErrors(state as StateSchema)).toEqual([
            ValidateProofileError.SERVER_ERROR,
            ValidateProofileError.INCORRECT_AGE,
        ]);
    });

    test('should work with empty state', () => {
        const state:DeepPartial<StateSchema> = {};
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
    });
});
