import React from 'react'

const Table = ({ data }) => {
	return (
		<table>
			<tbody>
				<tr>
					<th>ID</th>
					<th>Name</th>
					<th>Last Name</th>
					<th>Email</th>
					<th>Gender</th>
				</tr>
				{data.map((item) => (
					<tr key={item.id}>
						<td>{item.id}</td>
						<td>{item.first_name}</td>
						<td>{item.last_name}</td>
						<td>{item.email}</td>
						<td>{item.gender}</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}

export default Table
