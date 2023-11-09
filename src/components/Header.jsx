import AddIcon from "@mui/icons-material/Add";
import { Button, Stack, SvgIcon, Typography } from "@mui/material";

const Header = ({ title, button, onClick }) => {
  return (
    <Stack spacing={3}>
      <Stack direction="row" spacing={4} justifyContent="space-between">
        <Stack spacing={1}>
          <Typography variant="h4">{title}</Typography>

          <Stack alignItems="center" direction="row" spacing={1}></Stack>
        </Stack>

        <div>
          <Button
            variant="contained"
            startIcon={
              <SvgIcon fontSize="small">
                <AddIcon />
              </SvgIcon>
            }
            onClick={onClick}
          >
            {button}
          </Button>
        </div>
      </Stack>
    </Stack>
  );
};

export default Header;
