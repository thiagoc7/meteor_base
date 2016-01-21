
const initialTasks = [
  { _id: 1, text: "This is task 1" },
  { _id: 2, text: "This is task 2" },
  { _id: 3, text: "This is task 3" }
];

export const tasks = (state = initialTasks, action) => {
  switch (action.type) {
    default:
      return state;
  }
};