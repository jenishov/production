import { Provider } from 'react-redux';
import type { StateSchema } from './config/StateSchema';
import { createReduxStore } from './config/store';

export {
    Provider,
    createReduxStore,
    StateSchema,
};
