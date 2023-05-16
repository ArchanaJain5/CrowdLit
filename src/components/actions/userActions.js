// export async function LoginUser (email,passw){
//     var myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");

//     var raw = JSON.stringify({
//         "email": email,
//         "password": passw
//       });
      
//       var requestOptions = {
//         method: 'POST',
//         headers: myHeaders,
//         body: raw,
//         redirect: 'follow'
//       };
      
//       let res =await fetch (
//         "http://localhost:3000/api/user/login",
//         requestOptions
//     )
//     let data =await res.json();
//     console.log(data);
// }


