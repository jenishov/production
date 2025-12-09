import { Profile, ValidateProofileError } from '../../types/profile';

export const validateProfileData = (profile?:Profile) => {
    if (!profile) {
        return [ValidateProofileError.NO_DATA];
    }
    const {
        first, lastname, age, country,
    } = profile;
    const errors: ValidateProofileError[] = [];

    if (!first || !lastname) {
        errors.push(ValidateProofileError.INCORRECT_USER_DATA);
    }

    if (!age || !Number.isInteger(age)) {
        errors.push(ValidateProofileError.INCORRECT_AGE);
    }

    if (!country) {
        errors.push(ValidateProofileError.INCORRECT_COUNTRY);
    }
    return errors;
};
