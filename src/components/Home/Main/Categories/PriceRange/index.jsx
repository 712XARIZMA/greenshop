import React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `${value.toLocaleString()} UZS`;
}

export default function RangeSlider() {
  const [value, setValue] = React.useState([0, 1000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <h1 className="font-bold text-lg leading-[89%] text-[#3d3d3d]">
        Price Range
      </h1>
      <div className="px-3 py-5 flex items-start flex-col">
        <Box sx={{ width: 209 }}>
          <Slider
            getAriaLabel={() => "Price range"}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            min={0}
            max={1000}
            sx={{
              color: "#46a358",
            }}
          />
        </Box>
        <h3 className="font-normal text-[15px] leading-[107%] text-[#3d3d3d]">
          Price:{" "}
          <span className="text-[15px] leading-[107%] font-bold text-[#46a358]">
            ${value[0].toLocaleString()} - ${value[1].toLocaleString()}
          </span>
        </h3>
        <button
          className="font-bold text-base leading-[125%] text-white bg-[#46a358] rounded-md py-2 px-6 mt-4"
          type="submit"
        >
          Filter
        </button>
      </div>
    </div>
  );
}
