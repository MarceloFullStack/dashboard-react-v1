import React from 'react'
import styled from "styled-components"

const Container = styled.div`
background: mediumaquamarine;
height:89vh;
width:100vw;
display:grid;
grid-template: 1fr 5fr 1fr / 1fr 5fr;
gap:1px;
grid-template-areas: 
"logo header"
"nav content"
"footer footer";
margin-left: 0%;
`

const Logo = styled.div`
background: tomato;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
grid-area: logo;
`
const Header = styled.div`
background: #BADA55;
grid-area: header;
`
const Nav = styled.div`
background: #EB9532;
grid-area: nav;
`
const Content = styled.div`
background: #8870FF;
grid-area: content;
`
const Footer = styled.div`
background: #61381B;
grid-area: footer;
`
export  function Reports() {
  return (
    <Container className="container">
      <Logo className="logo">
        <div className="items">logo</div>
        <div className="items">business name</div>
        <div className="items">direitos reservados</div>
      </Logo>
      <Header className="header">header</Header>
      <Nav className="nav">nav</Nav>
      <Content className="content">content</Content>
      <Footer className="footer">footer</Footer>
    </Container>
  )
}
