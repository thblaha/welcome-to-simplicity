const state = {
  employeeList: [{
      name:'Name: Lily Tomlin',

      officeNum:'Office Number: 8233',
      
      phoneNum: 'Phone Number: (407)-682-8888',
    },
    {
      name:'Name: Rhea Butcher',

      officeNum:'Office Number: 219',

      phoneNum:'Phone Number: (404)-555-5555',
    },
    {
      name:'Name: Karen Walker',

      officeNum:'Office Number: 923',

      phoneNum:'Phone Number: (321)555-5555',
    },
    {
      name:'Name: Cristina Yang',

      officeNum:'Office Number: 324',

      phoneNum:'Phone Number: (912)555-5555',
    },
  ]
};

const showInput = function () {
  $('input').removeClass('hide');

}

const hideAllRoutes = function () {
  $('.route').addClass('hidden');
}

const showRoute = function (route) {
  hideAllRoutes();
  $(route).removeClass('hidden');
}

const verify = function () {
  const verifyUser = $('#display-verify').val();
  const foundEmployee = state.employeeList.find(employee => employee.name === verifyUser);
  if (foundEmployee != null) {
    $('#verify-content').html(`<div class="user-info">Employee Found</div>`)
  } else {
    $('#verify-content').html(`<div class="user-info">Employee Not Found</div>`)
  }
}
const lookup = function () {
  const lookupUser = $('#display-lookup').val();
  const foundEmployee = state.employeeList.find(employee => employee.name === lookupUser);
  if (foundEmployee != null) {
    $('#lookup-content').html(`<div class="user=info">${foundEmployee.name}<br/>${foundEmployee.officeNum}<br/>${foundEmployee.phoneNum}</div>`);
  } else {
    $('#lookup-content').html(`<div class="user-info">Employee Not Found</div>`)
  }
}
const contains = function () {
  const nameContains = $('#display-contains').val();
  const foundEmployees = state.employeeList.filter(employee => employee.name.indexOf(nameContains) != -1);
  $('#contains-content').empty();
  if (foundEmployees.length > 0) {
    foundEmployees.forEach(foundEmployee =>
      $('#contains-content').append(`<div class="user=info">${foundEmployee.name}<br/>${foundEmployee.officeNum}<br/>${foundEmployee.phoneNum}</div>`));
  } else {
    $('#contains-content').html(`<div class="user-info">Employee Not Found</div>`)
  }
}

const update = function () {
  const content = $('content');
  content.empty();
  const updateUser = $('#update-name').val();
  const foundEmployee = state.employeeList.find(employee => employee.name == updateUser);
  if (foundEmployee != null) {
    foundEmployee.name = updateUser;
    foundEmployee.officeNum = $('#update-number').val();
    foundEmployee.phoneNum = $('#update-phone').val();
    $('#update-content').html(`<div class="user=info">${foundEmployee.name}<br/>${foundEmployee.officeNum}<br/>${foundEmployee.phoneNum}</div>`);
  } else {
    $('#update-content').html(`<div class="user-info">Employee Not Found</div>`)
  }
}
const add = function () {
  const addEmployee = {};
  addEmployee.name = $('#display-name').val();
  addEmployee.officeNum = $('#display-number').val();
  addEmployee.phoneNum = $('#display-phone').val();
  state.employeeList.push(addEmployee);
  $('#add-content').append(`<div class="user=info">${addEmployee.name}<br/>${addEmployee.officeNum}<br/>${addEmployee.phoneNum}</div>`);
}

const del = function () {
  const query = $('#display-delete').val();
  state.employeeList.forEach((user, index) => {
    if (user.name == query) {
      const deletedEmployees = state.employeeList.splice(index, 1);
      $('#delete-content').html(`<div class="user-info">Employee Deleted</div>`)
      return deletedEmployees;
    }
  });
}
$('#delete-content').html(`<div class="user-info">Employee Not Found</div>`)

const renderVerifyRoute = function () {
  const content = $('#content');
  content.empty();
  content.append('<input type="text" id="display-verify" />');
  content.append('<button id="verify"><i class="fas fa-search"></i></button>');
  content.append('<div id="verify-content"></div>');
  $('#verify').on('click', verify);
}

const renderLookupRoute = function () {
  const content = $('#content');
  content.empty();
  content.append('<input type="text" id="display-lookup" />');
  content.append('<button id="lookup"><i class="fas fa-search"></i></button>');
  content.append('<div id="lookup-content"></div>');
  $('#lookup').on('click', lookup);
}

const renderContainsRoute = function () {
  const content = $('#content');
  content.empty();
  content.append('<input type="text" id="display-contains" />');
  content.append('<button id="contains"><i class="fas fa-search"></i></button>');
  content.append('<div id="contains-content"></div>');
  $('#contains').on('click', contains);
}


const renderUpdateRoute = function () {
  const content = $('#content');
  content.empty();
  content.append('<input type="text" id="display-update" />');
  content.append('<button id="update"><i class="fas fa-search"></i></button>');
  content.append('<div id="update-content"></div>');
  $('#update').on('click', update);
}

const renderAddRoute = function () {
  const content = $('#content');
  content.empty();
  content.append('<input type="text" id="display-add" />');
  content.append('<button id="add"><i class="fas-fa-search"></i></button>');
  content.append('<div id="add-content"></div>');
  $('#add').on('click', add);
}

const renderDeleteRoute = function () {
  const content = $('#content');
  content.empty();
  content.append('<input type="text" id="display-delete" />');
  content.append('<button id="delete"><i class="fas fa-search"></i></button>');
  content.append('<div id="delete-content"></div>');
  $('#delete').on('click', del);
}
const renderPrintRoute = function () {
  const content = $("#content");
  content.empty();
  state.employeeList.forEach(user => {
    content.append(`<div class="user-info">${user.name}<br/>${user.officeNum}<br/>${user.phoneNum}</div>`);
  });
}

$('#print-route').on('click', renderPrintRoute);
$('#verify-route').on('click', renderVerifyRoute);
$('#lookup-route').on('click', renderLookupRoute);
$('#contains-route').on('click', renderContainsRoute);
$('#update-route').on('click', renderUpdateRoute);
$('#add-route').on('click', renderAddRoute);
$('#delete-route').on('click', renderDeleteRoute);