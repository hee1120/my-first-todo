import { Outlet } from "react-router";

const Todos = () => {
	return (
		<div>
			<h1>Todos</h1>
			<Outlet />
		</div>
	)
}

export default Todos;