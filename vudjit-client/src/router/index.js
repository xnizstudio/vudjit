import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home.vue'

import Accounts from '@/views/Accounts.vue'
import AddAcct from '@/components/Account/AddAcct.vue'

import Login from '@/components/User/Login.vue'
import Logout from '@/components/User/Logout.vue'


import PageNotFound from '@/components/PageNotFound'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    is_nav: true,
    component: Home,
    meta: {
      title: 'Home - Vudjit',
      valign: 'middle',
      requiresAuth: true,
      metaTags: [
        {
          name: 'vudjit-home',
          content: 'Vudjit is your automated expense tracker.'
        },
        {
          property: 'og:description',
          content: 'Vudjit is your automated expense tracker.'
        }
      ]
    }
  },
  {
    path: '/login',
    name: 'Login',
    is_nav: false,
    component: Login,
    meta: {
      title: 'Login - Vudjit',
      valign: 'middle',
      requiresAuth: true,
      metaTags: [
        {
          name: 'vudjit-login',
          content: 'Vudjit is your automated expense tracker.'
        },
        {
          property: 'og:description',
          content: 'Vudjit is your automated expense tracker.'
        }
      ]
    }
  },
  {
    path: '/logout',
    name: 'Logout',
    is_nav: false,
    component: Logout,
    meta: {
      title: 'Logout - Vudjit',
      valign: 'middle',
      requiresAuth: true,
      metaTags: [
        {
          name: 'vudjit-logout',
          content: 'Vudjit is your automated expense tracker.'
        },
        {
          property: 'og:description',
          content: 'Vudjit is your automated expense tracker.'
        }
      ]
    }
  },
  {
    path: '/budgets',
    name: 'My Budgets',
    is_nav: true,
    component: Accounts,
    meta: {
      valign: 'middle',
      title: 'Budgets - Vudjit',
      requiresAuth: true,
      metaTags: [
        {
          name: 'vudjit-accounts',
          content: 'Vudjit is your automated expense tracker.'
        },
        {
          property: 'og:description',
          content: 'Vudjit is your automated expense tracker.'
        }
      ]
    },
  },
  {
    path: '/budgets/add',
    name: 'Add Account',
    is_nav: false,
    component: AddAcct,
    meta: {
      valign: 'middle',
      title: 'Add Account - Vudjit',
      requiresAuth: true,
      metaTags: [
        {
          name: 'vudjit-add-account',
          content: 'Vudjit is your automated expense tracker.'
        },
        {
          property: 'og:description',
          content: 'Vudjit is your automated expense tracker.'
        }
      ]
    },
  },
  { 
    path: "*", 
    component: PageNotFound,
    meta: {
      valign: 'middle',
      title: 'Page not found - Vudjit',
      metaTags: [
        {
          name: 'vudjit-404',
          content: 'The requested page was not found.'
        },
        {
          property: 'og:description',
          content: 'The requested page was not found.'
        }
      ]
    },
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// ======================== Fix meta data and page titles ======================== //
// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
  //const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if(nearestWithTitle) document.title = nearestWithTitle.meta.title;

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

  // Skip rendering meta tags if there are none.
  if(!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });

    // We use this to track which meta tags we create, so we don't interfere with other ones.
    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  })
  // Add the meta tags to the document head.
  .forEach(tag => document.head.appendChild(tag));

  next();
});

export default router