// Вивести таблицю Піфагора (10×10), проте цього разу таблиця повинна бути створена динамічно

const table = document.getElementById("multiplication-table");

for (let i = 1; i <= 10; i++) {
  const row = table.insertRow();

  for (let j = 1; j <= 10; j++) {
    const string = row.insertCell();

    string.textContent = i * j;
  }
};

