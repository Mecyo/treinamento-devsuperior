import Spinner from "components/Spinner";
import Dialog from '@mui/material/Dialog';

type Props = {
    open: boolean;
};

function Loading({ open }: Props) {
  const handleClose = () => {
    open = false;
  };
  return (
    <>
    <Dialog 
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        onClose={(_, reason) => {
          if (reason !== "backdropClick") {
            handleClose();
          }
        }}
      >
          <Spinner speed={5} customText="Loading..." />
      </Dialog>
    </>
  );
}

export default Loading;
