const nots = document.querySelectorAll('.notification');

const markAll = document.querySelector('.mark-all');

const notsNum = document.querySelector('.nots-num');
  
let tempNum = 0;

for (i = 0; i < nots.length; i++) {
  let notification = nots[i];

  notification.addEventListener('click', () => {
    if (notification.classList.contains('unread')) {
      notification.classList.remove('unread');
      notification.classList.add('read');
      tempNum--;
    }
    notsNum.textContent = tempNum;
  })

  markAll.addEventListener('click', () => {
    if (notification.classList.contains('unread')) {
      notification.classList.remove('unread');
      notification.classList.add('read');
      tempNum = 0;
    }
    notsNum.textContent = tempNum;
  })

  if (notification.classList.contains('unread')) {
    tempNum++;
  }

  notsNum.textContent = tempNum;
}






