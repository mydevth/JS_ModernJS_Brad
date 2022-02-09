// 30 Mouse Events

const clearBtn = document.querySelector('.clear-tasks');
// const clearBtn = document.querySelector('#kob');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// //Click
// clearBtn.addEventListener('click', runEvent)
// //Doublick
// clearBtn.addEventListener('dblclick', runEvent);
//Mousedown
// clearBtn.addEventListener('mousedown', runEvent);
//Mouseup
// clearBtn.addEventListener('mouseup', runEvent);
//mouseenter
// clearBtn.addEventListener('mouseenter', runEvent);
// //mouseleave
// clearBtn.addEventListener('mouseleave', runEvent);
// //mouseover
// clearBtn.addEventListener('mouseover', runEvent);
// //mouseout
// clearBtn.addEventListener('mouseout', runEvent);
// //mousemove
card.addEventListener('mousemove', runEvent);

//event handler
function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);

  heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

  document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},40)`
}