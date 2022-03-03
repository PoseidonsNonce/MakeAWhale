import Grid from '@mui/material/Grid/';
import React, { Component } from "react";
import {FaDiscord} from '@react-icons/all-files/fa/FaDiscord';
import {FaTwitter} from '@react-icons/all-files/fa/FaTwitter';
import {FaEthereum} from '@react-icons/all-files/fa/FaEthereum';

import {IconContext} from '@react-icons/all-files/';

class HeaderV2 extends Component { 
    render() {
        return (
            <div>
                <div id="navigation">    
                <IconContext.Provider value={{color: "#ffffff", size: "40px" }}>
                    <span id="mainIcon"> <img src="/WhaleLogo.png" id="MakeAWhaleLogo"></img></span>
                    <span id="ethIcon" className="icon"><a href="https://etherscan.io/address/0x6b74332e2ef30e2e052d24734cfc8b484eab4c39#code" target="_blank" rel="noopener noreferrer"><FaEthereum/></a></span>
                    <span id="discordIcon" className="icon"><a href="https://discord.gg/b7y93Jxw" target="_blank"  rel="noopener noreferrer"><FaDiscord/></a></span>
                    <span id="twitterIcon" className="icon"><a href="https://twitter.com/poseidonsnonce" target="_blank"  rel="noopener noreferrer"><FaTwitter/></a></span>
                </IconContext.Provider>
                </div>
                <div id="navigationBackground">
                </div>
                
                <Grid container id="HeaderV2" spacing={4}>
                        <Grid item  xs={12} md={8} id="HeaderV2_left">
                            <img src="/MainCTA.png" id="mainCTA"></img>
                            <h2 id="defineTitle" > DEFINITION<span id="defineTitle2"> {'>  >  >'}  WHALE </span></h2>
                            <hr/> 
                            <p className="MainDefinition "> someone who amasses a large portion of an existing asset while remaining anonymous. </p>
                            <h2 className="InspiredBy" target="_blank"> Inspired by : <a href="https://www.reddit.com/r/millionairemakers/"> millionairemakers ( reddit ) </a></h2>
                            <blockquote>"If a million people gave a dollar to someone, they could be a millionaire."</blockquote>
                            <Grid container item id="textBoxRow" spacing={4}>
                                <Grid item className="textBlockContainer" sm={12} md={12}  lg={6}>
                                    <div className="textBlock">
                                        <h2 className="SubMainHeader"> WHAT IS MAKEAWHALE.COM ? </h2>
                                        <p className="text_white  description "> A random, peer-to-peer redistribution of wealth. More specficially, it is Decentralized Application (dAPP) running on 
                                        the Ethereum Blockchain.</p>
                                    </div>
                                </Grid>
                                <Grid item className="textBlockContainer" sm={12} md={12} lg={6}>
                                    <div className="textBlock">
                                        <h2 className="SubMainHeader">  1 OF 2 THINGS WILL HAPPEN IF YOU ENTER</h2>
                                        <p className="text_white  description "> 1. You will become a whale</p>
                                        <p className="text_white  description "> 2. Someone else will become a whale</p>
                                        <p className="text_white  nomatterwhat ">No matter what we are changing lives</p>
                                    </div>
                                </Grid>
                            </Grid>
                            
                           
                        </Grid>
                        <Grid id="MakeAWhaleImageContainer" item xs={12} md={4} >
                             <img src="/MakeAWhaleArtwork.png" className="whaleImage"></img>
                        </Grid>
                </Grid>

                
            </div>
        )
    }


}

export default HeaderV2;
