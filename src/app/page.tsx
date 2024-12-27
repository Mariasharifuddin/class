import Link from "next/link";
export default async function Home(){
  const url = await fetch('https://jsonplaceholder.typicode.com/todos')
  const response = await url.json();
	return (
		<main>
			{response.map((todos: any) => (
				<div>
					<Link href={`${todos.id}`}>
						<h1>{todos.title}</h1>
					</Link>
				</div>
			))}
		</main>
	);
}


