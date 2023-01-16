const box = document.getElementById("box");
const scrollPoint = document.getElementById("scroll-point")
scrollPoint.style.height='100vh'

const aboutLabel = document.getElementById('about-label')
const projectsLabel = document.getElementById('projects-label')
const skillsLabel = document.getElementById('skills-label')
const linksLabel = document.getElementById('links-label')


const content = document.getElementById("content")
const numContents = content.childElementCount
const c1 = document.getElementById('c1')
const repeatedContent = c1.cloneNode(true)
repeatedContent.id = 'mobileHide'
content.appendChild(repeatedContent)
window.onbeforeunload = () => {
    window.scrollTo(0, 0);
  }

const run = (box) => {
    let active = false;
    // start
    box.addEventListener("mousedown", e => {
        active = true;
    });
    // stop
    document.addEventListener("mouseup", (e) => {
        active = false;
    });
    // run
    box.addEventListener("mousemove", (e) => {
        // mouse position
        if (active) {
            let mX = e.clientX;
            let mY = e.clientY;
            // element data
            let boxData = box.getBoundingClientRect();
            let boxWidth = boxData.width;
            let boxHeight = boxData.height;
            let l = boxData.left;
            let t = boxData.top;

            // rotation
            let radians = 180 / Math.PI;
            let center = {
                x: l + (boxWidth / 2),
                y: t + (boxHeight / 2)
            };
            // arc points
            let x = mX - center.x;
            let y = mY - center.y;
            let angle = Math.floor(Math.atan2(y, x) * radians)+90;
            if (angle < 0) {
                angle+=360
            }
            box.style.transform = `rotate(${angle}deg)`;
            scrollPoint.style.height = `${angle/360*100*numProjects+100}vh`
            scrollPoint.scrollIntoView({ block: "end" })
        }

    });
}

const nav = (ref,angle) => {
    ref.addEventListener('click', (e)=>{
        box.style.transition = 'all 0.6s'
        box.style.transform = `rotate(${angle}deg)`;
        
        scrollPoint.style.height = `${angle/360*100*4+100}vh`
        scrollPoint.scrollIntoView({ behavior:"smooth", block: "end" })
        box.style.transition = 'all 0s'
        
    })
}


nav(aboutLabel,0)
nav(skillsLabel,90)
nav(projectsLabel,180)
nav(linksLabel,270)


run(box);


// Project carousel



const leftButton = document.getElementById('p-b-left')
const rightButton = document.getElementById('p-b-right')
const projects = Array.from(document.getElementsByClassName('project-swipe')[0].children)
const numProjects = projects.length
const projectOrder = ['back-left','center','back-right']

while (projectOrder.length < numProjects) {
    projectOrder.push('hidden')
}


const reorder = () => {
    projects.forEach((p,i)=>{
        p.classList.remove(...projectOrder)
        p.classList.add(projectOrder[i])
    })
}

const shiftRight = () => {
    projectOrder.unshift(projectOrder.pop())
    reorder()
}
const shiftLeft = () => {
    projectOrder.push(projectOrder.shift())
    reorder()
}

leftButton.addEventListener('click',shiftLeft)
rightButton.addEventListener('click',shiftRight)





// normal scroll bar

let scrollEnabled=false
let timeout = null

const normalScroll = document.getElementById('normal-scroll')
normalScroll.addEventListener('click', ()=>{
    document.body.style.overflow='auto'
    normalScroll.remove()
    scrollEnabled=true
})

// scroll bar indicators

onwheel = (event) => { 
    if (!scrollEnabled) {
        const indicator = document.getElementById('scroll-indicator')
        const normal = document.getElementById('normal-scroll')
        indicator.classList.add('show')
        normal.classList.add('highlight')
        clearTimeout(timeout)
        timeout = setTimeout(()=>{
            indicator.classList.remove('show')
            normal.classList.remove('highlight')

        },500)
    }
};  