// Initialize AOS
AOS.init({
  duration: 1000,
  once: true,
  easing: 'ease-in-out',
});

// Active link on scroll (for index.html)
if (document.querySelector('header#hero')) {
  const sections = document.querySelectorAll("section, header");
  const navLinks = document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      if (pageYOffset >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
}

// ✅ Fetch random cat facts (for index.html)
if (document.querySelector('#facts')) {
  const factIds = ['fact1', 'fact2', 'fact3', 'fact4', 'fact5', 'fact6', 'fact7', 'fact8', 'fact9'];

  factIds.forEach(id => {
    fetch('https://catfact.ninja/fact')
      .then(res => res.json())
      .then(data => {
        document.getElementById(id).textContent = data.fact;
      })
      .catch(() => {
        document.getElementById(id).textContent = 'Could not load fact.';
      });
  });
}

// ✅ Fetch breeds for Breeds section (breeds.html)
fetch('https://api.thecatapi.com/v1/breeds')
  .then(res => res.json())
  .then(data => {
    // Breeds section
    if (document.querySelector(".breeds-grid")) {
      const grid = document.querySelector(".breeds-grid");
      grid.innerHTML = "";

      data.slice(0, 9).forEach(breed => {
        if (!breed.reference_image_id) return;

        const div = document.createElement("div");
        div.className = "breed-card";
        div.dataset.breed = JSON.stringify(breed);

        div.innerHTML = `
          <img src="https://cdn2.thecatapi.com/images/${breed.reference_image_id}.jpg" alt="${breed.name}" />
          <h3>${breed.name}</h3>
          <p><strong>Origin:</strong> ${breed.origin}</p>
          <p><strong>Life Span:</strong> ${breed.life_span} years</p>
          <div class="action-buttons">
            <a href="adoption.html" class="adopt-button">Adopt this cat</a>
            <button class="close-button">More</button>
          </div>
        `;

        div.addEventListener('click', () => {
          div.classList.toggle('expanded');
          const closeButton = div.querySelector('.close-button');
          if (div.classList.contains('expanded')) {
            const breed = JSON.parse(div.dataset.breed);
            div.innerHTML = `
              <img src="https://cdn2.thecatapi.com/images/${breed.reference_image_id}.jpg" alt="${breed.name}" />
              <h3>${breed.name}</h3>
              <p>${breed.description || 'No description available.'}</p>
              <p><strong>Origin:</strong> ${breed.origin || 'Unknown'}</p>
              <p><strong>Life Span:</strong> ${breed.life_span || 'Unknown'} years</p>
              <p><strong>Temperament:</strong> ${breed.temperament || 'Unknown'}</p>
              <div class="action-buttons">
                <a href="adoption.html" class="adopt-button">Adopt this cat</a>
                <button class="close-button">Close</button>
              </div>
            `;
            closeButton = div.querySelector('.close-button');
          } else {
            div.innerHTML = `
              <img src="https://cdn2.thecatapi.com/images/${breed.reference_image_id}.jpg" alt="${breed.name}" />
              <h3>${breed.name}</h3>
              <p><strong>Origin:</strong> ${breed.origin}</p>
              <p><strong>Life Span:</strong> ${breed.life_span} years</p>
              <div class="action-buttons">
                <a href="adoption.html" class="adopt-button">Adopt this cat</a>
                <button class="close-button">More</button>
              </div>
            `;
            closeButton = div.querySelector('.close-button');
          }
          closeButton.addEventListener('click', (e) => {
            e.stopPropagation();
            div.classList.toggle('expanded');
            if (div.classList.contains('expanded')) {
              const breed = JSON.parse(div.dataset.breed);
              div.innerHTML = `
                <img src="https://cdn2.thecatapi.com/images/${breed.reference_image_id}.jpg" alt="${breed.name}" />
                <h3>${breed.name}</h3>
                <p>${breed.description || 'No description available.'}</p>
                <p><strong>Origin:</strong> ${breed.origin || 'Unknown'}</p>
                <p><strong>Life Span:</strong> ${breed.life_span || 'Unknown'} years</p>
                <p><strong>Temperament:</strong> ${breed.temperament || 'Unknown'}</p>
                <div class="action-buttons">
                  <a href="adoption.html" class="adopt-button">Adopt this cat</a>
                  <button class="close-button">Close</button>
                </div>
              `;
            } else {
              const breed = JSON.parse(div.dataset.breed);
              div.innerHTML = `
                <img src="https://cdn2.thecatapi.com/images/${breed.reference_image_id}.jpg" alt="${breed.name}" />
                <h3>${breed.name}</h3>
                <p><strong>Origin:</strong> ${breed.origin}</p>
                <p><strong>Life Span:</strong> ${breed.life_span} years</p>
                <div class="action-buttons">
                  <a href="adoption.html" class="adopt-button">Adopt this cat</a>
                  <button class="close-button">More</button>
                </div>
              `;
            }
          });
        });

        grid.appendChild(div);
      });
    }

    // Sibling Breeds section
    if (document.querySelector(".sibling-breeds-grid")) {
      const siblingGrid = document.querySelector(".sibling-breeds-grid");
      siblingGrid.innerHTML = "";

      data.slice(9, 18).forEach(breed => {
        if (!breed.reference_image_id) return;

        const div = document.createElement("div");
        div.className = "breed-card";
        div.dataset.breed = JSON.stringify(breed);

        div.innerHTML = `
          <img src="https://cdn2.thecatapi.com/images/${breed.reference_image_id}.jpg" alt="${breed.name}" />
          <h3>${breed.name}</h3>
          <p><strong>Origin:</strong> ${breed.origin}</p>
          <p><strong>Life Span:</strong> ${breed.life_span} years</p>
          <div class="action-buttons">
            <a href="adoption.html" class="adopt-button">Adopt this cat</a>
            <button class="close-button">More</button>
          </div>
        `;

        div.addEventListener('click', () => {
          div.classList.toggle('expanded');
          const closeButton = div.querySelector('.close-button');
          if (div.classList.contains('expanded')) {
            const breed = JSON.parse(div.dataset.breed);
            div.innerHTML = `
              <img src="https://cdn2.thecatapi.com/images/${breed.reference_image_id}.jpg" alt="${breed.name}" />
              <h3>${breed.name}</h3>
              <p>${breed.description || 'No description available.'}</p>
              <p><strong>Origin:</strong> ${breed.origin || 'Unknown'}</p>
              <p><strong>Life Span:</strong> ${breed.life_span || 'Unknown'} years</p>
              <p><strong>Temperament:</strong> ${breed.temperament || 'Unknown'}</p>
              <div class="action-buttons">
                <a href="adoption.html" class="adopt-button">Adopt this cat</a>
                <button class="close-button">Close</button>
              </div>
            `;
            closeButton = div.querySelector('.close-button');
          } else {
            div.innerHTML = `
              <img src="https://cdn2.thecatapi.com/images/${breed.reference_image_id}.jpg" alt="${breed.name}" />
              <h3>${breed.name}</h3>
              <p><strong>Origin:</strong> ${breed.origin}</p>
              <p><strong>Life Span:</strong> ${breed.life_span} years</p>
              <div class="action-buttons">
                <a href="adoption.html" class="adopt-button">Adopt this cat</a>
                <button class="close-button">More</button>
              </div>
            `;
            closeButton = div.querySelector('.close-button');
          }
          closeButton.addEventListener('click', (e) => {
            e.stopPropagation();
            div.classList.toggle('expanded');
            if (div.classList.contains('expanded')) {
              const breed = JSON.parse(div.dataset.breed);
              div.innerHTML = `
                <img src="https://cdn2.thecatapi.com/images/${breed.reference_image_id}.jpg" alt="${breed.name}" />
                <h3>${breed.name}</h3>
                <p>${breed.description || 'No description available.'}</p>
                <p><strong>Origin:</strong> ${breed.origin || 'Unknown'}</p>
                <p><strong>Life Span:</strong> ${breed.life_span || 'Unknown'} years</p>
                <p><strong>Temperament:</strong> ${breed.temperament || 'Unknown'}</p>
                <div class="action-buttons">
                  <a href="adoption.html" class="adopt-button">Adopt this cat</a>
                  <button class="close-button">Close</button>
                </div>
              `;
            } else {
              const breed = JSON.parse(div.dataset.breed);
              div.innerHTML = `
                <img src="https://cdn2.thecatapi.com/images/${breed.reference_image_id}.jpg" alt="${breed.name}" />
                <h3>${breed.name}</h3>
                <p><strong>Origin:</strong> ${breed.origin}</p>
                <p><strong>Life Span:</strong> ${breed.life_span} years</p>
                <div class="action-buttons">
                  <a href="adoption.html" class="adopt-button">Adopt this cat</a>
                  <button class="close-button">More</button>
                </div>
              `;
            }
          });
        });

        siblingGrid.appendChild(div);
      });
    }

    // Adoption form dropdown
    if (document.getElementById('breed-select')) {
      const select = document.getElementById('breed-select');
      data.slice(0, 9).forEach(breed => {
        const option = document.createElement('option');
        option.value = breed.name;
        option.textContent = breed.name;
        select.appendChild(option);
      });
    }
  })
  .catch(() => {
    if (document.querySelector(".breeds-grid")) {
      document.querySelector(".breeds-grid").innerHTML = "<p>Could not load cat breeds. Please try again later.</p>";
    }
    if (document.querySelector(".sibling-breeds-grid")) {
      document.querySelector(".sibling-breeds-grid").innerHTML = "<p>Could not load sibling breeds. Please try again later.</p>";
    }
    if (document.getElementById('breed-select')) {
      document.getElementById('breed-select').innerHTML = '<option value="">Could not load breeds</option>';
    }
  });

// ✅ Adoption form submission
if (document.getElementById('adoption-form')) {
  document.getElementById('adoption-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your adoption request! We will contact you soon. 🐱');
  });
}