// обробник події кліку
document.addEventListener("click", function (event) {
  const { target } = event; // отримуємо елемент на який клікнули
  const numberElement = target.closest(".number"); // знаходим найближчик батьківський елемент з класом намбер
  if (!numberElement) return; // якщо не знайдено елемент намбер то припиняємо виконання коду

  const countElement = numberElement.querySelector(".count"); // знаходимо дочірній елемент з класом count
  countElement.textContent = Number(countElement.textContent) + 1; // збільшуєм значення на 1
});
