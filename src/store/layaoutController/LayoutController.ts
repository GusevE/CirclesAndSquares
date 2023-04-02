import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Database } from '../../DefaulData';
import { Shapes } from '../../types/model';
import universalFilter from './utils';

interface LayoutTemplateState{
  figuresData: Shapes[]
  numberСolumns: number

}

const initial: LayoutTemplateState = {
  figuresData: Database,
  numberСolumns: 4
};

export const LayoutTemplateState = createSlice({
  name: 'layoutTemplate',
  initialState: initial,

  reducers: {
    filter: (state, { payload }: PayloadAction<string>)=> {
        state.figuresData = universalFilter(payload)
    },
    changeColomStore: (state, { payload }: PayloadAction<number>)=> {
      state.numberСolumns = payload
    }
  },
});

export const {
  filter,
  changeColomStore,
} = LayoutTemplateState.actions;

export default LayoutTemplateState.reducer;
