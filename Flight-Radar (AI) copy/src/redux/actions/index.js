// ✅ Updated bounding box for India
// File: src/redux/actions/index.js

import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";

export const getFlights = createAsyncThunk("flight/getFlights", async () => {
  const params = {
    bl_lat: "6.5",    // Bottom Left Latitude (India)
    bl_lng: "68.0",   // Bottom Left Longitude (India)
    tr_lat: "37.0",   // Top Right Latitude (India)
    tr_lng: "97.0",   // Top Right Longitude (India)
    speed: "2,99999",
  };

  const res = await api.get("/flights/list-in-boundary", { params });

  const formatted = res.data.aircraft.map((i) => ({
    id: i[0],
    code: i[1],
    lat: i[2],
    lng: i[3],
    deg: i[4],
  }));

  return formatted;
});

export const getDetails = createAsyncThunk("detail/getDetails", async (id) => {
  const params = {
    flight: id,
  };

  const res = await api.get("/flights/detail", { params });

  return res.data;
});