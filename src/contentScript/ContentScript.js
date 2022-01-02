import { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { Box, Button, Typography } from "@mui/material";

const useStyles = makeStyles({
  overlay: {
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    background: "rgba(0, 0, 0, 0.3)",
    zIndex: 999999999,
  },
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    background: "white",
    borderRadius: 10,
    padding: 40,
  },
});

function ContentScript() {
  const { modal, overlay } = useStyles();
  const [open, setOpen] = useState(false);

  const [message, setMessage] = useState(false);
  const sendMessage = () => {
    chrome.runtime.sendMessage({
      value: "hello from content script",
    });
  };

  chrome.runtime.onMessage.addListener((message) => {
    setMessage(message.value);
    if (message.value === "openPopup") {
      setOpen(true);
    }
  });

  if (!open) return null;

  return (
    <Box className={overlay}>
      <Box className={modal}>
        <Typography>Popup</Typography>
        <Typography>Message: {message}</Typography>
        <Button variant="contained" onClick={() => setOpen(false)}>
          Close
        </Button>
        <Button variant="contained" onClick={sendMessage}>
          Send message to background script
        </Button>
      </Box>
    </Box>
  );
}

export default ContentScript;
