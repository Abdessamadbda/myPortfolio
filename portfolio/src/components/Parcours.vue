<template>
<div id="Parcours">
  <div class="about">
    <h2 class="education">School Career</h2>
    <br>
    <ul >
    <li><i class='font'>Baccalauréat sciences Mathématiques</i><br><br>    <div class='loc'><img class="location" src="../../public/location.png"><p class="teima">Lycée Hassan II,  Ouled Teima </p></div>
 </li>
 <br>
 <li><i class='font'>Classes préparatoires aux grandes écoles CPGE maths physique MP</i><br><br>    <div class='loc'><img class="location" src="../../public/location.png"><p class="teima">Centre Réda Slaoui, Agadir</p></div>
 </li>
 <br>
 <li><i class='font'>Etudiant en Advanced Software Engineering for Digital Services</i><br><br>    <div class='loc'><img class="location" src="../../public/location.png"><p class="teima">Institut national des postes et télécommunications, Rabat </p></div>
 </li>
    </ul>

  </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      aboutText: 'I am a frontend developer with a passion for creating engaging and user-friendly web experiences.'
    };
  }
};
</script>

<style scoped>
.about {
margin-top:5rem;
  padding: 20px;
  margin-left:3rem;
}
.education{
   margin-left:6rem;
   font-size:2rem;
}
.location{
height:1rem;
   width:1rem;
   margin-left:3rem;
}
.teima{
margin-top:-0.09rem;
margin-Left:1rem;
}
.font{
font-size:1.5rem;
}
.loc{
display:flex;
}
</style>
