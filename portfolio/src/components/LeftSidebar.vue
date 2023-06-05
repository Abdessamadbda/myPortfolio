<template>
  <div class="left-sidebar">
    <ul>
      <li><a href="https://www.linkedin.com/in/abdessamad-elbadaoui-101874247/" target="_blank">
          <img class="linkedin" src="../../public/linkedin.png" alt="Logo">
        </a></li>
      <li><a class="" href="https://github.com/Abdessamadbda" target="_blank">
          <img class="github" src="../../public/github.png" alt="Logo">
        </a></li>
      <li><a href="https://www.linkedin.com/your-linkedin-profile" target="_blank">
          <img class="figma" src="../../public/figma.png" alt="Logo">
        </a></li>
    </ul>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped>
.left-sidebar {
  position: fixed;
  top: 10rem;
  left: 0;
  width: 2rem;
  background-color: #f1f1f1;
  padding: 10px;
  border-radius:0px 10px 10px
}

.left-sidebar ul {
  list-style-type: none;
  padding: 0;
}

.left-sidebar li {
  margin-bottom: 10px;
}
.linkedin{
height:2rem;
width:2rem;
margin-bottom:1.5rem;
}
.figma{
height:2rem;
width:2rem;
}
.github{
height:2rem;
width:2rem;
margin-bottom:1.5rem;

}

.left-sidebar a {
  color: #333;
  text-decoration: none;
}

.left-sidebar a:hover {
  color: #555;
}
</style>
