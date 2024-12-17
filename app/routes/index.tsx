import { createFileRoute, useRouter } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Home,
});

function Home() {
  return <h1>Hello Tanstack Start</h1>;
}