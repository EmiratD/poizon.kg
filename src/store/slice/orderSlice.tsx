import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IorderItem } from "../../modules/modules";

interface Istate{
  orderList: IorderItem[],
}

const initialState:Istate = {
  orderList: [{id:1, nameItem: 'asd', quantity: '2', size: 'wqw', url: 'daad'}, ],
}

const orderSlice = createSlice({
  name: "orderList",
  initialState,
  reducers: {
    addItem(state,action: PayloadAction<IorderItem>) {
      state.orderList.push(action.payload);
    },
  },
});

export const { addItem } = orderSlice.actions;

export default orderSlice.reducer;