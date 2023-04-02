import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Database } from '../../DefaulData';
import { Shapes } from '../../types/model';
import universalFilter from './utils';

interface LayoutTemplateState{
  figuresData: Shapes[]
}

const initial: LayoutTemplateState = {
  figuresData: Database
};

export const LayoutTemplateState = createSlice({
  name: 'layoutTemplate',
  initialState: initial,

  reducers: {
    filter: (state, { payload }: PayloadAction<string>)=> {
        state.figuresData = universalFilter(payload)
    },
  },
});

export const {
  filter,
} = LayoutTemplateState.actions;

export default LayoutTemplateState.reducer;
