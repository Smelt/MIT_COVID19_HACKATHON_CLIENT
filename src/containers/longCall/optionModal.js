import React from "react";
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Table, TableHead, TableRow, TableCell }from '@material-ui/core';
import { json } from "body-parser";
/*Props
optionModalOpen={this.state.optionModalOpen}
toggleOptionModal={this.toggleOptionModal}
*/

export const OptionModal = (props) => (

    <Dialog open={props.optionModalOpen} onClose={props.toggleOptionModal} >
        <DialogTitle>Option Chain</DialogTitle>

            {Object.keys(props.optionChain).forEach((date) => {

                return <Typography>{JSON.stringify(date)}</Typography>
            })}

            {Object.keys(props.optionChain).map((date) => {
                    const dateChain = props.optionChain[date]
                    return (
                        <ExpansionPanel>
                            <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography variant="h4">{date}</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                
                                    <Grid container direction="row" spacing={2}>
                                        <Grid item xs={6}>
                                            <Typography variant="h5">Calls</Typography>
                                            <Table>
                                                <Typography></Typography>
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell>Strike</TableCell>
                                                        <TableCell align="right">Bid</TableCell>
                                                        <TableCell align="right">Mid</TableCell>
                                                        <TableCell align="right">Ask</TableCell>
                                                        <TableCell align="right">Spread</TableCell>
                                                    </TableRow>
                                                    {Object.keys(dateChain['c']).map((strike) => {
                                                        const {l,b,a} = dateChain['c'][strike]
                                                        const bid = parseFloat(b)
                                                        const ask = parseFloat(a)
                                                        const mid = (bid + ask) / 2
                                                        const spread = ((ask - bid) / mid) * 100
                                                        console.log("Mid is ")
                                                        console.log(mid)
                                                    return (
                                                        <TableRow>
                                                            <TableCell>{strike}</TableCell>
                                                            <TableCell>{bid.toFixed(2)}</TableCell>
                                                            <TableCell>{mid.toFixed(2)}</TableCell>
                                                            <TableCell>{ask.toFixed(2)}</TableCell>
                                                            <TableCell>{spread.toFixed(2)}%</TableCell>
                                                        </TableRow>
                                                    )
                                                    })}
                                                    
                                                    
                                                </TableHead>
                                            </Table>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography variant="h5">Puts</Typography>
                                            <Table>
                                                <Typography></Typography>
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell>Strike</TableCell>
                                                        <TableCell align="right">Bid</TableCell>
                                                        <TableCell align="right">Mid</TableCell>
                                                        <TableCell align="right">Ask</TableCell>
                                                        <TableCell align="right">Spread</TableCell>
                                                    </TableRow>
                                                    {Object.keys(dateChain['p']).map((strike) => {
                                                        const {l,b,a} = dateChain['p'][strike]
                                                        const bid = parseFloat(b)
                                                        const ask = parseFloat(a)
                                                        const mid = (bid + ask) / 2
                                                        const spread = ((ask - bid) / mid) * 100
                                                    return (
                                                        <TableRow>
                                                            <TableCell>{strike}</TableCell>
                                                            <TableCell>{bid.toFixed(2)}</TableCell>
                                                            <TableCell>{mid.toFixed(2)}</TableCell>
                                                            <TableCell>{ask.toFixed(2)}</TableCell>
                                                            <TableCell>{spread.toFixed(2)}%</TableCell>
                                                        </TableRow>
                                                    )
                                                    })}
                                                </TableHead>
                                            </Table>
                                        </Grid>
                                        
                                    </Grid>
                         
                            </ExpansionPanelDetails>
                        </ExpansionPanel>)
                })
            }
            {

                Object.keys(props.optionChain).map(function (key) {
                    return <span>Dog {JSON.stringify(key)}</span>
                })
            }
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography >Expansion Panel 1</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                        {JSON.stringify(props.optionChain)}
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
    </Dialog>
);

export default OptionModal;