// Node Modules
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'
import {Animated} from 'react-native'
import {PanGestureHandler, State} from 'react-native-gesture-handler'

// Local Modules
import {
	Container, Content, Card, CardHeader, CardContent, Title, Description, CardFooter, Anotation
} from './styles';
import Header from '../../Components/Header'
import Tabs from '../../Components/Tabs'
import Menu from '../../Components/Menu'

function Main() {

	let offset = 0;

	const translateY = new Animated.Value(0)

	const animatedEvent = Animated.event(
		[
			{
				nativeEvent: {
					translationY: translateY,
				}
			}
		],
		{ useNativeDriver: true },
	)

	function onHandlerStateChange(event){
		// Verificar se o estado anterior da animação era ativo
		// Ou seja, se o usuário já acabou a animação
		if(event.nativeEvent.oldState == State.ACTIVE){
			let opened = false
			const { translationY } = event.nativeEvent;

			offset += translationY

			if(translationY >= 100) {
				opened = true
			} else {
				translateY.setValue(offset)
				translateY.setOffset(0)
				offset = 0 
			}

			Animated.timing(translateY, {
				toValue: opened ? 380 : 0,
				duration: 200,
				useNativeDriver: true
			}).start(() => {
				//Função calback quando a animação termina
				offset = opened ? 380 : 0,
				translateY.setOffset(offset)
				translateY.setValue(0)
			})
		}
	}

	return (
		<Container>
			<Header />


			<Content>
				<Menu translateY={translateY} />


				<PanGestureHandler
					onGestureEvent={animatedEvent}
					onHandlerStateChange={onHandlerStateChange}
				>
					<Card
						style={{
							transform: [{
								translateY: translateY.interpolate({
									inputRange: [-150,0, 380],
									outputRange: [-20, 0, 380],
									extrapolate: 'clamp'
								}),
							}]
						}}
					>
						<CardHeader>
							<Icon name='attach-money' size={28} color='#666' />
							<Icon name='visibility-off' size={28} color='#666' />
						</CardHeader>
						<CardContent>
							<Title>Saldo Disponível</Title>
							<Description>R$ 197.611,65</Description>
						</CardContent>
						<CardFooter>
							<Anotation>
								Transferência de R$ 20,00 recebida de Normaneide Nascimento Leão hoje as 15:00h
					</Anotation>
						</CardFooter>
					</Card>
				</PanGestureHandler>
			</Content>


			<Tabs translateY={translateY}/>
		</Container>
	)
}

export default Main;
