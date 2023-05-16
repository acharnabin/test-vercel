import useNotiStack from "@/hooks/useNotistack";
import validationText from "@/json/messages/validationText";
import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
interface ICopytoclipWrapperProps {
  children: JSX.Element | JSX.Element[];
  value: string;
}
const CopytoclipWrapper = (props: ICopytoclipWrapperProps) => {
  const [copied, setCopy] = useState(false);
  const { toastSuccess } = useNotiStack();
  return (
    <CopyToClipboard
      text={props.value}
      onCopy={() => toastSuccess(validationText.success.CopyToClipboard)}
    >
      {props.children}
    </CopyToClipboard>
  );
};

export default CopytoclipWrapper;
