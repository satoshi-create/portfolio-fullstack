export default function Card({
  props: { title, src, url, tag, githubUrl },
}: {
    props: { title: string; src: string; url: string; tag: []; githubUrl: string; };
}) {
  console.log(title);

  return <li>card component</li>;
}
