import Vue from 'vue'
import Router from 'vue-router'
import DomainList from '@/components/DomainList'
import DomainForm from '@/components/DomainForm'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/domains/',
            name: 'DomainList',
            component: DomainList
        },
        {
            path: '/domains/add/',
            name: 'DomainAdd',
            component: DomainForm
        }
    ]
})