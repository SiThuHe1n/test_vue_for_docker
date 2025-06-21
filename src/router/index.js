import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HomePage from '../views/pages/Main.vue'
import Login from '../views/pages/Login.vue'

import lottery_2d from '../views/pages/2D/lottery.vue'
import ledger_2d from '../views/pages/2D/ledger.vue'

import am_section_1 from '../views/pages/2DSection/am_section_1.vue'
import am_section_2 from '../views/pages/2DSection/am_section_2.vue'
import pm_section_1 from '../views/pages/2DSection/pm_section_1.vue'
import pm_section_2 from '../views/pages/2DSection/pm_section_2.vue'

import voucher_am_section_1 from '../views/pages/2DSection/voucher_am_1.vue'
import voucher_am_section_2 from '../views/pages/2DSection/voucher_am_2.vue'
import voucher_pm_section_1 from '../views/pages/2DSection/voucher_pm_1.vue'
import voucher_pm_section_2 from '../views/pages/2DSection/voucher_pm_2.vue'


import lottery_3d from '../views/pages/3D/lottery.vue'
import ledger_3d from '../views/pages/3D/ledger.vue'

import body from '../views/pages/Football/body.vue'
import football_body_voucher from '../views/pages/Football/voucher.vue'


import maung from '../views/pages/Football/maung.vue'
import game_2 from '../views/pages/games/dice.vue'
import game_1 from '../views/pages/games/game_1.vue'

import redirect_game_one from '../views/pages/games/redirect_game.vue'


import football_maung_voucher from '../views/pages/Football/voucher_maung.vue'

import history_transaction from '../views/pages/history.vue'


import football_history_maung from '../views/pages/Football/history_maung.vue'
import football_history_body from '../views/pages/Football/history_body.vue'
import football_report from '../views/pages/Football/report.vue'
import telegram_page from '../views/pages/message/telegram.vue'
import telegram_page_3d from '../views/pages/message/telegram_3d.vue'
import game_voucher from '../views/pages/games/game_voucher.vue'
const routes = [
  {
    path: '/telegram',
    name: 'telegram',
    component: telegram_page
  },

  {
    path: '/history_transaction',
    name: 'history_transaction',
    component: history_transaction
  },

  

  {
    path: '/telegram_3d',
    name: 'telegram_3d',
    component: telegram_page_3d
  },

  {
    path: '/am_section_1',
    name: 'am_section_1',
    component: am_section_1
  },
  
  {
    path: '/am_section_2',
    name: 'am_section_2',
    component: am_section_2
  },

  {
    path: '/pm_section_1',
    name: 'pm_section_1',
    component: pm_section_1
  },
  
  {
    path: '/pm_section_2',
    name: 'pm_section_2',
    component: pm_section_2
  },


  {
    path: '/voucher_am_section_1',
    name: 'voucher_am_section_1',
    component: voucher_am_section_1
  },

  {
    path: '/voucher_am_section_2',
    name: 'voucher_am_section_2',
    component: voucher_am_section_2
  },


  {
    path: '/voucher_pm_section_1',
    name: 'voucher_pm_section_1',
    component: voucher_pm_section_1
  },


  {
    path: '/voucher_pm_section_2',
    name: 'voucher_pm_section_2',
    component: voucher_pm_section_2
  },


  {
    path: '/redirect_game_one',
    name: 'redirect_game_one',
    component: redirect_game_one
  },
  
  

  {
    path: '/main',
    name: 'home',
    component: HomeView
  },
  {
    path: '/football_report',
    name: 'football_report',
    component: football_report
  },
  
  {
    path: '/game_1',
    name: 'game_1',
    component: game_1
  },

  {
    path: '/game_voucher',
    name: 'game_voucher',
    component: game_voucher
  },

  

  {
    path: '/football_history_body',
    name: 'football_history_body',
    component: football_history_body
  },

  {
    path: '/football_history_maung',
    name: 'football_history_maung',
    component: football_history_maung
  },
  

  {
    path: '/body',
    name: 'body',
    component: body
  },


  {
    path: '/maung',
    name: 'maung',
    component: maung
  },


  {
    path: '/lottery_2d',
    name: 'lottery_2d',
    component: lottery_2d
  },
  {
    path: '/body/voucher',
    name: 'football_body_voucher',
    component: football_body_voucher
  },

    {
    path: '/maung/voucher',
    name: 'football_maung_voucher',
    component: football_maung_voucher
  },


  
  {
    path: '/2d/ledger',
    name: 'ledger_2d',
    component: ledger_2d
  },

  {
    path: '/lottery_3d',
    name: 'lottery_3d',
    component: lottery_3d
  },

  {
    path: '/3d/ledger',
    name: 'ledger_3d',
    component: ledger_3d
  },

  
  {
    path: '/',
    name: 'login',
    component: Login
  },
  
  {
    path: '/home',
    name: 'homepage',
    component: HomePage
  },

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
