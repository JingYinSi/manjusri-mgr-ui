<template>
  <div>
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <a class="navbar-brand" href="#">
        <img src="app/assets/logo.png" width="30" height="30" class="d-inline-block" alt=""/>
        <span class="h3">静音寺业务管理系统</span>
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarToggler">
        <ul class="navbar-nav mr-auto mt-2 h5">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">Disabled</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
               aria-haspopup="true" aria-expanded="false">Dropdown
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
        </ul>
        <ul class="navbar-nav my-0">
          <li class="nav-item">
            <a class="nav-link" href="#">登录</a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="wrapper">
      <nav id="sidebar">
        <div class="sidebar-header">
          <img width="100%" src="app/assets/suixi.jpg"/>
        </div>
        <ul class="list-unstyled components pl-2">
          <li class="active">
            <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">
              <i class="fa fa-home"></i>Home
              <i class="fa fa-chevron-down pull-right"></i>
            </a>
            <ul class="collapse list-unstyled" id="homeSubmenu">
              <li><a href="#">Home 1</a></li>
              <li><a href="#">Home 2</a></li>
              <li><a href="#">Home 3</a></li>
            </ul>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-briefcase"></i>
              About
            </a>
            <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false">
              <i class="fa fa-book"></i>
              <i class="fa fa-chevron-down pull-right"></i>
              Pages
            </a>
            <ul class="collapse list-unstyled" id="pageSubmenu">
              <li><a href="#">Page 1</a></li>
              <li><a href="#">Page 2</a></li>
              <li><a href="#">Page 3</a></li>
            </ul>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-link"></i>
              Portfolio
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-paperclip"></i>
              FAQ
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-send"></i>
              Contact
            </a>
          </li>
        </ul>

        <ul class="list-unstyled CTAs">
          <li><a href="https://bootstrapious.com/tutorial/files/sidebar.zip" class="download">Download source</a></li>
          <li><a href="https://bootstrapious.com/p/bootstrap-sidebar" class="article">Back to article</a></li>
        </ul>
      </nav>

      <!-- Page Content Holder -->
      <div id="content">
        <h1>Choppy's Restaurant</h1>
        <ul>
          <li><router-link to="/" exact>Home</router-link></li>
          <li><router-link to="/menu">Menu</router-link></li>
          <li><router-link to="/lessons">Lessons</router-link></li>
        </ul>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import ShoppingListTitleComponent from './app/components/demo/ShoppingListTitleComponent'
import ShoppingListComponent from './app/components/demo/ShoppingListComponent'
import store from './app/vuex/store'
import {mapGetters, mapActions} from 'vuex'
import _ from 'underscore'

export default {
  components: {
    ShoppingListTitleComponent,
    ShoppingListComponent
  },
  store,
  computed: mapGetters({
    selected: 'getSelected',
    shoppinglists: 'getShoppinglists'
  }),
  methods: _.extend({}, mapActions([
    'populateShoppingLists',
    'createShoppingList'
  ]), {
    choose (index) {
      if (index < 0) {
        this.$store.state.selected = 0
      }
      this.$store.state.selected = index
    },
    addShoppingList () {
      let list = {
        title: 'New Shopping List',
        items: []
      }
      this.createShoppingList(list)
    }
  }),
  mounted () {
    this.populateShoppingLists()
    // this.currentList = this.shoppinglists[0]
  }
}
</script>

<style>
  .list-unstyled .fa-chevron-down {
    font-size:1em;
    margin-top: 5px;
    transition: .3s transform ease-in-out;
  }
  .list-unstyled .collapsed .fa-chevron-down {
    transform: rotate(90deg);
  }
  a, a:hover, a:focus {
    color: inherit;
  }
  .wrapper {
    display: flex;
    align-items: stretch;
  }

  #sidebar {
    min-width: 250px;
    max-width: 250px;
    background: #7686D5;
    color: #fff;
    transition: all 0.3s;
  }
  .fa {
    font-size:24px;
  }
  #sidebar ul.components {
    padding: 20px 0;
    border-bottom: 1px solid #47748b;
  }
  #sidebar ul li a {
    padding: 10px;
    font-size: 1.1em;
    display: block;
  }
  #sidebar ul li a:hover {
    color: #7386D5;
    background: #fff;
  }
  #sidebar ul li a i {
    margin-right: 10px;
  }
  a[data-toggle="collapse"] {
    position: relative;
  }
  ul ul a {
    font-size: 0.9em !important;
    padding-left: 40px !important;
    background: #6d7fcc;
  }
  ul.CTAs {
    padding: 24px !important;
  }

</style>
