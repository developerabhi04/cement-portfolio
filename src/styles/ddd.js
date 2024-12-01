import {
    useEffect,
    useState
}

from 'react';
import Box from '@mui/material/Box';
import AdminLayout from './AdminLayout';

import {
    DataGridPremium,
    GridToolbar,
    useGridApiRef,
    useKeepGroupedColumnsHidden
}

from '@mui/x-data-grid-premium';

import {
    dashboardData
}

from './constants/sampleData';

const columns=[ {
    field: 'id', headerName: 'ID', headerClassName: 'table-header', width: 70
}

,
{
field: 'name', headerName: 'Name', headerClassName: 'table-header', width: 250
}

,
{
field: 'contactNumber', headerName: 'Contact Number', headerClassName: 'table-header', width: 200
}

,
{
field: 'alternateNumber', headerName: 'Alternate Number', headerClassName: 'table-header', width: 200
}

,
{
field: 'cementName', headerName: 'Cement Name', headerClassName: 'table-header', width: 300
}

,
{
field: 'quantity', headerName: 'Quantity', headerClassName: 'table-header', width: 300, type: 'number'
}

,
{
field: 'city', headerName: 'City', headerClassName: 'table-header', width: 300
}

,
{
field: 'state', headerName: 'State', headerClassName: 'table-header', width: 300
}

,
{
field: 'pinCode', headerName: 'Pin Code', headerClassName: 'table-header', width: 300
}

,
];

const ExportData=()=> {
    const [rows,
    setRows]=useState([]);
    const apiRef=useGridApiRef(); // Use Grid API reference

    useEffect(()=> {
            setRows(dashboardData.users.map((i)=> ({
                        ...i,
                        id: i._id, // Map your custom data to id
                    })));
    }

    , []);

// Group by cementName and aggregate the quantity
const initialState=useKeepGroupedColumnsHidden({

    apiRef,
    initialState: {
        rowGrouping: {
            model: ['cementName']
        }

        , // Group by cementName

        aggregation: {
            model: {
                quantity: 'sum'
            }
        }

        , // Sum quantity for each group
    }

    ,
});

return (<AdminLayout> <Box sx= {
            {
            height: 520, width: '100%'
        }
    }

    > <DataGridPremium rows= {
        rows
    }

    columns= {
        columns
    }

    apiRef= {
        apiRef
    }

    initialState= {
        initialState
    }

    disableRowSelectionOnClick loading= {
        rows.length===0
    }

    slots= {
            {
            toolbar: GridToolbar
        }
    }

    // Show toolbar
    /> </Box> </AdminLayout>);
}

;

export default ExportData;