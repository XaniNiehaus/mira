import React from 'react';
import {BottomNavigation, BottomNavigationAction, Paper} from "@mui/material";
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import HomeIcon from '@mui/icons-material/Home';
import GridViewIcon from '@mui/icons-material/GridView';
import PoliciesPage from "./PoliciesPage";
import HomePage from "./HomePage";
import FaqPage from "./FAQPage";

const TabPage = () => {
    const [value, setValue] = React.useState(1);

    return (
        <div >
            {value === 0 && < PoliciesPage/>}
            {value === 1 && <HomePage/>}
            {value === 2 && <FaqPage/>}
            <Paper sx={{position: 'fixed', bottom: 0, left: 0, right: 0}} elevation={3}>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                >
                    <BottomNavigationAction value={0} label="Policies" icon={<GridViewIcon/>}/>
                    <BottomNavigationAction value={1} label="Mira OnCall" icon={<HomeIcon/>}/>
                    <BottomNavigationAction value={2} label="FAQ" icon={<LiveHelpIcon/>}/>
                </BottomNavigation>
            </Paper>
        </div>
    );
};

export default TabPage;
