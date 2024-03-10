import React, { SetStateAction } from "react";
import ConfirmDialog from "../../packages/components/confirm-dialogue";
import { resetExpenses } from "../../utils/localstorage";
import { setSnackbar } from "../../redux/snackbar-slice";
import { useDispatch } from "react-redux";

interface ResetExpensesProps {
  open: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
}

function ResetExpenses({ open, setOpen }: ResetExpensesProps): JSX.Element {
  const dispatch = useDispatch();

  return (
    <ConfirmDialog
      isDanger
      title="Reset Expenses"
      subTitle="Are you sure you want to reset all expenses? All added expenses will be deleted."
      actionTitle="Reset"
      action={() => {
        setOpen(false);
        resetExpenses();
        dispatch(
          setSnackbar({
            message: "Expenses Reset Successfully",
            isSuccess: true,
          })
        );
      }}
      open={open}
      setOpen={setOpen}
    />
  );
}

export default ResetExpenses;
