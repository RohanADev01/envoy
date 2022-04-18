import { Grid } from '@mui/material'
import React from 'react'
import Widget from './Widget'
import "./InvoiceDataTable.css";

// invoice table component imports
import {
    Table,
    TableRow,
    TableHead,
    TableBody,
    TableCell,
    Chip
} from "@mui/material";
import { tableContent, tag1, tag2 } from "./styles";
import './Table.css'
import InvoiceOptions from './InvoiceOptions';

export const InvoiceDataTable = (props) => {
    return (
        <>
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <Widget title="Recent Invoice Activity" upperTitle noBodyPadding body>
                        <InvoiceTableComponent data={props.tableData} />
                    </Widget>
                </Grid>
            </Grid>
        </>
    )
}


function InvoiceTableComponent({ data }) {
    var keys = ["CUSTOMER", "SIZE", "TIME CREATED", "SOURCE", "delete"]

    return (
        <>
            <Table className="mb-0">
                <TableHead>
                    <TableRow>
                        {keys.map(key => (
                            (key === "delete" ? <TableCell key={key} /> : <TableCell key={key} sx={tableContent}>{key}</TableCell>)
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.created.map(({ customer_name, size, timestamp, content }, idx) => (
                        <TableRow key={idx}>
                            <TableCell className="pl-3 fw-normal" sx={tableContent}>{customer_name}</TableCell>
                            <TableCell sx={tableContent}>{`${size} bytes`}</TableCell>
                            <TableCell sx={tableContent}>{timestamp}</TableCell>
                            <TableCell sx={tableContent}>
                                {/* <Chip label={status} style={status === "Sent" ? success : (status === "Pending" ? warning : secondary)} /> */}
                                <Chip label="created" style={tag1} />
                            </TableCell>
                            <InvoiceOptions
                                customerName={customer_name}
                                timestamp={timestamp}
                                size={size}
                                content={content}
                                styleObj={tableContent} />
                        </TableRow>
                    ))}
                    {data.received.map(({ customer_name, size, timestamp, content }, idx) => (
                        <TableRow key={idx}>
                            <TableCell className="pl-3 fw-normal" sx={tableContent}>{customer_name}</TableCell>
                            <TableCell sx={tableContent}>{`${size} bytes`}</TableCell>
                            <TableCell sx={tableContent}>{timestamp}</TableCell>
                            <TableCell sx={tableContent}>
                                {/* <Chip label={status} style={status === "Sent" ? success : (status === "Pending" ? warning : secondary)} /> */}
                                <Chip label="received" style={tag2} />
                            </TableCell>
                            <InvoiceOptions
                                customerName={customer_name}
                                timestamp={timestamp}
                                size={size}
                                content={content}
                                styleObj={tableContent} />
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    );
}