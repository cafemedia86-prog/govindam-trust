// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.getElementById('navToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  navToggle?.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  // Contact form submission via Formspree
  const form = document.getElementById('contactForm');
  const msg = document.getElementById('formMsg');
  const submitBtn = document.getElementById('submitBtn');
  const btnText = document.getElementById('btnText');

  form?.addEventListener('submit', async function (e) {
    e.preventDefault();
    
    // UI state: Loading
    submitBtn.disabled = true;
    btnText.textContent = 'Sending...';
    msg.classList.add('hidden');

    const formData = new FormData(form);
    
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        msg.textContent = 'Thank you! Your message has been sent successfully.';
        msg.className = 'mt-3 text-sm text-green-600';
        form.reset();
      } else {
        const errorData = await response.json();
        msg.textContent = errorData.error || 'Oops! There was a problem submitting your form.';
        msg.className = 'mt-3 text-sm text-red-500';
      }
    } catch (error) {
      msg.textContent = 'Oops! There was a connection error. Please try again later.';
      msg.className = 'mt-3 text-sm text-red-500';
    } finally {
      msg.classList.remove('hidden');
      submitBtn.disabled = false;
      btnText.textContent = 'Send Message';
    }
  });
});
