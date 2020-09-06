import DefaultLayout from "../../layouts/Default";
import PageTitle from "../../components/PageTitle";
import Link from "next/link";
import PageContent from "../../components/PageContent";

export default function HomePage() {
  return (
    <DefaultLayout>
      <PageTitle>
        <h1>Score cards</h1>
      </PageTitle>
      <PageContent>
        <Link href="/scorecards/passthepigs">
          <a>Pass the Pigs</a>
        </Link>
      </PageContent>
    </DefaultLayout>
  );
}
