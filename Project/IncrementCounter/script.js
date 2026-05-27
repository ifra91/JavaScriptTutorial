// const counters = document.querySelectorAll(".counter");

// counters.forEach((counter)=>{
    
//     counter.innerHTML = 0;

//     const updateCounter = ()=>{
//         const targetCount = +counter.getAttribute('data-target');

//         console.log(targetCount);
//         console.log(typeof targetCount);

//         const startingCount = Number(counter.innerHTML);
//         const incr = targetCount/100;

//         if(startingCount < targetCount){
//             counter.innerHTML = `Math.round(${startingCount + incr})`;
//             setTimeout(updateCounter, 2000);
//         } else {
//             counter.innerHTML = targetCount;
//         }
//     }

//     console.log(counter);
//     updateCounter();
// })

function animateCounter(element, target) {
    let current= 0;
    //Calculate increment so they all finish on same time
    const increment = Math.ceil(target/50);
    const delay = 50;
    const intervalId = setInterval(()=>{
        current += increment;

        if(current >= target){
            current = target;
            clearInterval(intervalId);
        }
        element.textContent = current.toLocaleString();
    }, delay);
}

//Initialize all counters
document.querySelectorAll('.counter').forEach(el=>{
    const target = parseInt(el.getAttribute('data-target'));
    animateCounter(el,target);
});



