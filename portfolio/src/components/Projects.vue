<template>
  <div class="Projects">
    <h1 style="text-align:center;margin-top:4rem">Welcome to the list of my Projects</h1>
    <div class="Projet1">
        <div style="display:flex"> <img class="entrep" src="../../public/pfe.png"><div class='gestion'><li class="i">PFEs management platform</li><br><li class="i1"><a style="color:orange">Technologies :</a> React + NodeJs</li><br><li class="i2"><a style="color:orange">Github Link : </a> <a href="https://github.com/Abdessamadbda/PFE-app">https://github.com/Abdessamadbda/PFE-app</a></li></div></div>
    </div>
    <div class="Projet2">
        <div style="display:flex;margin-top:0.2rem;margin-bottom:0.2rem;"> <div class='gestion1'><li class="i3">Craftsmen Platform</li><br><li class="i4"><a style="color:orange">Technologies : </a>Figma + html + css + JavaScript</li><br><li class="i5"><a style="color:orange">Figma Link : </a><a href="https://www.figma.com/file/HXsFdIj7BvmhAl9Gtb695c/Artisan-platform?type=design&node-id=0%3A1&t=4GTfBKxLL0BwBwPm-1">Click here</a></li><br><li class="i6"><a style="color:orange">MVP : <a href=": https://youtu.be/dy9q6Oa0V-4">https://youtu.be/dy9q6Oa0V-4</a></a> </li></div><img class="entrep1" src="../../public/artisan.png"></div>
    </div>
    <div class="Projet3">
        <div style="display:flex;margin-top:0.2rem;margin-bottom:0.2rem;"> <img class="entrep" src="../../public/abde.png"><div class='gestion'><li class="i">My Portfolio</li><br><li class="i1"><a style="color:orange">Technologies :</a> VueJs</li><br><li class="i2"><a style="color:orange">Github Link : </a> <a href="">https://github.com/Abdessamadbda/PFE-app</a></li></div></div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
   
  }
};
</script>

<style scoped>
.Projects {
  text-align: center;
  padding: 20px;
}
.gestion{
margin-top:1rem;
margin-left:5rem;
}
.gestion1{
margin-left:-3rem;
}
.Projet1{
border:2px solid grey;
margin-left:6rem;
border-radius:1rem;
width:70rem;
margin-top:4rem;
box-shadow: 10px 5px 5px orange;
}
.Projet1:hover{
background-color:rgb(232,232,232);
}
.Projet2:hover{
background-color:rgb(232,232,232);
}
.Projet3:hover{
background-color:rgb(232,232,232);
}
.Projet2{
border:2px solid grey;
margin-left:6rem;
border-radius:1rem;
width:70rem;
margin-top:3rem;
box-shadow: 10px 5px 5px orange;

}
.Projet3{
border:2px solid grey;
margin-left:6rem;
border-radius:1rem;
margin-top:3rem;
width:70rem;
box-shadow: 10px 5px 5px orange;
}
.entrep{
height:20rem;
width:20rem;
border-radius:2rem;
margin-left:6rem;
margin-top:1rem;
margin-bottom:1rem;

border:solid 2px red;
box-shadow: inset 5em 1em gold;
}
.entrep1{
height:20rem;
width:20rem;
border-radius:2rem;
margin-left:13rem;
margin-top:1rem;
margin-bottom:1rem;

border:solid 2px red;
box-shadow: inset 5em 1em gold;
}
.i{
margin-top:7rem;
margin-left:1rem;
font-family:arial ;
font-weight: bold;
}
.i1{
margin-left:1rem;

}
.i2{
margin-left:12rem;
}
.i3{
margin-top:8rem;
margin-left:3rem;
font-family:arial ;
font-weight: bold;

}
.i4{
margin-left:12.5rem;
}
.i5{
margin-left:3rem;
}
.i6{
margin-left:8.5rem;
}
</style>
