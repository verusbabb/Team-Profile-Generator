function generateHTML(data) {

  function renderManager(manager) {
    return `<div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${manager.role}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Name: ${manager.name}</li>
      <li class="list-group-item">ID: ${manager.id}</li>
      <li class="list-group-item">Phone: <a href="tel:${manager.phone}" class="card-link">${manager.phone}</a></li>
      <li class="list-group-item">Email: <a href="mailto:${manager.email}" class="card-link">${manager.email}</a></li>
    </ul>
  </div>`
    //eventually replace with card build html
  }

  // ${manager.name}, ${manager.id}, ${manager.email}, ${manager.phone}, ${manager.role}


  function renderOther(other) {
    let str = '';
    other.forEach(function (employee) {
      str += employee.getRole() === 'Engineer' ? `<h1 class="display-4">Employee: ${employee.name}, ${employee.id}, ${employee.email}, ${employee.gitHub}, ${employee.role}</h1>` : `<h1 class="display-4">Employee: ${employee.name}, ${employee.id}, ${employee.email}, ${employee.school}, ${employee.role}</h1>`
      //eventually replace with card html
    })
    return str
  }

  return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
            
      <title>Document</title>
    </head>
    <body>
      
          <h1>This is My Team</h1>

          ${renderManager(data[0])}
      </div>
      </div>
      </div>     
    </body>
    </html>`
}

module.exports = generateHTML

