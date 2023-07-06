"use client"
import { Dispatch, SetStateAction } from "react"
import styled from "styled-components"

const Title = styled.div`
  color: #fff;
  font-size: 1.2rem;
  font-family: Gilroy;
  font-style: normal;
  font-weight: 400;
  line-height: 155%;
`
const InputField = styled.input`
  border-radius: 0.6rem;
  font-size: 1.8rem;
  font-family: Gilroy;
  font-style: normal;
  border: 0;
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
