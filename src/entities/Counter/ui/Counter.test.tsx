import { screen } from '@testing-library/react';
import { componentRouter } from 'shared/lib/tests/componentRouter/componentRouter';
import { Counter } from 'entities/Counter';
import { userEvent } from '@storybook/testing-library';

describe('Counter', () => {
    test('test render', () => {
        componentRouter(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    });

    test('increment', () => {
        componentRouter(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        userEvent.click(screen.getByTestId('increment-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('11');
    });
    test('decrement', () => {
        componentRouter(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        userEvent.click(screen.getByTestId('decrement-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('9');
    });
});
