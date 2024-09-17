package com.websuckit.backend

import org.springframework.context.annotaion.Configuration
import org.springframework.messaging.simp.config.MessageBrokerRegistry
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker
import org.springframework.web.socket.config.annotation.StompEndpointRegistry
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer

@Configuration
@EnableWebSocketMessageBroker
class WebsocketConfiguration : WebsocketMessageBrokerConfigurer {
    @Override
    fun registerStompEndpoints(registry: StompEndpointRegistry) {
        registry.addEndpoint("/ws").withSockJS()
    }

    @Override
    fun configureMessageBroker(registry: MessageBrokerRegistry) {
        registry.setApplicationDestinationPrefixes("/app")
        registry.enableSimpleBroker("/topic")
    }
}