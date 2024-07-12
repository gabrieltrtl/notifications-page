const notifications = document.querySelectorAll('.notifications__item');
const markAll = document.querySelector('.header__read');
const unreadCount = document.querySelector('.title__number');

function updateUnreadCount() {
  const unreadNotifications = document.querySelectorAll('.notifications__item[data-read="false"]').length;
  unreadCount.textContent = unreadNotifications;
}

function markAsRead(notification) {
  notification.setAttribute('data-read', 'true');
  notification.classList.add('read');
  notification.style.backgroundColor = '#FFFFFF';
}

notifications.forEach(notification => {
  notification.addEventListener('click', () => {
    markAsRead(notification);
    updateUnreadCount();
  })
})

markAll.addEventListener('click', () => {
  notifications.forEach(notification => {
    markAsRead(notification);
  })
  updateUnreadCount();
});

updateUnreadCount();
