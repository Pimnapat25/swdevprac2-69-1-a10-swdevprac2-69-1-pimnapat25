"use client";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

export default function DateReserve() {
  return (
    <div className="flex flex-col gap-4">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker label="Reservation Date" />
      </LocalizationProvider>

      <TextField
        variant="standard"
        name="Name-Lastname"
        label="Name-Lastname"
      />

      <TextField
        variant="standard"
        name="Contact-Number"
        label="Contact-Number"
      />

      <FormControl variant="standard">
        <InputLabel id="venue-label">Venue</InputLabel>
        <Select id="venue" labelId="venue-label" defaultValue="">
          <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
          <MenuItem value="Spark">Spark Space</MenuItem>
          <MenuItem value="GrandTable">The Grand Table</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
