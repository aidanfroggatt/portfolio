import Footer from '~/components/layout/footer';
import { HeaderNotFound } from '~/components/layout/header';

export default function NotFound() {
  return (
    <>
      <HeaderNotFound />
      <main className="min-h-screen bg-main-page-mobile md:bg-info-page bg-no-repeat bg-cover flex flex-col justify-center items-center text-center gap-y-8">
        <h1>Oops — Page Not Found</h1>
      </main>
      <Footer />
    </>
  );
}
