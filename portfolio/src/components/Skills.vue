<template>
  <div class="home">
  <div class="im1">
  <div class="imgs">
    <h2 class="Frontend">Frontend</h2>
    
    <div class="im1"><div class='div1'> <img style="display: block; margin: auto;margin-top:1rem;margin-bottom:6px;" :class="{'img-default-size': true,'img-enlarged-size': imageEnlarged,}" @mouseover="enlargeImage" @mouseout="shrinkImage" src="../../public/html5.png"></div>
        <div class='div2'> <img   style="display: block; margin: auto;margin-top:1rem" :class="{'img-default-size': true,'img-enlarged-size': imageEnlarged1,}" @mouseover="enlargeImage1" @mouseout="shrinkImage1" src="../../public/css.png"></div></div>
            <div class="im1"><div class='div3'> <img style="display: block; margin: auto;margin-bottom:6px;margin-top:8px;" :class="{'img-default-size': true,'img-enlarged-size': imageEnlarged2,}" @mouseover="enlargeImage2" @mouseout="shrinkImage2" src="../../public/javascript.png"></div>
            <div class='div4'> <img style="display: block; margin: auto;margin-bottom:2px;margin-top:8px;" :class="{'img-default-size': true,'img-enlarged-size': imageEnlarged3,}" @mouseover="enlargeImage3" @mouseout="shrinkImage3" src="../../public/react.png"></div></div>
            <div class='div5'> <img style="display: block; margin: auto;margin-top:1rem.margin-bottom:2px;" :class="{'img-default-size': true,'img-enlarged-size': imageEnlarged4,}" @mouseover="enlargeImage4" @mouseout="shrinkImage4" src="../../public/vue.png"></div>

    </div>
    
    <div class="imgs1">
    <h2 class="Backend">Backend</h2>
    <div class="im2"><div class='div6'> <img style="display: block; margin: auto;margin-top:1rem;margin-bottom:2px;" :class="{'img-default-size': true,'img-enlarged-size': imageEnlarged5,}" @mouseover="enlargeImage5" @mouseout="shrinkImage5" src="../../public/nodejs.png"></div>
        <div class='div7'> <img style="display: block; margin: auto;margin-top:1rem;margin-bottom:9px;" :class="{'img-default-size': true,'img-enlarged-size': imageEnlarged6,}" @mouseover="enlargeImage6" @mouseout="shrinkImage6" src="../../public/php.png"></div></div>
            

    </div>
    <div class="imgs1">
    <h2 class="Backend">Other</h2>
    <div class="im2"><div class='div8'> <img style="display: block; margin: auto;margin-top:1rem" :class="{'img-default-size': true,'img-enlarged-size': imageEnlarged7,}" @mouseover="enlargeImage7" @mouseout="shrinkImage7" src="../../public/python.png"></div>
        <div class='div9'> <img style="display: block; margin: auto;margin-top:1rem" :class="{'img-default-size': true,'img-enlarged-size': imageEnlarged8,}" @mouseover="enlargeImage8" @mouseout="shrinkImage8" src="../../public/java.png"></div></div>
            

    </div>
    </div>
    <div class="autre">
        <h1 class="st">Software tests</h1>
        <li class="test">Selenium</li>
        <br>
        <li class="test">JUnit,Mockito</li>
    </div>
    <div class="autre">
        <h1 class="st">I also have basic knowledge in:</h1>
        <div class="im1"> <img class="entrep" src="../../public/ux.jpeg"><div class='gestion'><li class="i">UX/UI design</li><br><li class="i1">Agile developement</li><br><li class="i2">Unified Modeling Language UML</li></div></div>
    </div>
    <div class="autre">
        <div class="im1"> <img class="entrep" src="../../public/entrep.jpg"><div class='gestion'><li class="i3">Business Management</li><br><li class="i4">Project management</li><br><li class="i5">Financial and accounting management</li></div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      imageEnlarged: false,
      imageEnlarged1: false,
      imageEnlarged2: false,
      imageEnlarged3: false,
      imageEnlarged4: false,
      imageEnlarged5: false,
      imageEnlarged6: false,
      imageEnlarged7: false,
      imageEnlarged8: false,
    };
  },
  methods: {
    enlargeImage() {
      console.log("enlarged");
      this.imageEnlarged = true;
    },
    shrinkImage() {
      this.imageEnlarged = false;
    },
    enlargeImage1() {
      console.log("enlarged");
      this.imageEnlarged1 = true;
    },
    shrinkImage1() {
      this.imageEnlarged1 = false;
    },
    enlargeImage2() {
      console.log("enlarged");
      this.imageEnlarged2 = true;
    },
    shrinkImage2() {
      this.imageEnlarged2 = false;
    },
    enlargeImage3() {
      console.log("enlarged");
      this.imageEnlarged3 = true;
    },
    shrinkImage3() {
      this.imageEnlarged3= false;
    },
    enlargeImage4() {
      console.log("enlarged");
      this.imageEnlarged4 = true;
    },
    shrinkImage4() {
      this.imageEnlarged4 = false;
    },
    enlargeImage5() {
      console.log("enlarged");
      this.imageEnlarged5 = true;
    },
    shrinkImage5() {
      this.imageEnlarged5 = false;
    },
    enlargeImage6() {
      console.log("enlarged");
      this.imageEnlarged6 = true;
    },
    shrinkImage6() {
      this.imageEnlarged6 = false;
    },
    enlargeImage7() {
      console.log("enlarged");
      this.imageEnlarged7 = true;
    },
    shrinkImage7() {
      this.imageEnlarged7 = false;
    },
    enlargeImage8() {
      console.log("enlarged");
      this.imageEnlarged8 = true;
    },
    shrinkImage8() {
      this.imageEnlarged8 = false;
    },
  },
};
</script>

