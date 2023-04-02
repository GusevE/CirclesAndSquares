import { combineReducers } from '@reduxjs/toolkit';
import layoutTemplateReducer from './layaoutController/LayoutController';

export const rootReducer = combineReducers({
  LayoutTemplateState: layoutTemplateReducer,
});
