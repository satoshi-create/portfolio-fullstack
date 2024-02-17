import Title from "@/app/ui/title";
import Card from "@/app/ui/card";
import { sites } from "@/app/lib/constants";



export default function Cardwrpper() {
  return (
    <section className="parts-grid">
      <Title title1="プロジェクト" title2="サイト" />
      <ul className="mt-8 mb-8">
        {sites.map((site, index) => {
          return <Card props={site} />;
        })}
      </ul>
    </section>
  );
}
