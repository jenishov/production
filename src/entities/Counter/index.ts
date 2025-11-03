import { Counter } from 'entities/Counter/ui/Counter';
import type { CounterSchema } from './model/types/counterSchema';
import { counterReducer } from './model/slice/counterSlice';

export {
    counterReducer,
    Counter,
    CounterSchema,
};
