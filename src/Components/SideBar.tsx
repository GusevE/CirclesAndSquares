import FormControl from "@mui/material/FormControl/FormControl";
import RadioGroup from "@mui/material/RadioGroup/RadioGroup";
import Radio from "@mui/material/Radio/Radio";
import Typography from "@mui/material/Typography/Typography";
import TextField from "@mui/material/TextField/TextField";
import Menu from "@mui/material/Menu";
import FormControlLabel from "@mui/material/FormControlLabel/FormControlLabel";
import Box from "@mui/material/Box/Box";
import Checkbox from "@mui/material/Checkbox/Checkbox";
import { Database } from "../data";
import { ColorType, RadioButtonType } from "../model";
import { helperObject, isRadioButton } from "../store/layoutTemplate/utils";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { filter } from "../store/layoutTemplate/LayoutTemplateSlice";
import { useState } from "react";

export interface Props {
  anchorEl: null | HTMLElement;
  open: boolean;
  handleClose: () => void;
}
let colorCheck = [...new Set(Database.map((e) => e.color as ColorType))];
export const radioButton: RadioButtonType[] = ["all", "dark", "light"];

export default function SideBar(props: Props) {
  const { anchorEl, handleClose, open } = props;

  const { data } = useAppSelector((state) => state.LayoutTemplateState);
  const [selectedValue, setSelectedValue] = useState<string>("all");
  const dispatch = useAppDispatch();
  const checkedValue = (name: string) => {
    return !!data.some(({ color }) => color === name);
  };

   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (isRadioButton(event.target.value)) {
      setSelectedValue(event.target.value);
      dispatch(filter(event.target.value));
    } else {
      dispatch(filter(event.target.value));
    }
  };

  return (
    <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
      <Box sx={{ width: "120px", padding: 2 }}>
        {colorCheck &&
          colorCheck.map((e) => (
            <FormControlLabel
              key={e}
              label={helperObject[e]}
              control={
                <Checkbox
                  checked={checkedValue(e)}
                  value={e}
                  onChange={handleChange}
                  sx={{
                    color: e,
                    "&.Mui-checked": {
                      color: e,
                    },
                  }}
                />
              }
            />
          ))}
        <FormControl>
          <RadioGroup onChange={handleChange}>
            {radioButton.map((radio) => (
              <FormControlLabel
                key={radio}
                value={radio}
                checked={selectedValue === radio}
                control={<Radio />}
                label={helperObject[radio]}
              />
            ))}
          </RadioGroup>
        </FormControl>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography>Колонки</Typography>
          <TextField
            value={4}
            size="small"
            sx={{
              paddingLeft: 2,
              width: "60px",
            }}
            variant="outlined"
          />
        </Box>
      </Box>
    </Menu>
  );
}
