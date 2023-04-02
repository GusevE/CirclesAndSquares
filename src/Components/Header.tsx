import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import { Button, Checkbox, FormControlLabel } from "@mui/material";
import Box from "@mui/material/Box/Box";

import { useState } from "react";
import { HeaderCheckboxType } from "../types/types";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { filter } from "../store/layaoutController/LayoutController";
import { helperObject } from "../DefaulData";
import SideBar from "./SideBar";

const headerCheckbox: HeaderCheckboxType[] = ["circle", "square"];

export default function Header() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { figuresData } = useAppSelector((state) => state.LayoutTemplateState);
  const dispatch = useAppDispatch();

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const checkedValue = (name: string) => {
    return !!figuresData.some(({ form }) => form === name);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(filter(event.target.value));
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", paddingTop: "10px" }}>
      <div>
        <Button
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <DensityMediumIcon />
        </Button>
        <SideBar open={open} handleClose={handleClose} anchorEl={anchorEl} />
      </div>
      <Box sx={{ display: "flex", ml: 3 }}>
        {headerCheckbox.map((name) => (
          <FormControlLabel
            key={name}
            label={helperObject[name]}
            control={
              <Checkbox
                value={name}
                onChange={handleChange}
                checked={checkedValue(name)}
              />
            }
          />
        ))}
      </Box>
    </Box>
  );
}
