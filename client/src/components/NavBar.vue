<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand" :to="{name:'home'}">Navbar</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#appNavBar" aria-controls="appNavBar" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    
      <div class="collapse navbar-collapse" id="appNavBar">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link :to="{name:'home'}" class="nav-link" aria-current="page">Home</router-link>
          </li>
        </ul>
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link :to="{name:'login'}" class="nav-link" aria-current="page">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name:'register'}" class="nav-link" aria-current="page">Register</router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              User
            </a>
            <ul class="dropdown-menu">
              <li><router-link :to="{name:'user'}" class="dropdown-item">Username</router-link></li>
              <li><div class="dropdown-divider"></div></li>
              <li><button class="dropdown-item btn btn-danger">Logout</button></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>