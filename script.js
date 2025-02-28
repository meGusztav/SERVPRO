document.addEventListener('DOMContentLoaded', () => {
  const linkItems = document.querySelectorAll('.link-item');

  linkItems.forEach(item => {
    item.addEventListener('mouseover', () => {
      item.style.transform = 'scale(1.05)';
      item.style.transition = 'transform 0.2s ease-in-out';
    });

    item.addEventListener('mouseout', () => {
      item.style.transform = 'scale(1)';
      item.style.transition = 'transform 0.2s ease-in-out';
    });

    item.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent default link behavior
      const href = item.getAttribute('href');
      setTimeout(() => {
        window.location.href = href; // Navigate after a short delay
      }, 200);
    });
  });

  // Add a subtle background color change on header hover
  const header = document.querySelector('header');
  header.addEventListener('mouseover', () => {
    header.style.backgroundColor = '#444';
    header.style.transition = 'background-color 0.3s ease';
  });
  header.addEventListener('mouseout', () => {
    header.style.backgroundColor = '#333';
    header.style.transition = 'background-color 0.3s ease';
  });

  // Randomize the order of the links on page load.
  const imageLinksContainer = document.querySelector('.image-links');
  const imageLinks = Array.from(imageLinksContainer.children);
  imageLinks.forEach(link => imageLinksContainer.appendChild(link));

});