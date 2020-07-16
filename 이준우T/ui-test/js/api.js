 $(".btn-warning").click(function () {
     $("#spinner").show();

     axios.get('http://4e609fc0f2be.ngrok.io/api/schedule')
         .then(function (response) {
             console.log(response);
             const schedules = response.data.schedules
             schedules.forEach((schedule) => {
                 $("#list").show().append(
                     `<li>할일 ${schedule.name}, 일시 ${schedule.date}</li>`
                 )
             })

             $("#spinner").hide(); //axios데이터가 들어오면 숨김

         })
         .catch(function (error) {
             // handle error
             console.log(error);
         })

 })

 $(".btn-info").click(function () {
     $("#spinner").show();
     $("#list").hide();
     axios.get('http://4e609fc0f2be.ngrok.io/api/homework ')
         .then(function (response) {
             console.log(response);
             const todos = response.data.todos

             todos.forEach((todo) => {
                 $("#list2").show().append(
                     `<li>${todo.name}, ${todo.task}</li>`
                 )
             })

             $("#spinner").hide(); //axios데이터가 들어오면 숨김

         })
         .catch(function (error) {
             // handle error
             console.log(error);
         })

 })