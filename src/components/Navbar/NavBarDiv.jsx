import React from "react";
import styled from "styled-components";

//navbar
export const NavBox = styled.div`
    width: 100%;
    height: 64px;
    //가운데 정렬
    display: flex;
    align-items: center;

    padding-left: 24px;
    //등등 셋팅
    background-color: white;
    border-radius: 5px; // 둥글게 만드는 부분
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // 그림자 효과
`;

export const Text = styled.strong`
    margin-bottom: 0px;
    font-size: 1.03rem;
`;