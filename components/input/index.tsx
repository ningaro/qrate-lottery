"use client"
import { Dispatch, SetStateAction } from "react"
import styled from "styled-components"

const Title = styled.div`
  color: #fff;
  font-size: 1.4rem;
  font-family: var(--font-gilroy);
  font-style: normal;
  font-weight: 400;
  line-height: 155%;
`
const InputField = styled.input`
  border-radius: 0.6rem;
  font-size: 1.5rem;
  font-family: var(--font-gilroy);
  font-weight: 400;
  font-style: normal;
  border: 0;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 0.5rem;
  width: 100%;
`
const InputRoot = styled.div`
  width: 100%;
`

interface InputProps {
  inputTitle: string
  inputValue: string | number
  inputUpdateValue: Dispatch<SetStateAction<string>>
}

export const Input = ({
  inputTitle,
  inputValue,
  inputUpdateValue,
}: InputProps) => {
  return (
    <InputRoot>
      <Title>{inputTitle}</Title>
      <InputField
        value={inputValue}
        onChange={(e) => inputUpdateValue(e.currentTarget.value)}
      />
    </InputRoot>
  )
}
