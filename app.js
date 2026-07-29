const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

document.querySelectorAll(

    ".fade-up,.fade-left,.fade-right"

).forEach(el=>observer.observe(el));

const navbar=document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY>80){

        navbar.classList.add("navbar-scrolled");

    }else{

        navbar.classList.remove("navbar-scrolled");

    }

});

const counters=document.querySelectorAll("[data-count]");

const counterObserver=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(!entry.isIntersecting)return;

        const el=entry.target;

        const target=+el.dataset.count;

        let current=0;

        const speed=Math.max(1,target/70);

        const timer=setInterval(()=>{

            current+=speed;

            if(current>=target){

                current=target;

                clearInterval(timer);

            }

            el.textContent=Math.floor(current);

        },20);

        counterObserver.unobserve(el);

    });

});

counters.forEach(c=>counterObserver.observe(c));

document.querySelectorAll(".faq-item").forEach(item=>{

    item.addEventListener("click",()=>{

        item.classList.toggle("active");

    });

});

document.querySelectorAll(".faq-question").forEach(button => {

    button.addEventListener("click", () => {

        const item = button.parentElement;

        item.classList.toggle("active");

    });

});

const glow=document.createElement("div");

glow.className="cursor-glow";

document.body.appendChild(glow);

window.addEventListener("mousemove",e=>{

    glow.style.left=e.clientX+"px";

    glow.style.top=e.clientY+"px";

});

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".menu a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const top=section.offsetTop-120;

        if(window.scrollY>=top){

            current=section.id;

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});

document.querySelectorAll(".scooter-card").forEach(card=>{

    card.addEventListener("mousemove",e=>{

        const rect=card.getBoundingClientRect();

        const x=e.clientX-rect.left;

        const y=e.clientY-rect.top;

        card.style.setProperty("--x",x+"px");

        card.style.setProperty("--y",y+"px");

    });

});

window.addEventListener("load",()=>{

    setTimeout(()=>{

        document.getElementById("loader").style.opacity="0";

        setTimeout(()=>{

            document.getElementById("loader").remove();

        },600);

    },700);

});

