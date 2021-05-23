<template>
  <!-- Navbar-->
<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container justify-content-between">
      <!-- nedan för att ladda startsidan i den vill vi ha loggan -->
      <router-link class="navbar-brand" to="/">  <i class="fas fa-place-of-worship me-2"></i> JohnShop.se 
      </router-link>
       <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" aria-current="page" to="/products">Products</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" aria-current="page" to="about">About</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true"
            >Disabled</router-link>
          
        </li>
      </ul>
    </div>
    <!-- Left elements -->
    <div class="d-flex">
      <!-- Brand -->
      <a class="navbar-brand me-2 mb-1 d-flex align-items-center" href="#">
        <!-- <img
          src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png"
          height="20"
          alt=""
          loading="lazy"
          style="margin-top: 2px;"
        /> -->
      </a>

      <!-- Search form -->
      <form class="input-group w-auto my-auto d-none d-sm-flex">
        <input
          autocomplete="off"
          type="search"
          class="form-control rounded"
          placeholder="Search"
          style="min-width: 125px;"
        />
        <span class="input-group-text border-0 d-none d-lg-flex"
          ><i class="fas fa-search"></i
        ></span>
      </form>
    </div>
    <!-- Left elements -->

    <!-- Center elements -->
    <!-- <ul class="navbar-nav flex-row d-none d-md-flex">
      <li class="nav-item me-3 me-lg-1 active">
        <a class="nav-link" href="#">
          <span><i class="fas fa-home fa-lg"></i></span>
          <span class="badge rounded-pill badge-notification bg-danger">1</span>
        </a>
      </li>

      <li class="nav-item me-3 me-lg-1">
        <a class="nav-link" href="#">
          <span><i class="fas fa-flag fa-lg"></i></span>
        </a>
      </li>

      <li class="nav-item me-3 me-lg-1">
        <a class="nav-link" href="#">
          <span><i class="fas fa-video fa-lg"></i></span>
        </a>
      </li>

      <li class="nav-item me-3 me-lg-1">
        <a class="nav-link" href="#">
          <span><i class="fas fa-shopping-bag fa-lg"></i></span>
        </a>
      </li>

      <li class="nav-item me-3 me-lg-1">
        <a class="nav-link" href="#">
          <span><i class="fas fa-users fa-lg"></i></span>
          <span class="badge rounded-pill badge-notification bg-danger">2</span>
        </a>
      </li>
    </ul> -->
    <!-- Center elements -->

    <!-- Right elements -->
    <ul class="navbar-nav flex-row">
      <li class="nav-item me-3 me-lg-1">
        <!-- <a class="nav-link d-sm-flex align-items-sm-center" href="#"> -->
          <!-- <img
            src="https://mdbootstrap.com/img/new/avatars/1.jpg"
            class="rounded-circle"
            height="22"
            alt=""
            loading="lazy"
            
          /> -->
          <!-- <strong class="d-none d-sm-block ms-1">John</strong> -->
        <!-- </a> -->
      </li>
      <li class="nav-item me-3 me-lg-1">
        <!-- <a class="nav-link" href="#">
          <span><i class="fas fa-plus-circle fa-lg"></i></span>
        </a> -->
      </li>
      <li class="nav-item dropdown me-3 me-lg-1">
        <a
          class="nav-link dropdown-toggle hidden-arrow"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <!-- <i class="fas fa-comments fa-lg"></i> -->

          <i class="fas fa-star"></i>

          <span class="badge rounded-pill badge-notification bg-danger">6</span>
        </a>
        <ul
          class="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuLink"
        >
          <li><a class="dropdown-item" href="#">Favorites</a></li>
          <!-- <li><a class="dropdown-item" href="#">Another news</a></li>
          <li>
            <a class="dropdown-item" href="#">Something else here</a>
          </li> -->
        </ul>
      </li>
      <li class="nav-item dropdown me-3 me-lg-1">
        <a
          class="nav-link dropdown-toggle hidden-arrow"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <!-- <i class="fas fa-bell fa-lg"></i> -->
          <i class="fas fa-cart-arrow-down"></i>
          <span class="badge rounded-pill badge-notification bg-danger">3</span>
        </a>
        <ul class="dropdown-menu dropdown-menu-end shopping-cart" aria-labelledby="navbarDropdownMenuLink">
          <li><a class="dropdown-item" href="#">My cart</a></li>
        
          <ShoppingCart />
        </ul>
      </li>
      
      
      <li class="nav-item dropdown me-3 me-lg-1">
        <a
          class="nav-link dropdown-toggle hidden-arrow"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false">

          <i class="far fa-user"></i>
        </a>
        
        <ul
          class="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuLink">

          <li><a class="dropdown-item dropdown-end" href="#">my Account</a></li>
        </ul>
      </li>
<!-- denna funktion visar om den är inloggad eller inte som senare data i export default nedanför hänvisar till true eller false -->
        <li v-if="!loggedIn">
          <router-link class="nav-link" to="/Login">Login</router-link>
        </li>

    </ul>


    <!-- Right elements -->
  </div>
</nav>
<!-- Navbar -->
</template>

<script>
export default {
  data(){
    return {
      loggedIn: false
    }
  }

}
</script>

<script>
import ShoppingCart from '../ShoppingCart/ShoppingCart'
export default {
  name: 'Navbar',
  components: {
    ShoppingCart
  }
  
}
</script>

<style>
.shopping-cart {
  min-width: 430px;

}

</style>