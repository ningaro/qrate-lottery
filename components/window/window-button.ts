"use client"

import styled from "styled-components"

export const WindowButton = styled.button`
  color: var(--white, #fff);
  border: 0;
  border-radius: 16px 16px 0px 0px;
  font-size: 1.5rem;
  font-family: var(--font-gilroy);
  font-style: normal;
  font-weight: 500;
  line-height: 155%;
  background: #00a2ff;
  transition: all 0.1s linear;
  user-select: none;
  text-decoration: none;
  padding: 0.2rem 0.5rem;

  &:hover {
    background: #00a2ff8c;
    cursor: pointer;
  }
`
