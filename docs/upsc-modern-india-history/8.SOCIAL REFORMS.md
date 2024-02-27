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

Introduction
8.2 Why Reform?
8.3 Reform Movements
8.4 Scope of Reformers
8.5 Method of ~eform
8.5.1 Reform from Within
8.5.2 Reform Through Legislation
8.5.3 Reform Through Symbol of Change
8.5.4 Reform Through Social Work
8.6 Ideas
8.6.1 Rationalism
8.6.2 Universalism
8.7 Significance
8.8 Weakness and Limitations

</div>


<div class="gallery">
  <img src="https://picsum.photos/id/433/600/400" alt="A Bear">
  <img src="https://picsum.photos/id/582/600/400" alt="A wolf">
  <img src="https://picsum.photos/id/1074/600/400" alt="A lioness">
  <img src="https://picsum.photos/id/659/600/400" alt="A kind wolf">
  <img src="https://picsum.photos/id/593/600/400" alt="A Tiger">
</div>

<div class="gallery slanted">
  <img src="https://picsum.photos/id/433/600/400" alt="A Bear">
  <img src="https://picsum.photos/id/582/600/400" alt="A wolf">
  <img src="https://picsum.photos/id/1074/600/400" alt="A lioness">
  <img src="https://picsum.photos/id/659/600/400" alt="A kind wolf">
  <img src="https://picsum.photos/id/593/600/400" alt="A Tiger">
</div>

<div class="gallery zig-zag">
  <img src="https://picsum.photos/id/433/600/400" alt="A Bear">
  <img src="https://picsum.photos/id/582/600/400" alt="A wolf">
  <img src="https://picsum.photos/id/1074/600/400" alt="A lioness">
  <img src="https://picsum.photos/id/659/600/400" alt="A kind wolf">
  <img src="https://picsum.photos/id/593/600/400" alt="A Tiger">
</div>

<div class="gallery rounded">
  <img src="https://picsum.photos/id/433/600/400" alt="A Bear">
  <img src="https://picsum.photos/id/582/600/400" alt="A wolf">
  <img src="https://picsum.photos/id/1074/600/400" alt="A lioness">
  <img src="https://picsum.photos/id/659/600/400" alt="A kind wolf">
  <img src="https://picsum.photos/id/593/600/400" alt="A Tiger">
</div>

<style scoped>
.gallery {
  --s: 30px;
  --g: 8px;
  
  display: flex;
  height: 300px;
  margin: 20px 0;
  gap: var(--g);
}
.gallery > img {
  flex: 1;
  min-width: 0;
  -webkit-mask: var(--mask);
          mask: var(--mask);
  object-fit: cover;
  cursor: pointer;
  transition: .5s;
}
.gallery > img:first-child {
  margin-left: 0;
}
.gallery > img:last-child {
  margin-right: 0;
}
.gallery > img:hover {
  flex: 1.8
}
:is(.slanted,.zig-zag,.rounded) > img {
  margin: 0 calc(var(--s)/-2);
}


/* slanted gallery */
.slanted > img {
  clip-path: polygon(var(--s) 0,100% 0,calc(100% - var(--s)) 100%,0 100%);
}
.slanted > img:first-child {
  clip-path: polygon(0 0,100% 0,calc(100% - var(--s)) 100%,0 100%);
}
.slanted > img:last-child {
  clip-path: polygon(var(--s) 0,100% 0,100% 100%,0 100%);
}

/* zig-zag gallery */
.zig-zag > img {
  --mask: 
    conic-gradient(from -135deg at right,#0000,#000 1deg 89deg,#0000 90deg) 
      100% calc(50% + var(--_p,0%))/51% calc(2*var(--s)) repeat-y,
    conic-gradient(from   45deg at left ,#0000,#000 1deg 89deg,#0000 90deg) 
        0% calc(50% + var(--_p,0%))/51% calc(2*var(--s)) repeat-y;
}
.zig-zag > img:nth-child(odd) {
  --_p: var(--s);
}
.zig-zag > img:first-child {
  --mask: 
    conic-gradient(from -135deg at right,#0000,#000 1deg 89deg,#0000 90deg) 
      0 calc(50% + var(--_p,0%))/100% calc(2*var(--s));
}
.zig-zag > img:last-child {
  --mask: 
    conic-gradient(from   45deg at left ,#0000,#000 1deg 89deg,#0000 90deg) 
       0 calc(50% + var(--_p,0%)) /100% calc(2*var(--s));
}
/* rounded gallery */
.rounded {gap: 0}
.rounded > img {
  --mask: 
  linear-gradient(-90deg,#0000 calc(2*var(--s)),#000 0) var(--s),
  radial-gradient(var(--s),#000 98%,#0000) 50%/calc(2*var(--s)) calc(1.8*var(--s)) space repeat;
}
.rounded > img:nth-child(odd) {
  --mask: 
  radial-gradient(calc(var(--s) + var(--g)) at calc(var(--s) + var(--g)) 50%,#0000 98% ,#000 ) calc(-1*(var(--s) + var(--g)))/ 100% calc(1.8*var(--s));
}
.rounded > img:first-child {
  --mask: 
  radial-gradient(calc(var(--s) + var(--g)) at right,#0000 98%,#000) 50%/ 100% calc(1.8*var(--s));
}
.rounded > img:last-child:nth-child(odd) {
  --mask: 
  radial-gradient(calc(var(--s) + var(--g)) at left,#0000 98%,#000) 50%/ 100% calc(1.8*var(--s));
}
.rounded > img:last-child:nth-child(even) {
  --mask: 
  linear-gradient(to right,#0000 var(--s),#000 0),
  radial-gradient(var(--s),#000 98%,#0000) left/calc(2*var(--s)) calc(1.8*var(--s)) repeat-y;
}

body {
  margin: 0;
  background: #ECD078;
}    
</style>
