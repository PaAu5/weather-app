import { CITIES } from "@/consts/cities";

const input = document.getElementById('searchInput') as HTMLInputElement;
const results = document.getElementById('results') as HTMLUListElement;
const button = document.getElementById('searchBtn') as HTMLButtonElement;

function search(): void {
  const query = input.value.toLowerCase();
  results.innerHTML = '';

  if (!query) {
    results.innerHTML = '<li>Por favor escribe algo para buscar.</li>';
    return;
  }

  const filtered = CITIES.filter(city => city.name.toLowerCase().includes(query));

  if (filtered.length === 0) {
    results.innerHTML = '<li>No se encontraron resultados.</li>';
  } else {
    filtered.slice(0, 5).forEach(city => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.textContent = city.name;
      a.href = `./${city.name}`;
      li.appendChild(a);
      results.appendChild(li);
    });
  }
}

button.addEventListener('click', search);