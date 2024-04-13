import { Select ,MenuItem } from "@mui/material";


const SelectItems = ({ value, onChange, style ,className}) => {
    return (
      <Select
        value={value}
        onChange={onChange}
        style={style}
        className={className}
      >
        {[...Array(10).keys()].map((num) => (
          <MenuItem key={num + 1} value={num + 1}>
            {num + 1}
          </MenuItem>
        ))}
      </Select>
    );
  }
  export default SelectItems