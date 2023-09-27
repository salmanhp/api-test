import {
    Box,
    Typography,
    Stack,
    Grid,
    Chip,
    Table,
    TableRow,
    TableCell
} from '@mui/material';
import {
    PieChart,
    ShoppingBag,
    People
} from '@mui/icons-material';
import { BarChart } from './BarChart';
import { Profile } from './Profile';




export default function Dashboard() {
    

    return (
        <Box sx={{ display: 'flex' }}>
            <Grid spacing={2} container>
                <Grid item lg={9} md={9} sm={12} xs={12}>
                    <Grid container spacing={1}>
                        <Grid item lg={4} md={4} sm={4} xs={12}>
                            <Box p={1} sx={{ display: 'flex', boxShadow: 3, borderRadius: '10px', alignItems: 'center' }} >
                                <PieChart fontSize='large' style={{ borderRadius: '10px', padding: '3px', color: 'white', backgroundColor: '#2596be' }} />
                                <Box ml={2} sx={{ width: '100%' }}>
                                    <Typography variant='subtitle2'>Revenue</Typography>
                                    <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Typography variant='h6'>$21,456</Typography>
                                        <Chip size="small" sx={{ bgcolor: '#daedda', color: 'green' }} label="+2.65%" />
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item lg={4} md={4} sm={4} xs={12}>
                            <Box p={1} sx={{ display: 'flex', boxShadow: 3, borderRadius: '10px', alignItems: 'center' }} >
                                <ShoppingBag fontSize='large' style={{ borderRadius: '10px', padding: '3px', color: 'white', backgroundColor: '#2596be' }} />
                                <Box ml={2} sx={{ width: '100%' }}>
                                    <Typography variant='subtitle2'>Orders</Typography>
                                    <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Typography variant='h6'>$21,456</Typography>
                                        <Chip size="small" sx={{ bgcolor: '#daedda', color: 'green' }} label="+2.65%" />
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item lg={4} md={4} sm={4} xs={12}>
                            <Box p={1} sx={{ display: 'flex', boxShadow: 3, borderRadius: '10px', alignItems: 'center' }} >
                                <People fontSize='large' style={{ borderRadius: '10px', padding: '3px', color: 'white', backgroundColor: '#2596be' }} />
                                <Box ml={2} sx={{ width: '100%' }}>
                                    <Typography variant='subtitle2'>Customers</Typography>
                                    <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Typography variant='h6'>$21,456</Typography>
                                        <Chip size="small" sx={{ bgcolor: '#daedda', color: 'green' }} label="+2.65%" />
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item mt={2} lg={12} md={12} sm={12} xs={12}>
                            <Box p={1} sx={{ boxShadow: 3, borderRadius: '10px' }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Typography variant='h6'>Overview</Typography>
                                    <Typography variant='h6'>Sort By:<span style={{ fontSize: '16px', color: 'gray' }}> Yarly</span></Typography>
                                </Box>
                                <Stack direction={{ xs: 'column', sm: 'row' }}>
                                    <Box sx={{ flex: 1, objectFit: 'cover' }}>
                                        <Typography variant='caption'>This Month</Typography>
                                        <Stack direction='row' spacing={2} >
                                            <Typography variant='h5'>$24,568</Typography>
                                            <Chip size="small" sx={{ bgcolor: '#daedda', color: 'green' }} label="+2.65%" />
                                        </Stack>
                                        <Table sx={{ width: '80%', marginTop: '2px' }}>
                                            <TableRow>
                                                <TableCell sx={{ borderRight: '1px solid lightgray' }} align='center'>
                                                    <Typography variant='subtitle2'>Orders</Typography>
                                                    <Typography variant='h6'>24,568</Typography>
                                                </TableCell>
                                                <TableCell align='center'>
                                                    <Typography variant='subtitle2'>Sales</Typography>
                                                    <Typography variant='h6'>24,568</Typography>
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell sx={{ borderRight: '1px solid lightgray' }} align='center'>
                                                    <Typography variant='subtitle2'>Order Value</Typography>
                                                    <Typography variant='h6'>12.03 %</Typography>
                                                </TableCell>
                                                <TableCell align='center'>
                                                    <Typography variant='subtitle2'>Customer</Typography>
                                                    <Typography variant='h6'>24,568</Typography>
                                                </TableCell>
                                            </TableRow>
                                            <TableRow sx={{ borderBottom: '2px solid white' }}>
                                                <TableCell sx={{ borderRight: '1px solid lightgray' }} align='center'>
                                                    <Typography variant='subtitle2'>Income</Typography>
                                                    <Typography variant='h6'>$24,568</Typography>
                                                </TableCell>
                                                <TableCell align='center'>
                                                    <Typography variant='subtitle2'>Expenses</Typography>
                                                    <Typography variant='h6'>$24,568</Typography>
                                                </TableCell>
                                            </TableRow>
                                        </Table>
                                    </Box>

                                    <Box sx={{ flex: 2, objectFit: 'contain' }}>
                                        <BarChart />
                                    </Box>
                                </Stack>
                            </Box>
                        </Grid>

                    </Grid>
                </Grid>

                <Grid item lg={3} md={3} sm={12} xs={12}>
                    <Box sx={{ boxShadow: 3, borderRadius: '10px', height: '100%' }}>
                        <Profile />
                    </Box>
                </Grid>
            </Grid>

        </Box>
    );
}

