import styles from "@/styles/components/relatedbutton.module.scss";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { memo, useEffect, useState } from "react";
import { ButtonType } from "@/interface/common.interface";


const RelatedButtonMemo = ({
  children,
  variant = "contained",
  disabled = false,
  onClick,
  color = "inherit",
  size = "medium",
  fullWidth = false,
  endIcon,
  startIcon,
  type,
  loading = false
}: ButtonType) => {
  const [className, setClassName] = useState(styles.relatedbutton);

  useEffect(() => {
    if (variant === "text") {
      setClassName(styles.relatedbuttonText);
    } else if (variant === "outlined") {
      setClassName(styles.relatedbuttonOutlined);
    } else {
      setClassName(styles.relatedbutton);
    }
  }, [variant]);

  return (
    <Button
      className={className}
      variant={variant}
      disabled={disabled || loading}
      disableElevation
      onClick={onClick}
      color={color}
      size={size}
      fullWidth={fullWidth}
      endIcon={endIcon}
      startIcon={startIcon}
      type={type}
    >
      {loading && <CircularProgress size={15} color="inherit" />}
      {children}
    </Button>
  );
};

const RelatedButton = memo(RelatedButtonMemo);

export default RelatedButton;