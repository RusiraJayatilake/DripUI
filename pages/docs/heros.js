import Meta from "../../components/layout/meta";
import PageHeading from "../../components/other/PageHeadings";

export default function Heros() {
  return (
    <section className="lg:px-12 px-3">
      <Meta
        title={"DripUI - Tailwind CSS Heros"}
        description={"DripUI offers a wide range of responsive Heros"}
        url={"/components/footer"}
      />

      <PageHeading
        title={"Hero Components"}
        alt={"hero"}
        description={
          "The hero component is an important place for a website to store important links and contact information. DripUI provides wide range of responsive footers"
        }
      />

      <section className="flex flex-col gap-6">
        <h2 className="text-3xl font-semibold">Hero Sections</h2>
      </section>
    </section>
  );
}
