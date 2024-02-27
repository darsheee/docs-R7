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


#### india
Introduction
18.2 Background
18.3 The Issue of Khilafat
18.4 Towards Non-Cdoperation: Calcutta to Nagpur
18.5 Main Phases of the on-cooperation Movement
18.6 Peoples' Response to the Movement
18.7 Spread of the Movement, Local Variations
18.8 The Last Phase
18.9 Causes of Withdrawal
18.10 Impact

</div>


<div class="gallery">
  <img src="https://picsum.photos/id/1040/300/300" alt="a house on a mountain">
  <img src="https://picsum.photos/id/106/300/300" alt="sime pink flowers">
  <img src="https://picsum.photos/id/136/300/300" alt="big rocks with some trees">
  <img src="https://picsum.photos/id/110/300/300" alt="a cool landscape">
</div>

<!-- Rhombus image gallery -->
<style scoped>
.gallery {
  --s: 150px; /* control the size */
  display: grid;
  grid: auto-flow var(--s) / repeat(2,var(--s));
  gap: 1px;
  place-items: center;
  margin: calc(var(--s)/2);
  transform: rotate(45deg);
}
.gallery > img {
  width: 141%; /* sqrt(2)*100% */
  aspect-ratio: 1;
  object-fit: cover;
  filter: grayscale(50%);
  transform: scale(var(--_t,1)) rotate(-45deg);
  clip-path: polygon(50% 0,100% 50%,50% 100%,0 50%);
  cursor: pointer;
  transition: .2s linear;
}
.gallery > img:hover {
  filter: grayscale(0);
  --_t: 2;
}

</style>
