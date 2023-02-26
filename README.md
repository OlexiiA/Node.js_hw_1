# Отримуємо і виводимо весь список контактів у вигляді таблиці (console.table)
node index.js --action="list"
https://monosnap.com/file/rX9s1uH4bZ5BHHeeq3JrzTzYo3PU6s

# Отримуємо контакт по id
node index.js --action="get" --id=5
https://monosnap.com/file/audXnmE5F1WaA5CaqhXWCI9Yr0Wfgs

# Додаємо контакт
node index.js --action="add" --name="Mango" --email="mango@gmail.com" --phone="322-22-22"
https://monosnap.com/file/rITOqAoerSk0gjeDCMz2zm3fTteG5D

# Видаляємо контакт
node index.js --action="remove" --id=3
https://monosnap.com/file/Lv2ogLLLupeME1bA8E3pDZF5FPFliz
