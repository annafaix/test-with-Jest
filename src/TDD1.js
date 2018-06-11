// 1 Använd mocking med jest.fn() för att testa funktionerna nedan, utan att databasen faktiskt ändras.

function deleteAllUsers(database) {
	database.deleteUsers();
}

function addUser(database, userName, userEmail) {
	database.addUser({ name: userName, email: userEmail });
}

function getUser(database, name) {
	let user = database.getUser(name);
	if( user )
return user;
	return false;
}

export{deleteAllUsers, addUser, getUser};
