import ConversationsView from "@/views/ConversationsView.vue";

const routes = [
    {
        path: '/',
        name: 'Conversations',
        component: ConversationsView,
        // TODO auth metadata
    }
]

export default routes