<style scoped>
.i{
margin-left:3rem;
}
.i1{
margin-left:6.5rem;
}
.i2{
margin-left:13.5rem;
}
.i3{
margin-left:3rem;
}
.i4{
margin-left:2rem;
}
.i5{
margin-left:12rem;
}
h1{
color:red;
}
.st{
font-family: "Merienda", Helvetica, Arial;
     font-size: 20px;
}
.autre{
text-align:center;
margin-left:6rem;
margin-top:4rem;
}
.div1{
margin-top:2rem;
border:1px solid grey;
margin-left:5rem;
border-radius:9px;
box-shadow: 10px 5px 5px grey;
}
.div2{
margin-top:2rem;
border:1px solid grey;
margin-left:5rem;
border-radius:9px;
box-shadow: 10px 5px 5px grey;
}
.div3{
border:1px solid grey;
margin-left:5rem;
margin-top:20px;
border-radius:9px;
box-shadow: 10px 5px 5px grey;
}
.div4{
border:1px solid grey;
margin-left:5rem;
margin-top:20px;
border-radius:9px;
box-shadow: 10px 5px 5px grey;

}
.div5{
border:1px solid grey;
margin-left:5rem;
margin-top:20px;
border-radius:9px;
box-shadow: 10px 5px 5px grey;


}
.div6{
border:1px solid grey;
margin-left:5rem;
border-radius:9px;
box-shadow: 10px 5px 5px grey;


}
.div7{
border:1px solid grey;
margin-left:5rem;
margin-top:20px;
border-radius:9px;
box-shadow: 10px 5px 5px grey;


}
.div8{
border:1px solid grey;
margin-left:5rem;
border-radius:9px;
box-shadow: 10px 5px 5px grey;
width:6rem;


}
.div9{
border:1px solid grey;
margin-left:5rem;
margin-top:20px;
border-radius:9px;
box-shadow: 10px 5px 5px grey;
width:6rem;

}

.gestion{
margin-top:7rem;
margin-left:3rem;
}
.entrep{
height:20rem;
width:20rem;
border-radius:2rem;
margin-left:5rem;
margin-top:3rem;
border:solid 2px red;
box-shadow: inset 5em 1em gold;
}
.Frontend {
  margin-left:10rem;
  margin-top:6rem;
font-family: "Merienda", Helvetica, Arial;
     font-size: 25px;
}
.test{
font-family: "Merienda", Helvetica, Arial;
     font-size: 20px;
}
.Backend{
margin-left:20rem;
margin-top:6rem;
font-family: "Merienda", Helvetica, Arial;
     font-size: 25px;
}
.img-default-size {
margin-left:5rem;
margin-top:2rem;
  height:5rem;
width:5rem;
  transition: all 0.2s;
}

.img-enlarged-size {
  height: 6rem;
  width:6rem;
  transition: all 0.2s;
}

.img1{
height:5rem;
width:5rem;
margin-left:5rem;
margin-top:2rem;
}
.img2{
height:5rem;
width:5rem;
margin-left:5rem;
margin-top: 3rem;
}
.img3{
height:5rem;
width:5rem;
margin-left:15rem;

}
.im1{
display:flex;
font-family: "Merienda", Helvetica, Arial;
     font-size: 20px;
     
}
.im2{
margin-top:3rem;
margin-left:15rem;
}

</style>