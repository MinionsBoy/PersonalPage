
          var API_KEY = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjVjMGEyMzEzNjg5ZjhlZDI3ZjNmZTA0MGU0MjQ5ZWNhZmM4NWI2NzAzYjg0MGE5ZmZjNzZiNjJmYjdlNzE1NWE2ZDdlYTc2Mzg0ZjJmZGZhIn0.eyJhdWQiOiIxMCIsImp0aSI6IjVjMGEyMzEzNjg5ZjhlZDI3ZjNmZTA0MGU0MjQ5ZWNhZmM4NWI2NzAzYjg0MGE5ZmZjNzZiNjJmYjdlNzE1NWE2ZDdlYTc2Mzg0ZjJmZGZhIiwiaWF0IjoxNTIwMjMzMDQzLCJuYmYiOjE1MjAyMzMwNDMsImV4cCI6MTgzNTg1MjI0Mywic3ViIjoiOTUwIiwic2NvcGVzIjpbInVzZXJCYXNlSW5mbyIsInVzZXJEZXRhaWxlZEluZm8iLCJ1c2VyQ291cnNlSW5mbyJdfQ.ItcQglQpXL3-Ajgv2rShz9pYqt1ver0lfGODMg9l_ex-HEmY7U8eY8c2dGVexO3dKBWB9HtbY8hB1i4avL8C0mYrbXlo2SNuQeNg_P3yctjDclgfpgOT6p9NdXE98EmIL98FRxKxgIMadTGGga-H4zv4nIs2wmu5uWMS1Gmbg_cNwS5kyeQ6ctWQTdMSpq2qC-KnyZJ1bGQzKtUmJmQvIWF4ssZbGL2Pj6SRr8Y-1qz6yw3jN8vmS5a42B756TS7LIeAYAIY_iS6u0VMm_FVbxrHgYcRRZVkfBGcN7T6r5UEJ5EFGuRbwGzbiPj_5lqgyYIsdaJwvunggBb1rXZVyLcJzpvMBjj028iKFbJWSj1lB-gyfNAP8AyfUKNWs5PEJkw8rsSsrA4ryLWPpHuuoeu6mlGDiPqGWzAvF1P0IFtxCyphDPj-lM0lGehOrlP98WAwWXUE53VvcYrze0BSvCYJes_Dea-Lu-UBaYgjvmZEGV71fU2ugtslvIE92meLzWgF0jJEv-XZji2X8WaHm5pqtwa1aP6prs1VgQx5bhbGg_k6IKuD-b6-OVtR3zeUnsW94xmBUoqPzXtpCVUtR-9Hq0hGA8Lb7bIEpHSbQD-CLxSjCOaRilj868GTWRQgFMvtHEeWlZiMacO_hd9K93WB1Y_Hxcv9VNELRfkhPuo';
          var client = new INTITAClient({
            key: API_KEY,
         });
          var courseId = 1;
          var moduleId = 1;
          client.getUserDetails(function (error, data){                    
              console.log(error, data)
              var aboutme=document.getElementById("aboutme");
              aboutme.innerText= data.secondName + " " + data.firstName;
              var photo = document.getElementById("photo");
              photo.src=data.avatar;
              var email = document.getElementById("email");
              email.innerText = data.email;
              var city = document.getElementById("city");
              city.innerText = "City:" + "  " + data.city;
              var country = document.getElementById("country");
              country.innerText = "Country:" + "  " + data.country;
              var interests = document.getElementById("interests");
              interests.innerText = "Interests:  " + data.interests
              
              document.getElementById("facebook").setAttribute("href",data.facebook);
              document.getElementById("googleplus").setAttribute("href",data.googleplus);
          });
          client.getUserCoursesAndModules(function (error, data) {
            console.log(error, data);
            
          client.getUserCoursesAndModules(1,function (error, data) {
            console.log(error, data)
            document.getElementById('courses').innerText = data.courses[0].title;
  
            data.courses.forEach(function (element) {

          client.getCourseModules(element.id,function (error,modules) 
          {
            modules.forEach(function (module) {
            console.log(modules);

              var modules = document.getElementById("modules");
                
              var div = document.createElement("div");
              div.innerText = module.title;
              modules.appendChild(div);

              var ul_occupation = document.createElement("ul");
              div.appendChild(ul_occupation);

          client.getModuleLectures(module.id,function (error,occupations) 
                    {
                      occupations.forEach(function (occupation)
                      {
                        console.log(occupations);
                        var li_occupation = document.createElement("li");
                        li_occupation.innerText = occupation.title;
                        ul_occupation.appendChild(li_occupation);
                        div.onclick=function()
                        {
                          ul_occupation.classList.toggle('visible');            
                          ul_occupation.classList.toggle('custom-jumbotron');
                        };             
                      });
                    });
                });
          });
    });
});});