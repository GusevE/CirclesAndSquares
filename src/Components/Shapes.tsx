import Box from "@mui/material/Box/Box";
import { useAppSelector } from "../store/hooks";

export default function Shapes() {
  const { data } = useAppSelector((state) => state.LayoutTemplateState);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        width: "600px",
        margin: "0 auto",
      }}
    >
      {data.map(({ form, color, dark, id }) => (
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
