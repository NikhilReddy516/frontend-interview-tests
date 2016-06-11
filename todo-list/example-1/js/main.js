$(function () {
  var todoRow = _.template($('#todo-row-template').html());
  var $todoList = $('.todo-list');
  var todos = [];

  $('.todo-form').on('submit', function (e) {
    e.preventDefault();
    var text = $('.todo-input').val();
    if (text.length === 0) {
      return;
    }
    $('.todo-input').val('');
    todos.push({
      text: text,
      active: true
    });
    render();
  });

  $todoList.on('click', '.btn', function () {
    var $this = $(this);
    var index = parseInt($this.parents('.todo-item').data('index'));
    var actionType = $this.data('action-type');
    switch (actionType) {
      case 'REMOVE':
        todos.splice(index, 1);
        break;
      case 'COMPLETE':
        todos[index].active = false;
        break;
      case 'UNCOMPLETE':
        todos[index].active = true;
        break;
    }
    render();
  });

  $('.todo-clear-completed-btn').click(function () {
    todos = todos.filter(function (todo) {
      return todo.active;
    });
    render();
  });

  $('.todo-clear-all-btn').click(function () {
    todos = [];
    render();
  });

  function render() {
    $todoList.empty();
    todos.forEach(function (todo, index) {
      $todoList.append($(todoRow({
        index: index,
        todo: todo
      })));
    });
  }

  render();
});
