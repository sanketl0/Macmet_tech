document.querySelector('#push').onclick = function () 
{

    if (document.querySelector('#newtask input').value.length == 0) {
        alert("Kindly Enter Task Name!!!!")
        document.getElementById('#newtask input').value = '';

    }


    
    else
    {

        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;

        var current_tasks = document.querySelectorAll(".delete");
        for (var i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function () {
                this.parentNode.remove();
            }
        }
    }
    
}