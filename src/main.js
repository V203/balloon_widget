

let mainContainer = document.querySelector(".mainContainer");


const url = "https://v203.github.io/balloon-api/balloons.json";


function getBalloons() {

    axios.get(url).then(el => displayBalloons(el.data)).catch(error => {
        console.log(error)
    })
}

let renderSVGs = (props)=>` <svg
class='balloon-float'
width="41mm"
height="40mm"
viewBox="0 0 210 297"
version="1.1"
id="svg5"
inkscape:export-filename="balloon.svg"
inkscape:export-xdpi="96"
inkscape:export-ydpi="96"
inkscape:version="1.2.2 (732a01da63, 2022-12-09, custom)"
sodipodi:docname="balloon"
xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
xmlns:xlink="http://www.w3.org/1999/xlink"
xmlns="http://www.w3.org/2000/svg"
xmlns:svg="http://www.w3.org/2000/svg">
<sodipodi:namedview
  id="namedview7"
  pagecolor="#ffffff"
  bordercolor="#000000"
  borderopacity="0.25"
  inkscape:showpageshadow="2"
  inkscape:pageopacity="0.0"
  inkscape:pagecheckerboard="0"
  inkscape:deskcolor="#d1d1d1"
  inkscape:document-units="mm"
  showgrid="false"
  inkscape:zoom="0.4792789"
  inkscape:cx="538.3087"
  inkscape:cy="658.2806"
  inkscape:window-width="1304"
  inkscape:window-height="704"
  inkscape:window-x="62"
  inkscape:window-y="27"
  inkscape:window-maximized="1"
  inkscape:current-layer="layer1" />
<defs
  id="defs2">
 <linearGradient
    inkscape:collect="always"
    id="linearGradient18953">
   <stop
      style="stop-color:#000000;stop-opacity:1;"
      offset="0"
      id="stop18949" />
   <stop
      style="stop-color:#000000;stop-opacity:0;"
      offset="1"
      id="stop18951" />
 </linearGradient>
 <linearGradient
    inkscape:collect="always"
    id="linearGradient16709">
   <stop
      style="stop-color:#000000;stop-opacity:1;"
      offset="0"
      id="stop16705" />
   <stop
      style="stop-color:#000000;stop-opacity:0;"
      offset="1"
      id="stop16707" />
 </linearGradient>
 <linearGradient
    inkscape:collect="always"
    xlink:href="#linearGradient16709"
    id="linearGradient16711"
    x1="1.9747683"
    y1="437.30725"
    x2="-53.632765"
    y2="439.26694"
    gradientUnits="userSpaceOnUse"
    gradientTransform="matrix(0.66423201,0,0,0.87738189,186.46348,-264.06613)" />
 <radialGradient
    inkscape:collect="always"
    xlink:href="#linearGradient18953"
    id="radialGradient18957"
    cx="-342.53363"
    cy="366.18954"
    fx="-342.53363"
    fy="366.18954"
    r="14.861053"
    gradientTransform="matrix(0.64817231,0,0,0.5328851,320.9043,-103.09479)"
    gradientUnits="userSpaceOnUse" />
</defs>
<g class='balloon-float'
  inkscape:label="Layer 1"
  inkscape:groupmode="layer"
  id="layer1">
 <path
    id="path13643"
    style="fill:${props.basecolor};fill-opacity:0.953601;stroke-width:0.245518"
    d="m 153.42863,120.82382 c 0,30.31824 -19.57202,54.89603 -43.71533,54.89603 -24.143307,0 -43.715324,-24.57779 -43.715324,-54.89603 0,-30.318235 19.572017,-54.896025 43.715324,-54.896025 24.14331,0 43.71533,24.57779 43.71533,54.896025 z"
    sodipodi:nodetypes="sssss" />
 <path
    id="path15779"
    style="fill:#bd0000;fill-opacity:0.953601;stroke-width:0.229472"
    d="m 110.74808,172.25932 -5.70249,9.31209 4.84001,-0.15348 0.25167,-0.006 4.8643,-0.10594 z" />
 <g
    id="path15797"
    transform="matrix(0.76107867,0,0,1.9766502,157.76194,-763.01962)">
   <path
      style="color:#000000;fill:#000000;-inkscape-stroke:none"
      d="m -63.272513,477.75994 -1.627643,0.0433 c 0.760913,4.37711 0.298169,8.87092 0.820169,13.09789 0.695888,5.63505 -0.88373,11.6583 -2.79128,19.72529 l 3.889849,-5.87317 c 2.079216,-8.79297 0.570147,-8.4003 0.689289,-14.57994 0.09006,-4.67146 -0.262486,-8.28368 -0.980384,-12.41334 z"
      id="path16522"
      sodipodi:nodetypes="ccsccsc" />
 </g>
 <ellipse
    style="fill:${props.subsurface};fill-opacity:0.953601;stroke:url(#linearGradient16711);stroke-width:4.57276;stroke-dasharray:none;stroke-opacity:1"
    id="path16680"
    
    cx="108.13753"
    cy="121.33881"
    rx="40.711967"
    ry="51.36689" />
 <ellipse
    style="fill:${"white"};fill-opacity:0.641429;stroke:url(#radialGradient18957);stroke-width:0;stroke-dasharray:none;stroke-opacity:1"
    id="path16769"
    cx="98.883476"
    cy="92.042183"
    rx="7.6912432"
    ry="6.382906" />
</g>
</svg>
`

function displayBalloons(balloons = new Array()) {
    balloons.map(el => {
        const grid_item = document.createElement("div");
        const btn = document.createElement("button");
        const grid_header = document.createElement("div");
        const grid_body = document.createElement("div");
        const grid_footer = document.createElement("div");
        
        let modalView = document.querySelector(".modalView");
        let closeButton = document.querySelector(".closeButton");
        const modalHead = document.querySelector(".modalHead")
        const modalDescription = document.querySelector(".modalDescription");
        const modalBody = document.querySelector(".modalBody");

        closeButton.addEventListener("click", ()=> {
            modalView.style.display = "none"
        })

        
        
        grid_header.innerHTML = `<h1> ${el.color.toUpperCase()} BALLOON<h1>`
        grid_body.innerHTML= renderSVGs(el);
        btn.className = "btn-primary"
        btn.innerHTML = "View Color"


        

        grid_footer.appendChild( btn)
        
        grid_header.className = "grid-footer"
        grid_item.appendChild(grid_header)
        grid_item.appendChild(grid_body)
        grid_item.appendChild( grid_footer)
        
        
        grid_item.className = "grid-item";
        grid_body.className = "grid-body"
        grid_footer.className = "grid-footer"
        grid_header.innerHTML = `<h4> ${el.color.toUpperCase()} BALLOON<h4>`
        
        btn.addEventListener("click",()=> {
            modalView.style.display = 'flex';
            modalHead.innerHTML = `<h4> ${el.color} balloon </h4>`;
            modalBody.innerHTML = renderSVGs(el)
            modalDescription.innerHTML = `${el.description}`
            
        })

        mainContainer.appendChild(grid_item)

    })
    
}




window.onload = getBalloons
