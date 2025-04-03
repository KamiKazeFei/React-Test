import { createSlice } from "@reduxjs/toolkit";
import { OrderDetail, TicketInfo } from "../model/order-detail.model";

const orderInfoSlice = createSlice({
  name: "orderInfo",
  initialState: {} as OrderDetail,
  reducers: {
    setStartTicketInfo: (state, action) => {
      state.departureTicketInfo = {
        ...state.returnTicketInfo,
        departureDate: action.payload.date,
        ticketPrice: action.payload.price,
      } as TicketInfo;
    },

    setReturnTicketInfo: (state, action) => {
      state.returnTicketInfo = {
        ...state.returnTicketInfo,
        departureDate: action.payload.date,
        ticketPrice: action.payload.price,
      } as TicketInfo;
    },
  },
  selectors: {
    getOrderInfo: (state) => state as OrderDetail,
  },
});

// 👉 匯出 actions，方便組件 dispatch
export const { setStartTicketInfo, setReturnTicketInfo } =
  orderInfoSlice.actions;

// 👉 匯出 reducer，供 store 註冊使用
export default orderInfoSlice.reducer;
