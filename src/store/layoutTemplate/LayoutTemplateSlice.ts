import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Database } from '../../data';
import { Shapes } from '../../model';
import universalFilter from './utils';


interface LayoutTemplateState{

  data: Shapes[]
}

const initial: LayoutTemplateState = {
  data: Database
};


export const LayoutTemplateState = createSlice({
  name: 'layoutTemplate',
  initialState: initial,

  reducers: {
    filter: (state, { payload }: PayloadAction<string>)=> {
      
        state.data = universalFilter(payload)
    },
  },
});

export const {
  filter,
} = LayoutTemplateState.actions;

export default LayoutTemplateState.reducer;
