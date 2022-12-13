import reducer, {
  addTodo,
  removeTodo,
  sortTodos,
} from "../features/todoSlicer";

describe("todoSlice", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, { type: undefined })).toEqual({
      todos: [],
      filterDescending: false,
    });
  });

// Test of addTodo
  it("should add todo in todos by addTodo action", () => {
    const previousState = { todos: [], filterDescending: false };
    expect(reducer(previousState, addTodo("apelsin"))).toStrictEqual({
      todos: [{ id: "b2d04b1e-dcfc-4a5b-a1a8-cf49eb497cf3", text: "apelsin" }],
      filterDescending: false,
    });
  });

  // Test of removeTodo
  it("should add todo in todos by removeTodo action", () => {
    const previousState = {
      todos: [
        { id: "b2d04b1e-dcfc-4a5b-a1a8-cf49eb497cf3", text: "apelsin" },
        { id: "ft6d04b1e-dcfc-4a5b-a1a8-cf49eb497cc4", text: "mango" },
      ],
      filterDescending: false,
    };
    expect(
      reducer(previousState, removeTodo("b2d04b1e-dcfc-4a5b-a1a8-cf49eb497cf3"))
    ).toEqual({
      todos: [{ id: "ft6d04b1e-dcfc-4a5b-a1a8-cf49eb497cc4", text: "mango" }],
      filterDescending: false,
    });
  });

  // Test of sortTodos in ascending order
  it("should change filterDescending value to true and sort todos in ascending order", () => {
    const previousState = {
      todos: [
        { id: "b2d04b1e-dcfc-4a5b-a1a8-cf49eb497cf3", text: "apelsin" },
        { id: "ft6d04b1e-dcfc-4a5b-a1a8-cf49eb497cc4", text: "mango" },
        { id: "ct6d04b1e-dcfc-4a5b-a1a8-cf49eb497cl6", text: "banan" },
      ],
      filterDescending: false,
    };
    expect(reducer(previousState, sortTodos(true))).toEqual({
      todos: [
        { id: "b2d04b1e-dcfc-4a5b-a1a8-cf49eb497cf3", text: "apelsin" },
        { id: "ct6d04b1e-dcfc-4a5b-a1a8-cf49eb497cl6", text: "banan" },
        { id: "ft6d04b1e-dcfc-4a5b-a1a8-cf49eb497cc4", text: "mango" },
      ],
      filterDescending: true,
    });
  });
 
  // Test of sortTodos in descending order
  it("should change filterDescending value to false and sort todos in descending order", () => {
    const previousState = {
      todos: [
        { id: "b2d04b1e-dcfc-4a5b-a1a8-cf49eb497cf3", text: "apelsin" },
        { id: "ct6d04b1e-dcfc-4a5b-a1a8-cf49eb497cl6", text: "banan" },
        { id: "ft6d04b1e-dcfc-4a5b-a1a8-cf49eb497cc4", text: "mango" },
      ],
      filterDescending: true,
    };
    expect(reducer(previousState, sortTodos(false))).toEqual({
      todos: [
        { id: "ft6d04b1e-dcfc-4a5b-a1a8-cf49eb497cc4", text: "mango" },
        { id: "ct6d04b1e-dcfc-4a5b-a1a8-cf49eb497cl6", text: "banan" },
        { id: "b2d04b1e-dcfc-4a5b-a1a8-cf49eb497cf3", text: "apelsin" },
      ],
      filterDescending: false,
    });
  });
});
