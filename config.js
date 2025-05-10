<script>
  // Отримуємо форму за класом
  const form = document.querySelector('.container');

  // Додаємо обробник події submit
  form.addEventListener('submit', function() {
    // Перенаправлення на index2.html
    window.location.href = 'index2.html';
  });
</script>
