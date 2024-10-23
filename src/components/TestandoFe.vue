<template>
    <div>
 
         <!-- Condição de classe dinâmica -->
         <h1 :class="{ 'title': true, 'title-home': isHome }">
             Curso vue 3
         </h1>
 
         <!-- Classe estática -->
         <p :class="pClass">
             Falando sobre investimento e tecnologia
         </p>

         <p :style="{ color: 'blue', backgroundColor: 'black' }">
                Testando style no vue.js
        </p>

        

    
         <!-- Loop v-for -->
         <div 
             v-for="(obj, index) in todos"
             :key="obj.id"
             class="todos-item"
         >
             {{ index }} - {{ obj.title }}
         </div>
 
     </div>
 </template>
 
 <script>
 export default {
    name: 'App',
    data() {
         return {
             isHome: true,
             classVar: 'title',
             pClass: ['text','text-home' ],

             // Definindo o array todos
             todos: [
                 { id: 1, title: 'Tarefa 1' },
                 { id: 2, title: 'Tarefa 2' },
                 { id: 3, title: 'Tarefa 3' }
             ]
         };
     }
 }
 </script>
 
 <style>
 .title-home {
     color: #292826b9 !important;
     font-size: 50px;
 }
 .title {
     color: rgb(27, 22, 23);
     font-size: 40px;
 }
 .text {
     color: yellow ;
 }
 .text-home {
    color: #94949294;
 }
 .todos-item {
     background: #000;
     margin: 0 0 5px 0;
     padding: 3px 6px;
     color: #55c571;
 }
 #app {
     font-family: Avenir, Arial, Helvetica, sans-serif;
     -webkit-font-smoothing: antialiased;
     -moz-osx-font-smoothing: grayscale;
     color: #46453f94;
     margin: 60px;
 }
 </style>
 