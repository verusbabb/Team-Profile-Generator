function generateHTML(data) {

    function renderManager(manager) {
        return `<h1 class="display-4">Employee: ${manager.name}, ${manager.id}, ${manager.email}, ${manager.phone}, ${manager.role}</h1>`
        //eventually replace with card build html
    }


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
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
      <title>Document</title>
    </head>
    <body>
      <div class="jumbotron jumbotron-fluid">
      <div class="container">
        ${renderManager(data[0])}
        </div>

    <div>
        ${renderOther(data.slice(1))}
    </div>


      </div>
    </div>
    </body>
    </html>`
}

module.exports = generateHTML

