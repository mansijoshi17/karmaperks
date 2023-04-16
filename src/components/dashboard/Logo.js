import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom"; 
import { Box } from "@mui/material";
 

Logo.propTypes = {
  sx: PropTypes.object,
};

export default function Logo({ sx }) {
  return (
    <RouterLink to="/" className="navbar-brand" >
      <Box component="img" src="/assets/images/logo.png" sx={{ padding: '5px',margin:'10px 5px', height: 60, ...sx }} /> 
    </RouterLink>
  );
}
