import Box from "@mui/material/Box/Box";
import { useAppSelector } from "../store/hooks";

export default function Shapes() {
  const { figuresData, numberСolumns } = useAppSelector(
    (state) => state.LayoutTemplateState
  );
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        width: `${numberСolumns + 2}90px`,
        margin: "0 auto",
      }}
    >
      {figuresData.map(({ form, color, id }) => (
        <Box
          key={id}
          sx={{
            borderRadius: form === "circle" ? "50%" : "",
            width: "128px",
            height: "128px",
            background: color,
            margin: "10px",
          }}
        ></Box>
      ))}
    </Box>
  );
}
