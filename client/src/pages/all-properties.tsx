import { Add } from "@mui/icons-material";
import { useList } from "@pankod/refine-core";
import {
    Box,
    Stack,
    Typography,
    TextField,
    Select,
    MenuItem,
} from "@pankod/refine-mui";
import { useNavigate } from "@pankod/refine-react-router-v6";
import { useMemo } from "react";

import { PropertyCard, CustomButton } from "components";


const AllProperties = () => {
    const navigate = useNavigate();
  return (
    <Box>
    <Stack
    direction="row"
    justifyContent="space-between"
    alignItems="center"
>
    <CustomButton
        title="Add Property"
        handleClick={() => navigate("/properties/create")}
        backgroundColor="#475be8"
        color="#fcfcfc"
        icon={<Add />}
    />
    </Stack>
    </Box>
  )
}

export default AllProperties