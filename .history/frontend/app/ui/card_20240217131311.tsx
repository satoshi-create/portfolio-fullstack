export default function Card({
  props: { title },
}: {
  props: { title: string };
}) {
  console.log(title);

  return <li>card component</li>;
}
