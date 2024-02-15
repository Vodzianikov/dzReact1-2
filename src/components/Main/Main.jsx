import { useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { SubscribeList } from "../SubscribeList/SubscribeList"
import { NavState } from "../Menu/MenuState"
import { Menu } from "../Menu/Menu"

import { Users } from "../Users/Users"
const {Wrapper,MainW,SubscribeListWrapper}={
        Wrapper:styled.div`
        border-radius: 30px;
        margin: auto;
        width: 80%;
        border: 2px solid rgb(255, 255, 255);
        box-shadow: 4px 4px 6px rgba(0,0,0,.3);
        text-align: center;
        /* padding: 20px; */
        background: rgb(2,0,36);
        background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
        padding: 20px;
        padding-bottom:0px;
    `,
    MainW:styled.div`
        border: 25px;
    `,SubscribeListWrapper:styled.div`
            display: flex;
            align-items: center;
            justify-content: center;
            
    `
    
}

export const Main =()=>{
    return(
        <MainW>
        <NavState>
            <Menu/>
        </NavState>
        <Wrapper>
            <Users/>
            <SubscribeListWrapper>
                <SubscribeList/>
            </SubscribeListWrapper>
        </Wrapper>
        </MainW>
    )
}