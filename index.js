
$(function() {
  $('#js-shopping-list-form').on('submit', function(event) {
    event.preventDefault();
    // get submitted string
    const newItem = $(this).find('#shopping-list-entry').val();

    if (!newItem.trim()) {
      alert("Please enter an item");
    } else {
      // append newItem to ul
      $('ul').append(
        `<li>
        <span class="shopping-item">${newItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
        </li>`
      );
    }
    // clear the input line
    $('#shopping-list-entry').val("");
  });

  // when check is clicked,
  $('ul').on('click', '.shopping-item-toggle', function(event) {
    // target the <li> parent
    console.log($(this));
    const selected = $(this).closest('ul');
    // target <span> and toggle class
    selected.children('li').children('span').toggleClass('shopping-item__checked');
    console.log(selected.children('li').children('span'));
  });

  // when delete is clicked
  
  
})