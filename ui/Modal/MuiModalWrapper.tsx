import { borderRadius } from "@/themes/themeConstant";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

interface MuiModalWrapperProps extends DialogProps {
  children: JSX.Element | JSX.Element[];
  title?: string;
}

export default function MuiModalWrapper(props: MuiModalWrapperProps) {
  const { open, onClose, scroll, children, title } = props;
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={onClose}
      scroll={scroll}
      aria-labelledby="responsive-dialog-title"
      PaperProps={{
        style: {
          borderRadius,
        },
      }}
      className="filterDialog"
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        className="dialogHeader"
      >
        <Typography>{title}</Typography>
        <IconButton onClick={onClose} autoFocus>
          <CloseIcon />
        </IconButton>
      </Stack>

      <DialogContent sx={{ padding: { sm: '0 24px', xs: '0 15px' } }}>{children}</DialogContent>
    </Dialog>
  );
}
