import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
	index("routes/home.tsx"),
	route("about", "routes/about.tsx"),

	// 一覧画面(作成と削除)
	route("todos", "routes/todos.tsx", [
		index("routes/todos/index.tsx"),
		// 詳細画面(編集)
		route(":id", "routes/todos/todo.tsx"),
	]),
] satisfies RouteConfig;
