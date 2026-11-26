*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:Poppins,sans-serif;
scroll-behavior:smooth;
}

body{
background:#0f172a;
color:white;
}

header{
height:100vh;
background:
linear-gradient(
135deg,
#2563eb,
#7c3aed,
#06b6d4
);
}

nav{
display:flex;
justify-content:space-between;
padding:20px 10%;
}

nav a{
color:white;
text-decoration:none;
margin-left:20px;
}

.hero{
height:80vh;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
text-align:center;
padding:20px;
}
.hero h1{
font-size:4rem;
max-width:900px;
animation:glow 2s infinite alternate;
}

.hero p{
margin-top:20px;
font-size:1.2rem;
}

.btn{
padding:12px 25px;
background:white;
color:black;
text-decoration:none;
margin:15px;
border-radius:30px;
font-weight:bold;
}

.btn2{
background:transparent;
border:2px solid white;
color:white;
}

section{
padding:100px 10%;
}

.about-container{
display:flex;
align-items:center;
gap:40px;
}

.about-container img{
width:250px;
border-radius:50%;
border:5px solid #38bdf8;
}

.skills-grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(150px,1fr));
gap:20px;
margin-top:30px;
}

.card{
padding:20px;
background:#1e293b;
border-radius:15px;
text-align:center;
transition:.3s;
}

.card:hover{
transform:translateY(-10px);
box-shadow:0 0 20px cyan;
}

.project-grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
gap:30px;
margin-top:40px;
}

.project{
background:#1e293b;
border-radius:15px;
overflow:hidden;
transition:.4s;
}

.project:hover{
transform:translateY(-10px);
}

.project img{
width:100%;
height:220px;
object-fit:cover;
}

.project h3,
.project p,
.project a{
padding:15px;
}

.project a{
display:inline-block;
color:#38bdf8;
text-decoration:none;
}

footer{
padding:30px;
text-align:center;
background:black;
}

@keyframes glow{

from{
text-shadow:0 0 10px cyan;
}

to{
text-shadow:0 0 30px #7c3aed;
}

}

.fade{
opacity:0;
transform:translateY(50px);
transition:1s;
}

.show{
opacity:1;
transform:translateY(0);
}