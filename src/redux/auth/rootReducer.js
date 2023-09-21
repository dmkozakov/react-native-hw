const initialState = {
  user: {
    email: null,
    login: null,
  },
  isLoggedIn,
};
export const rootReducer = (state = initialState, action) => {
  // Редюсер розрізняє екшени за значенням властивості type
  switch (action.type) {
    // Залежно від типу екшену виконуватиметься різна логіка
    case "tasks/addTask": {
      // Потрібно повернути новий об'єкт стану
      return {
        // в якому є всі дані існуючого стану
        ...state,
        // та новий масив задач
        tasks: [
          // в якому є всі існуючі завдання
          ...state.tasks,
          // та об'єкт нового завдання
          action.payload,
        ],
      };
    }
    default:
      // Кожен редюсер отримує всі екшени, відправлені в стор.
      // Якщо редюсер не повинен обробляти якийсь тип екшену,
      // необхідно повернути наявний стан без змін.
      return state;
  }
};
