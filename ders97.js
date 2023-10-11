//!==>TEMPLATE LITERALS

function write(firstName , lastName){
  console.log(`name: ${firstName}  lastname: ${lastName}`);
}

write("Musa" , "Khalilov");

function getUserById(userId){
  fetch(`http://localhost:8080/users/${userId}`);

}

getUserById(8);
