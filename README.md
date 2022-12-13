# Övning - Implementera Redux med testning

Det här är en enkel Todo-app som använder useState i TodoList.tsx för att hålla koll på en todolista. Uppgiften är att lägga till Redux i applikationen och hantera Todos med hjälp av Redux istället för useState.

## Kom igång

```sh
npm install
npm start
```

## Instruktioner

1. Installera Redux i appen
2. Skapa en todoSlice som innehåller följande reducer-funktioner:
   1. addTodo(text: string)
   2. removeTodo(id: string)
   3. sortTodos(desc: boolean)
3. Skapa enhetstest för alla reducer-funktioner
4. Använd useSelector och useDispatch i TodoList-komponenten för att ändra och hämta från Redux-statet

## Extra

- Lägg till stöd för Typescript i Redux
- Lägg till så att *newTodoText* och *filterDescending* ligger i Redux istället för useState
- Ordna så att en ny Todo hamnar rätt i filtreringen och inte längst ner