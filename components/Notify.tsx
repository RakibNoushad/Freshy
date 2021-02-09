import React, { useContext, useEffect } from "react";
import { DataContext } from "../dataContext/GlobalState";
import Alert from "@material-ui/lab/Alert";
import { Snackbar } from "@material-ui/core";

const Notify = () => {
  const { state, dispatch } = useContext(DataContext);
  const { notify } = state;

  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    setOpen(true);
  }, [notify]);

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      {notify.error && (
        <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
          <Alert variant="filled" severity="error" onClose={handleClose}>
            {notify.error}
          </Alert>
        </Snackbar>
      )}
    </>
  );
};

export default Notify;
