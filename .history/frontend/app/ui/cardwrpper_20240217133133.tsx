import Title from "@/app/ui/title";
// import Card from "@/app/ui/card";
import Link from "next/link";

interface sites {
  title: string;
  src: string;
  url: string;
  tag: string[];
  githubUrl: string;
  cat: string;
}

export default function Cardwrpper({ sites }: { sites: sites[] }) {
  return (
    <section className="parts-grid">
      <Title title1="プロジェクト" title2="サイト" />
      <ul className="mt-8 mb-8">
        {sites.map((site, index) => {
          return (
            <li key={index}>
              <Link href={site.url}>{site.title}</Link>
            </li>
            <h4>{site</h4>
          );
        })}
      </ul>
    </section>
  );
}
