// Node modules
import React from 'react';
import QRCode from 'react-native-qrcode-svg';
import Icon from 'react-native-vector-icons/MaterialIcons'

// Local Modules
import { 
    Container, Code, Nav, NavItem, NavText, SignOutButton, SignOutButtonText
} from './styles';

export default function Menu({translateY}) {
    return (
        <Container
            style={{
                opacity: translateY.interpolate({
                    inputRange: [0, 150],
                    outputRange: [0, 1]
                })
            }}
        >
            <Code>
                <QRCode
                    value="http://rocketseat.com.br"
                    size={80}
                    color='#8B10AE'
                    backgroundColor='#FFF'
                />
            </Code>

            <Nav>
                <NavItem>
                    <Icon name='help-outline' size={20} color='#FFF'/>
                    <NavText>Me ajuda</NavText>
                </NavItem>
                <NavItem>
                    <Icon name='person-outline' size={20} color='#FFF'/>
                    <NavText>Meu perfil</NavText>
                </NavItem>
                <NavItem>
                    <Icon name='credit-card' size={20} color='#FFF'/>
                    <NavText>Cofigurar Cartão</NavText>
                </NavItem>
                <NavItem>
                    <Icon name='smartphone' size={20} color='#FFF'/>
                    <NavText>Configurações do app</NavText>
                </NavItem>
            </Nav>

            <SignOutButton onPress={() => {}}>
                <SignOutButtonText>SAIR DO APP</SignOutButtonText>
            </SignOutButton>
        </Container>
    )
}