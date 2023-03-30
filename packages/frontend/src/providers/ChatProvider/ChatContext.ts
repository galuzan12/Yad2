import {createContext} from 'react';
import {initialState} from './ChatReducer';

export const ChatContext = createContext(initialState);
