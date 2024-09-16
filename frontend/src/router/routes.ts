import ConversationsView from "@/views/ConversationsView.vue";
import LoginView from "@/views/LoginView.vue";

const routes = [
    {
        path: '/',
        name: 'Conversations',
        component: ConversationsView,
        // TODO auth metadata
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginView,
        // TODO auth metadata
    }
]

export default routes