import React, { Component } from 'react';
import Grid from '@mui/material/Grid/';
import Button from '@mui/material/Button';

import HeaderV2 from './HeaderV2';
import HowTo from './HowTo';

export class NoWeb3 extends Component {


    downloadMetamask = async () => {
        window.open('https://metamask.io/');
    }



  render() {
    return (
        <div>
            <HeaderV2/>
            <Grid id="MakeAWhaleMainContent" container spacing={2} direction="row-reverse">
                <Grid item xs={12} sm={12} md={3}>
                </Grid>
                <Grid item id="NoWeb3Item" xs={12} sm={12} md={6}>
                    <div id="NoWeb3Div" className="flex"> 
                        <h2 className="text_white big_text noweb3_tex noweb3_greeting">Welcome to Make a Whale!<span role="img" aria-label="whale" className="noweb3_emoji"> 🐋 </span> </h2> 
                        <h2 className="text_white med_text noweb3_text">You will need a web3 enabled browser to use this app! Our recomendation, install the MetaMask extension.</h2> 
                        <h2 className="text_white med_text noweb3_text">This dAPP is also only available on Ethereum Mainnet. So if you're not there, make sure you switch. </h2> 

                        <Button variant="contained" id="MetaMaskDownload" onClick={this.downloadMetamask}>Download MetaMask</Button>
                    </div>
                </Grid>
                 <HowTo/>
            </Grid>
        </div>
    );
  }
}

export default NoWeb3;
