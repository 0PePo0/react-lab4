Опис потоку:

useTodos — керує всіма станами: todos, isLoading, error, pagination, search.
Дані (todos, isLoading, searchTerm, currentPage, totalTodos, limitPerPage) передаються через props вниз до дочірніх компонентів.
Дії користувача (додавання, редагування, видалення, пошук, зміна сторінки) передаються вгору через callback-функції (onAddTodo, onDelete, onToggle, onEdit, setSearchTerm, goToNextPage, goToPrevPage)


Використані шаблони проєктування:

Container–Presenter (Smart–Dumb) — компонент AppTodoPage виконує роль контейнера, який містить усю логіку і стан додатку, тоді як дочірні компоненти відповідають лише за відображення даних і виклик callback-функцій.
Custom Hook — хук useTodos інкапсулює бізнес-логіку роботи з даними: завантаження, CRUD-операції, пагінацію та пошук, спрощуючи компонент AppTodoPage.
Lifting State Up — стан і логіка керування передаються від дочірніх компонентів (наприклад, TodoItem) до вищого рівня (AppTodoPage) через callback-функції, що забезпечує централізоване оновлення даних.
Prop Drilling — дані та функції передаються через props між компонентами (від AppTodoPage до TodoItem) без використання зовнішнього сховища, забезпечуючи контрольований потік даних у межах додатку.

<img width="810" height="659" alt="image" src="https://github.com/user-attachments/assets/94d306fb-06db-4fcf-bf47-c7ebd83be1b8" />
