import React, { useState } from 'react'
import Wrapper from './components/Helpers/wrappper'
import AddUser from './components/Users/AddUser'
import UserList from './components/Users/UserList'

function App() {
	const [users, setUsers] = useState([])

	const addUserNandler = (name, age) => {
		setUsers([...users, { name, age, id: Math.random().toString() }])
	}

	const onGetUsers = (filUs) => {
		setUsers(filUs)
	}
  
	return (
		<Wrapper>
			<AddUser onAddUser={addUserNandler} />
			<UserList users={users} onGetUsers={onGetUsers} />
		</Wrapper>
	)
}

export default App
