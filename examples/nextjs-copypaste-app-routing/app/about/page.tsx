import Link from 'next/link';

export default function About() {
	return (
		<div className="text-center">
			<h1 className="text-2xl font-bold mb-4">About Page</h1>
			<p className="mb-4">Welcome to the About page! Here, you can learn more about our company and what we do.</p>
			<p className="mb-4">Feel free to explore the rest of our website using the navigation menu below:</p>
			<nav className="max-w-sm mx-auto border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
				<Link href="/">Home</Link>
			</nav>
		</div>
	);
}