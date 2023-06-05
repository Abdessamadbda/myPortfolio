<template>
  <div id="app">
    <nav class='navbar'  >
        <div class='navbar-container'>
          <Link to='/' class="navbar-logo" >
            <i class="lg">EA</i>
          </Link>
          
          <ul class="nav-menu">
            <li class='nav-item'>
              <router-link class='nav-links' to="/">Home</router-link>
            </li>
            <li class='nav-item'>
              <router-link class='nav-links' to="/Parcours">Parcours</router-link>
            </li>
            <li class='nav-item'> 
              <router-link class='nav-links' to="/Skills">Skills</router-link>
            </li>
            <li class='nav-item'> 
              <router-link class='nav-links' to="/Projects">Projects</router-link>
            </li>
            <button class='button' > 
              <a class='res' href="https://drive.google.com/file/d/1QizdZiSIRaAmlUfj81PifKBUfMFh9H1X/view?usp=drive_link">Resume</a>
            </button>
          </ul>

        </div>
      </nav>

      
    
    <router-view/>
    <footer >
    <div style="background: rgb(253,29,29);
background: linear-gradient(90deg, rgba(253,29,29,1) 50%, rgba(253,61,38,1) 61%, rgba(253,81,43,1) 68%, rgba(253,87,45,1) 70%, rgba(253,99,48,1) 74%, rgba(253,129,56,1) 84%, rgba(253,150,62,1) 91%, rgba(252,176,69,1) 100%); text-align:center">
        <p style="font-family:AgafiaRosdina; color:white">This website is made using <img style="height:1rem;width:1rem; margin-left:1rem;margin-top:5px " src="../public/vue.png"></p>
<div class="im1">
      <a class="lga" >© 2023 Copyright:<a style="font-family:AgafiaRosdina">EA</a></a> <a style="margin-left:20rem">made with<img style="width:1rem; height:1rem;margin-left:4px ;margin-right:4px" src="../public/heart.png">by Elbadaoui Abdessamad</a></div>
    </div>
  </footer>
  </div>
  <div>
    <left-sidebar v-if="showLeftSidebar" />
  </div>
</template>

<script>
import LeftSidebar from '/src/components/LeftSidebar.vue';
export default {
components: {
    LeftSidebar,
  },
  data() {
    return {
      showLeftSidebar: false,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  name: 'App',
  
  methods: {
    handleScroll() {
      const scrollThreshold = 200;

      if (window.pageYOffset > scrollThreshold) {
        this.showLeftSidebar = true;
      } else {
        this.showLeftSidebar = false;
      }
    },
  },
}
</script>

<style>
.button{
height:3rem;
width:8rem;
margin-top:1.5rem;
background: rgb(253,29,29);
background: linear-gradient(90deg, rgba(253,29,29,1) 50%, rgba(253,61,38,1) 61%, rgba(253,81,43,1) 68%, rgba(253,87,45,1) 70%, rgba(253,99,48,1) 74%, rgba(253,129,56,1) 84%, rgba(253,150,62,1) 91%, rgba(252,176,69,1) 100%);
border:3px solid white;
border-radius:8px;
}
.res{
justify-content:center;
font-size:1.5rem;
color:white;
}
a:link { text-decoration: none; }
.nav-links {
  color: black;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  font-Size:1.2rem;
   font-family: Consolas;

  
}
footer{
margin-bottom:-1rem;
margin-top:5rem;
}
.lga{
font-family:AgafiaRosdina;
margin-left:20rem;

}
.footer{
margin-bottom:1rem;
}
@font-face {
  font-family: "Merienda";
  src: local("Merienda"),
   url(./fonts/Merienda/Merienda-Regular.ttf) format("truetype");
}
@font-face {
  font-family: 'rabikiso';
  src: local("AgafiaRosdina"),
   url(./fonts/AgafiaRosdina/AgafiaRosdina.ttf) format("truetype");
}
@font-face {
  font-family: 'NT-Mikella ';
  src: local("NT-Mikella "),
   url(./fonts/NT-Mikella /NT-Mikella.ttf) format("truetype");
}
.lg{
font-family:AgafiaRosdina;
font-size:2rem;
color:red;
margin-left:5rem;
}
.navbar {
  background-color:white;
  height: 80px;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
box-shadow: 10px 5px 5px red;}

.navbar-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  max-width: 1500px;
}
.navbar-logo {
  color: black;
  justify-self: start;
  margin-left: 20px;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
}
.nav-item {
  height: 80px;
  font-weight: bold;
}
.nav-menu {
  display: flex;
  grid-template-columns: repeat(4, auto);
  grid-gap: 10px;
  list-style: none;
  text-align: center;
  width: 60vw;
  justify-content: end;
  margin-Left: 14rem;
}
.nav{
margin-Left:6rem;
     display:flex;
}
.navbar{
   font-Size:2rem;
}
.im1{
display:flex;
}
</style>

