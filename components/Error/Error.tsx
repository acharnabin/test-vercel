import { Typography } from "@mui/material";
import Alert from "@mui/material/Alert";

interface ErrorType {
  text?: string;
}

const Error = (props: ErrorType) => {
  const { text } = props;
  return <Typography variant="body1" color='red'>{text}</Typography>;
};

export default Error;
