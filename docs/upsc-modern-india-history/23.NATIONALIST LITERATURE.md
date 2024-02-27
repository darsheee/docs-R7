---
title: 

head:
  - - meta
    - name: description
      content: 
  - - meta
    - name: keywords
      content:    
---


<div  font-serif     text-base	   font-medium hyphens-none leading-normal     tracking-wider subpixel-antialiased>

# FREEDOM MOVEMENT AND NATIONALIST LITERATURE

Objectives 1 23.1 Introduction
23.2 Literature in the 19th Century
23.2.1 Bengali
23.2.2 Gujarati I 23.2.3 Hindi
I 23.3 Literature in the 20th Century

</div>

<div class="gallery">
  <img src="https://picsum.photos/id/104/400/400" alt="a dream catcher">
  <img src="https://picsum.photos/id/1082/400/400" alt="a piano">
  <img src="https://picsum.photos/id/158/400/400" alt="a live concert">
  <img src="https://picsum.photos/id/234/400/400" alt="Paris">
</div>

<style scoped>
.gallery  {
  --s: 280px; /* control the size */
  
  display: grid;
  width: var(--s);
  aspect-ratio: 1;
  overflow: hidden;
  padding: calc(var(--s)/20);
  border-radius: 50%;
  position: relative;
}
.gallery > img {
  grid-area: 1/1;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
  transform-origin: 50% 120.7%;
}
.gallery > img {
  animation: m 8s infinite cubic-bezier(.5,-0.2,.5,1.2);
}
.gallery > img:nth-child(2) {animation-delay: -2s}
.gallery > img:nth-child(3) {animation-delay: -4s}
.gallery > img:nth-child(4) {animation-delay: -6s}

@keyframes m {
  0%,3%    {transform: rotate(0)}
  22%,27%  {transform: rotate(-90deg)}
  47%,52%  {transform: rotate(-180deg)}
  72%,77%  {transform: rotate(-270deg)}
  98%,100% {transform: rotate(-360deg)}
}


body {
  margin: 0;
  min-height: 100vh;
  display: grid;
  place-content: center;
  background: #C2CBCE;
}
</style>
