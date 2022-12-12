import styled from 'styled-components'

export const ButtonBold = styled.button`
  color: ${props => (props.applyBold ? '#faff00' : '#f1f5f9')};
  background-color: #25262c;
  border: none;
  cursor: pointer;
`
export const ButtonItalic = styled.button`
  color: ${props => (props.applyItalic ? '#faff00' : '#f1f5f9')};
  background-color: #25262c;
  border: none;
  cursor: pointer;
`
export const ButtonUnderline = styled.button`
  color: ${props => (props.applyUnderline ? '#faff00' : '#f1f5f9')};
  background-color: #25262c;
  border: none;
  cursor: pointer;
`

export const TextArea = styled.textarea`
  font-weight: ${props => (props.applyBold ? 'bold' : 'normal')};
  font-style: ${props => (props.applyItalic ? 'italic' : 'normal')};
  text-decoration: ${props => (props.applyUnderline ? 'underline' : 'normal')};
  height: 87%;
  width: 97%;
  background-color: #25262c;
  border: 1px solid #334155;
  border-top: none;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  outline: none;
  color: #f1f5f9;
  padding: 12px 16px;
`
