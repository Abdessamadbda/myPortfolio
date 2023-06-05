<template>
    
   <div id="Home">
  <div class="home" >
     <div>
     <img class="code" src="../../public/code.png">
    <p class="name">Hi! I Am <div class="job">Web Developer</div> </p>
    <p class="name"><img class="code1" src="../../public/code.png">&nbsp;Abdessamad Elbadaoui&nbsp;<img class="code1" src="../../public/code.png"></p>
    <p class="text">Hi, I'm Abdessamad Elbadaoui, a software engineering student passionate about creating amazing web experiences.</p>
    <div class="buttons">
    <button class="but1" @click="goToProjects">View Projects</button>
    <button class="but2" @click="goToSkills">View Skills</button>
    </div>
      <img class="code2" src="../../public/code.png">

    </div>
    <div>
    <img class="me" src="../../public/Photo.jpg">
        
        <a href="https://www.linkedin.com/in/abdessamad-elbadaoui-101874247/" target="_blank">
          <img class="linkedin" src="../../public/linkedin.png" alt="Logo">
        </a>
 
      <a class="github" href="https://github.com/Abdessamadbda" target="_blank">
          <img class="github" src="../../public/github.png" alt="Logo">
        </a>
      <a href="https://www.linkedin.com/your-linkedin-profile" target="_blank">
          <img class="figma" src="../../public/figma.png" alt="Logo">
        </a>
    
    


    </div>
    
  </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    goToProjects() {
      this.$router.push('/projects');
    },
    
    goToSkills() {
      this.$router.push('/Skills');
    }
  }
};
</script>

<style scoped>
.home {
 margin-Top:6rem;
 margin-Left:6rem;
 font-family: cursive;
 display:flex;
}
.buttons{
margin-Top:2rem;
}
.text{
margin-top:4rem;
}
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
.code{
  height:2rem;
   width:2rem;
   border-radius:0.5rem;
   margin-Left:40rem;
   margin-Top:-30rem;
transform: rotate(45deg);
}
.code1{
  height:2rem;
   width:2rem;
   border-radius:0.5rem;
   margin-right:1rem;
   margin-Top:0.7rem;

}
.code2{
  height:2rem;
   width:2rem;
   border-radius:0.5rem;
   margin-Top:5rem;
   margin-Left:30rem;
   transform: rotate(45deg);


}
.but1{
height:3rem;
width:8rem;
background-color:orange;
border:1px solid orange
}
.linkedin{
   height:2rem;
   width:2rem;
   border-radius:0.5rem;
   margin-bottom:19rem;
   margin-right:3rem
}
.linkedin:hover{
  box-shadow: 0 0 6px 5px rgba(0, 140, 186, 0.5);

}
.figma:hover{
  box-shadow: 0 0 6px 5px rgba(0, 140, 186, 0.5);

}
.github:hover{
  box-shadow: 0 0 6px 5px rgba(0, 140, 186, 0.5);

}
.figma{
   height:2rem;
   width:2rem;
   border-radius:0.5rem;
   margin-left:2rem;

}
.github{
   height:2rem;
   width:2rem;
   border-radius:0.5rem;
   margin-Left:-2rem;
}
.but2{
margin-Left:1rem;
height:3rem;
width:8rem;
background-color:white;
border:1px solid grey;
}

.me{
margin-Top:1rem;
width:18rem;
height:18rem;
     border-radius:50%;
     margin-Left:5rem;
}

.comp1{
   margin-Left:40rem;
}
.abde{
margin-Left:0rem;
}
.job{
margin-Top:-4rem;
margin-Left:10rem;
background-color:#5C9DDE;
border-radius:1rem;
height:2rem;
text-align:center;
width:10rem;
font-Size:1.2rem;
color:white;
}
.name{
font-Size:2rem;

  display:flex;
  margin-Left:8px;
}
</style>

