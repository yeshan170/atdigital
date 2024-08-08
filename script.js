document.addEventListener('DOMContentLoaded', () => {
    const toggleButtons = document.querySelectorAll('.toggle-button');
  
    toggleButtons.forEach(button => {
      button.addEventListener('click', () => {
        const expanded = button.getAttribute('aria-expanded') === 'true';
        const faqItem = button.closest('.faq-item');
        const faqAnswer = faqItem.querySelector('.faq-answer');
        const faqQuestion = faqItem.querySelector('.faq-question');
  
        // Toggle the visibility of the answer
        faqAnswer.style.display = expanded ? 'none' : 'block';
  
        // Update the aria-expanded attribute
        button.setAttribute('aria-expanded', !expanded);
        
        // Toggle the icon between '+' and '−'
        button.querySelector('.icon').textContent = expanded ? '+' : '−';
  
        // Toggle the active class on the FAQ question
        faqQuestion.classList.toggle('active', !expanded);
      });
    });
  });

  function createLogo() {
    const logoDiv = document.createElement('div');
    logoDiv.className = 'logo';
    logoDiv.innerHTML = `
      <svg viewBox="0 0 47 37" xmlns="http://www.w3.org/2000/svg">
        <path d="M24.3404 0.888885H21.2242L0 37.0006H20.195L22.9875 31.3L25.9246 37.0006H46.7382L24.3404 0.888885ZM22.8257 5.46211L33.0937 22.009H13.101L22.8257 5.46211ZM17.8882 33.3004H6.4638L10.9272 25.7034H21.6115L17.8882 33.3004ZM24.2826 25.7034H35.389L40.1068 33.3004H28.1794L24.2826 25.7034Z" />
      </svg>
  
      <svg viewBox="0 0 27 25" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.02537 24.5149H0.365417L10.7723 0.0068512H15.6577L26.2842 24.5149H21.3988L18.6294 17.8257H10.46L12.0211 13.8884H16.9528L13.1022 4.68415L5.02537 24.5149Z" />
      </svg>
  
      <svg viewBox="0 0 19 25" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.7327 0.0068512V3.92098H11.7023V24.5149H7.16381V3.92098H0.133423V0.0068512H18.7327Z" />
      </svg>
  
      <svg viewBox="0 0 22 25" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.0124512 24.5149V0.0068512H9.60987C17.7041 0.0068512 21.7608 3.86123 21.7801 11.57C21.7801 20.1923 17.7233 24.5015 9.60987 24.4976L0.0124512 24.5149ZM9.60987 20.5719C14.6977 20.5719 17.2396 17.5771 17.2358 11.5873C17.2358 6.47643 14.6938 3.92098 9.60987 3.92098H4.55677V20.5719H9.60987Z" />
      </svg>
  
      <svg viewBox="0 0 6 25" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.1749 0.0068512V24.5149H0.636353V0.0068512H5.1749Z" />
      </svg>
  
      <svg viewBox="0 0 21 26" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.8565 24.3818C18.4974 25.3202 15.9705 25.763 13.4329 25.6826C4.78371 25.6826 0.459106 21.4274 0.459106 12.9169C0.459106 4.8651 4.85888 0.837269 13.6584 0.833415C16.1106 0.791324 18.5499 1.19689 20.8565 2.0302V6.1409C18.6896 5.21693 16.3552 4.75045 13.9995 4.77067C8.11391 4.77067 5.17109 7.48415 5.17109 12.9111C5.17109 18.7968 7.94816 21.7377 13.5023 21.7338C14.4526 21.7175 15.3969 21.5795 16.3122 21.3233V14.2004H20.8565V24.3818Z" />
      </svg>
  
      <svg viewBox="0 0 5 25" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.67917 0.0068512V24.5149H0.140625V0.0068512H4.67917Z" />
      </svg>
  
      <svg viewBox="0 0 19 25" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.8455 0.0068512V3.92098H11.8209V24.5149H7.27656V3.92098H0.228821V0.0068512H18.8455Z" />
      </svg>
  
      <svg viewBox="0 0 29 25" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.36625 24.5149H0.706299L11.1131 0.0068512H15.9986L26.6193 24.5149H21.7397L18.9183 17.8257H10.8241L12.3851 13.8884H17.3225L13.4662 4.68415L5.36625 24.5149Z" />
      </svg>
  
      <svg viewBox="0 0 15 25" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.15845 0.0068512V20.5719H14.8889V24.5149H0.614136V0.0068512H5.15845Z" />
      </svg>
    `;
    return logoDiv;
  }
  
  // Add the logo to the page
  document.getElementById('logo').appendChild(createLogo());
  
  