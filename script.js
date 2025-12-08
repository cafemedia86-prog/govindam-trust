// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.getElementById('navToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  navToggle?.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  // Simple contact form handler (client-side only)
  const form = document.getElementById('contactForm');
  const msg = document.getElementById('formMsg');
  form?.addEventListener('submit', function (e) {
    e.preventDefault();
    // Basic validation
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    if (!name || !email || !message) {
      msg.classList.remove('hidden');
      msg.classList.add('text-red-500');
      msg.textContent = 'Please fill in required fields.';
      return;
    }
    // For now, just show success (no backend)
    msg.classList.remove('hidden');
    msg.classList.remove('text-red-500');
    msg.classList.add('text-green-600');
    msg.textContent = 'Thanks! Your message was sent (client-side demo).';
    form.reset();
  });
});
